<?php
/**
 * Plugin Name: Mentora Bridge Test Link Sender
 * Description: WooCommerce order complete hone par test link email karta hai + results email karta hai
 * Version: 3.0
 * Author: Mentora Bridge
 */

if (!defined('ABSPATH')) exit;

// =============================================
// CONSTANTS
// =============================================
define('MENTORA_ADMIN_EMAIL', 'support@mentorabridge.com');
define('MENTORA_FROM_EMAIL',  'admin@mentorabridge.com');
define('MENTORA_FROM_NAME',   'Mentora Bridge');
define('MENTORA_PORTAL_URL',  'https://mentorabridgepsychometric.com');

// =============================================
// CORS — portal domain ko allow karo
// =============================================
add_action('rest_api_init', function() {
    $allowed_origins = [
        'https://mentorabridgepsychometric.com',
        'https://mentora-bridge.vercel.app',
    ];
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if (in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: $origin");
        header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");
        header("Access-Control-Allow-Headers: Authorization, Content-Type");
        header("Access-Control-Allow-Credentials: true");
    }
}, 1);

// OPTIONS preflight request — alag hook se handle karo
add_action('init', function() {
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        $allowed_origins = [
            'https://mentorabridgepsychometric.com',
            'https://mentora-bridge.vercel.app',
        ];
        $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
        if (in_array($origin, $allowed_origins)) {
            header("Access-Control-Allow-Origin: $origin");
            header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");
            header("Access-Control-Allow-Headers: Authorization, Content-Type");
            header("Access-Control-Allow-Credentials: true");
            status_header(200);
            exit();
        }
    }
}, 1);

// =============================================
// EMAIL HELPER — consistent From header + HTML
// =============================================
function mentora_send_email($to, $subject, $html_body) {
    $headers = [
        'Content-Type: text/html; charset=UTF-8',
        'From: ' . MENTORA_FROM_NAME . ' <' . MENTORA_FROM_EMAIL . '>',
    ];
    $sent = wp_mail($to, $subject, $html_body, $headers);
    if (!$sent) {
        // Log failure for debugging — check WordPress debug.log
        error_log("[Mentora] wp_mail FAILED | To: $to | Subject: $subject");
    }
    return $sent;
}

// Log wp_mail errors to debug.log
add_action('wp_mail_failed', function($error) {
    error_log('[Mentora] wp_mail error: ' . print_r($error->get_error_messages(), true));
});

// =============================================
// PRODUCT → TEST TYPE MAP
// =============================================
function mentora_get_product_test_map() {
    return [
        3999 => 'age13-14',
        3998 => 'age14-15',
        4310 => 'age15-16',
        4314 => 'age16-17',
        4315 => 'age17-18',
        4316 => 'age18-22',
        4317 => 'age23plus',
    ];
}

function mentora_get_test_labels() {
    return [
        'age13-14'  => 'Age 13–14 | Class 7–8 Career Aptitude Test',
        'age14-15'  => 'Age 14–15 | Class 9–10 Career Aptitude Test',
        'age15-16'  => 'Age 15–16 | Class 10 Career Direction Test',
        'age16-17'  => 'Age 16–17 | Class 11–12 Career Aptitude Test',
        'age17-18'  => 'Age 17–18 | Class 12 Career Decision Test',
        'age18-22'  => 'Age 18–22 | Graduate Career Roadmap Assessment',
        'age23plus' => 'Age 23+ | Professional Career Transition Assessment',
    ];
}

// =============================================
// 1. ORDER COMPLETE → SEND TEST LINK EMAIL
//    Dono hooks: processing + completed
//    (processing = payment done, completed = manually marked)
// =============================================
add_action('woocommerce_order_status_processing', 'mentora_send_test_link', 10, 1);
add_action('woocommerce_order_status_completed',  'mentora_send_test_link', 10, 1);

function mentora_send_test_link($order_id) {
    $order = wc_get_order($order_id);
    if (!$order) {
        error_log("[Mentora] ORDER NOT FOUND: #$order_id");
        return;
    }

    error_log("[Mentora] Hook fired for Order #$order_id | Status: " . $order->get_status());

    // Already sent check — prevent duplicate emails on re-trigger
    if ($order->get_meta('_mentora_link_sent') === 'yes') {
        error_log("[Mentora] Already sent for Order #$order_id — skipping");
        return;
    }

    $product_test_map = mentora_get_product_test_map();
    $test_labels      = mentora_get_test_labels();

    $test_type = null;
    foreach ($order->get_items() as $item) {
        $product_id = $item->get_product_id();
        if (isset($product_test_map[$product_id])) {
            $test_type = $product_test_map[$product_id];
            break;
        }
    }

    if (!$test_type) return; // Non-test product

    // Save test type + used flag to order
    $order->update_meta_data('_mentora_test_type', $test_type);
    $order->update_meta_data('_mentora_test_used', 'no');
    $order->update_meta_data('_mentora_link_sent', 'yes'); // prevent duplicate
    $order->save();

    $token          = $order_id;
    $test_link      = MENTORA_PORTAL_URL . '/verify?token=' . $token . '&type=' . $test_type;
    $test_name      = $test_labels[$test_type] ?? 'Career Assessment Test';
    $customer_name  = trim($order->get_billing_first_name() . ' ' . $order->get_billing_last_name());
    $customer_email = $order->get_billing_email();

    if (empty($customer_email)) {
        error_log("[Mentora] Order #$order_id — customer email missing, cannot send test link.");
        return;
    }

    $subject = 'Your Mentora Bridge Test Link — ' . $test_name;
    $message = mentora_test_link_email_html($customer_name, $test_name, $test_link);

    $sent = mentora_send_email($customer_email, $subject, $message);
    error_log("[Mentora] Test link email | Order #$order_id | To: $customer_email | Sent: " . ($sent ? 'YES' : 'NO'));
}

// =============================================
// 2. REST: TEST EMAIL — SMTP check karo
//    GET /wp-json/mentora/v1/test-email?to=your@email.com
// =============================================
add_action('rest_api_init', function () {
    register_rest_route('mentora/v1', '/test-email', [
        'methods'             => 'GET',
        'callback'            => function(WP_REST_Request $request) {
            $to   = sanitize_email($request->get_param('to') ?? MENTORA_ADMIN_EMAIL);
            $sent = mentora_send_email($to, 'Mentora SMTP Test', '<p>SMTP is working! ✅</p>');
            return new WP_REST_Response([
                'success' => $sent,
                'to'      => $to,
                'message' => $sent ? 'Email sent successfully' : 'Email FAILED — check error_log',
            ], $sent ? 200 : 500);
        },
        'permission_callback' => '__return_true',
    ]);
});

// =============================================
// RESEND VIA GET — browser se directly call karo
// GET /wp-json/mentora/v1/resend?order=1234
// =============================================
add_action('rest_api_init', function () {
    register_rest_route('mentora/v1', '/resend', [
        'methods'             => 'GET',
        'callback'            => function(WP_REST_Request $request) {
            $order_id = intval($request->get_param('order'));
            if (!$order_id) {
                return new WP_REST_Response(['success' => false, 'error' => 'order param required'], 400);
            }
            $order = wc_get_order($order_id);
            if (!$order) {
                return new WP_REST_Response(['success' => false, 'error' => 'Order not found'], 404);
            }
            // Sent flag clear karo
            $order->update_meta_data('_mentora_link_sent', 'no');
            $order->save();
            // Email bhejo
            mentora_send_test_link($order_id);
            return new WP_REST_Response([
                'success'  => true,
                'order_id' => $order_id,
                'email'    => $order->get_billing_email(),
                'message'  => 'Test link resent to ' . $order->get_billing_email(),
            ], 200);
        },
        'permission_callback' => '__return_true',
    ]);
});

// =============================================
// 3. REST: RESEND TEST LINK (manual trigger)
//    POST /wp-json/mentora/v1/resend-link
//    Body: { "orderId": 1234 }
// =============================================
add_action('rest_api_init', function () {
    register_rest_route('mentora/v1', '/resend-link', [
        'methods'             => 'POST',
        'callback'            => 'mentora_resend_test_link',
        'permission_callback' => '__return_true',
    ]);
});

function mentora_resend_test_link(WP_REST_Request $request) {
    $data     = $request->get_json_params();
    $order_id = intval($data['orderId'] ?? 0);
    if (!$order_id) {
        return new WP_REST_Response(['success' => false, 'error' => 'orderId required'], 400);
    }

    $order = wc_get_order($order_id);
    if (!$order) {
        return new WP_REST_Response(['success' => false, 'error' => 'Order not found'], 404);
    }

    // Force resend — clear the sent flag
    $order->update_meta_data('_mentora_link_sent', 'no');
    $order->save();

    mentora_send_test_link($order_id);
    return new WP_REST_Response(['success' => true], 200);
}

// =============================================
// 3. REST: SEND RESULTS EMAIL
//    POST /wp-json/mentora/v1/send-results
// =============================================
add_action('rest_api_init', function () {
    register_rest_route('mentora/v1', '/send-results', [
        'methods'             => 'POST',
        'callback'            => 'mentora_send_results_email',
        'permission_callback' => '__return_true',
    ]);
});

function mentora_send_results_email(WP_REST_Request $request) {
    $data           = $request->get_json_params();
    $order_id       = sanitize_text_field($data['orderId']       ?? '');
    $customer_name  = sanitize_text_field($data['customerName']  ?? '');
    $customer_email = sanitize_email($data['customerEmail']      ?? '');
    $admin_email    = sanitize_email($data['adminEmail']         ?? MENTORA_ADMIN_EMAIL);
    $test_type      = sanitize_text_field($data['testType']      ?? '');
    $answers        = sanitize_textarea_field($data['answers']   ?? '');
    $submitted_at   = sanitize_text_field($data['submittedAt']   ?? '');

    $errors = [];

    // ── Admin email ──────────────────────────────────────────────────────────
    $admin_subject = "New Test Submission — Order #{$order_id} ({$test_type})";
    $admin_msg     = mentora_admin_results_email_html(
        $customer_name, $customer_email, $order_id, $test_type, $submitted_at, $answers
    );
    $admin_sent = mentora_send_email($admin_email, $admin_subject, $admin_msg);
    if (!$admin_sent) $errors[] = 'admin_email_failed';

    // ── Student confirmation email ───────────────────────────────────────────
    if (!empty($customer_email)) {
        $student_subject = 'Your test has been submitted — Mentora Bridge';
        $student_msg     = mentora_student_confirmation_email_html($customer_name);
        $student_sent    = mentora_send_email($customer_email, $student_subject, $student_msg);
        if (!$student_sent) $errors[] = 'student_email_failed';
        error_log("[Mentora] Student confirmation | Order #$order_id | To: $customer_email | Sent: " . ($student_sent ? 'YES' : 'NO'));
    } else {
        $errors[] = 'student_email_missing';
        error_log("[Mentora] Student confirmation SKIPPED — customerEmail empty | Order #$order_id");
    }

    if (!empty($errors)) {
        return new WP_REST_Response(['success' => false, 'errors' => $errors], 500);
    }

    return new WP_REST_Response(['success' => true], 200);
}

// =============================================
// EMAIL TEMPLATES
// =============================================

function mentora_test_link_email_html($customer_name, $test_name, $test_link) {
    return "
    <html>
    <body style='font-family: Arial, sans-serif; background: #f7f5f0; padding: 2rem; margin: 0;'>
      <div style='max-width: 560px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);'>

        <div style='background: #1a1a2e; padding: 2rem; text-align: center;'>
          <h1 style='color: #c9a84c; font-family: Georgia, serif; margin: 0; font-size: 1.6rem;'>Mentora Bridge</h1>
          <p style='color: rgba(255,255,255,0.6); margin: 0.5rem 0 0; font-size: 0.9rem;'>Career Guidance Portal</p>
        </div>

        <div style='padding: 2rem;'>
          <p style='font-size: 1rem; color: #333;'>Dear <strong>{$customer_name}</strong>,</p>
          <p style='color: #555; line-height: 1.7;'>
            Thank you for your purchase! Your <strong>{$test_name}</strong> is ready to begin.
          </p>

          <div style='background: #f7f5f0; border-radius: 10px; padding: 1.5rem; margin: 1.5rem 0; text-align: center;'>
            <p style='color: #888; font-size: 0.85rem; margin: 0 0 1rem;'>Click the button below to start your test:</p>
            <a href='{$test_link}'
               style='display: inline-block; background: #1a1a2e; color: #c9a84c; text-decoration: none;
                      padding: 0.9rem 2.5rem; border-radius: 8px; font-weight: bold; font-size: 1rem;'>
              Start My Test →
            </a>
            <p style='color: #aaa; font-size: 0.78rem; margin: 1rem 0 0; word-break: break-all;'>{$test_link}</p>
          </div>

          <div style='border: 1px solid #e2ddd5; border-radius: 10px; padding: 1.25rem; margin: 1.5rem 0;'>
            <p style='color: #888; font-size: 0.82rem; margin: 0 0 0.5rem;'><strong>⚠️ Important:</strong></p>
            <ul style='color: #888; font-size: 0.82rem; padding-left: 1.2rem; margin: 0; line-height: 1.8;'>
              <li>This link is valid for <strong>7 days</strong> from today.</li>
              <li>This link can only be used <strong>once</strong>.</li>
              <li>Do not share this link with anyone.</li>
              <li>Do not close the browser during the test.</li>
            </ul>
          </div>

          <p style='color: #555; font-size: 0.9rem;'>
            Need help? Contact us at <a href='mailto:support@mentorabridge.com' style='color: #c9a84c;'>support@mentorabridge.com</a>
          </p>
        </div>

        <div style='background: #f7f5f0; padding: 1.25rem; text-align: center;'>
          <p style='color: #aaa; font-size: 0.78rem; margin: 0;'>© Mentora Bridge | mentorabridge.com</p>
        </div>
      </div>
    </body>
    </html>";
}

function mentora_admin_results_email_html($customer_name, $customer_email, $order_id, $test_type, $submitted_at, $answers) {
    return "
    <html><body style='font-family: Arial, sans-serif; padding: 1.5rem; background: #f5f5f5;'>
      <div style='max-width: 700px; margin: 0 auto; background: white; border-radius: 10px; padding: 2rem;'>
        <h2 style='color: #1a1a2e; border-bottom: 2px solid #c9a84c; padding-bottom: 0.5rem;'>New Test Submission</h2>
        <table style='width: 100%; border-collapse: collapse; margin: 1rem 0;'>
          <tr><td style='padding: 0.5rem; color: #888; width: 140px;'><strong>Student</strong></td><td style='padding: 0.5rem;'>{$customer_name}</td></tr>
          <tr style='background:#f9f9f9;'><td style='padding: 0.5rem; color: #888;'><strong>Email</strong></td><td style='padding: 0.5rem;'>{$customer_email}</td></tr>
          <tr><td style='padding: 0.5rem; color: #888;'><strong>Order ID</strong></td><td style='padding: 0.5rem;'>#{$order_id}</td></tr>
          <tr style='background:#f9f9f9;'><td style='padding: 0.5rem; color: #888;'><strong>Test Type</strong></td><td style='padding: 0.5rem;'>{$test_type}</td></tr>
          <tr><td style='padding: 0.5rem; color: #888;'><strong>Submitted At</strong></td><td style='padding: 0.5rem;'>{$submitted_at}</td></tr>
        </table>
        <h3 style='color: #1a1a2e; margin-top: 1.5rem;'>Responses:</h3>
        <pre style='background: #f5f5f5; padding: 1rem; border-radius: 8px; white-space: pre-wrap; font-size: 0.88rem; line-height: 1.6;'>{$answers}</pre>
      </div>
    </body></html>";
}

function mentora_student_confirmation_email_html($customer_name) {
    return "
    <html>
    <body style='font-family: Arial, sans-serif; background: #f7f5f0; padding: 2rem; margin: 0;'>
      <div style='max-width: 540px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);'>

        <div style='background: #1a1a2e; padding: 1.75rem; text-align: center;'>
          <h1 style='color: #c9a84c; font-family: Georgia, serif; margin: 0; font-size: 1.5rem;'>Mentora Bridge</h1>
          <p style='color: rgba(255,255,255,0.6); margin: 0.4rem 0 0; font-size: 0.85rem;'>Career Guidance Portal</p>
        </div>

        <div style='padding: 2rem;'>
          <h2 style='color: #1a1a2e; margin-top: 0;'>✅ Test Submitted Successfully!</h2>
          <p style='color: #333;'>Dear <strong>{$customer_name}</strong>,</p>
          <p style='color: #555; line-height: 1.7;'>
            Your career assessment test has been successfully submitted. Our career counselors will carefully review your responses and prepare your personalized career guidance report.
          </p>

          <div style='background: #f7f5f0; border-radius: 10px; padding: 1.25rem; margin: 1.5rem 0;'>
            <p style='color: #555; margin: 0; font-size: 0.95rem;'>
              📅 <strong>Expected turnaround:</strong> 3–5 business days
            </p>
          </div>

          <p style='color: #555; line-height: 1.7;'>
            We will reach out to you at this email address once your report is ready.
          </p>

          <p style='color: #555; font-size: 0.9rem; margin-top: 1.5rem;'>
            Questions? Contact us at <a href='mailto:support@mentorabridge.com' style='color: #c9a84c;'>support@mentorabridge.com</a>
          </p>
        </div>

        <div style='background: #f7f5f0; padding: 1.25rem; text-align: center;'>
          <p style='color: #aaa; font-size: 0.78rem; margin: 0;'>© Mentora Bridge | mentorabridge.com</p>
        </div>
      </div>
    </body>
    </html>";
}
