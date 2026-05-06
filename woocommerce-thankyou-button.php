<?php
/**
 * WooCommerce Thank You Page — "Start Test" Button
 * functions.php mein add karo ya plugin ke end mein
 */

add_action('woocommerce_thankyou', 'mentora_top_button_redirect', 5);

function mentora_top_button_redirect($order_id) {
    if (!$order_id) return;

    $order = wc_get_order($order_id);
    if (!$order) return;

    $product_links = [
        3999 => 'https://mentorabridgepsychometric.com/verify?token={order_id}&type=class7-8',
        3998 => 'https://mentorabridgepsychometric.com/verify?token={order_id}&type=class9-10',
        4310 => 'https://mentorabridgepsychometric.com/verify?token={order_id}&type=class9-10',
        4314 => 'https://mentorabridgepsychometric.com/verify?token={order_id}&type=class11-12-science',
        4315 => 'https://mentorabridgepsychometric.com/verify?token={order_id}&type=class11-12-commerce',
        4316 => 'https://mentorabridgepsychometric.com/verify?token={order_id}&type=graduate',
        4317 => 'https://mentorabridgepsychometric.com/verify?token={order_id}&type=professional',
    ];

    foreach ($order->get_items() as $item) {
        $product_id = $item->get_product_id();

        if (isset($product_links[$product_id])) {
            $redirect_url = str_replace('{order_id}', $order_id, $product_links[$product_id]);

            // Sirf button dikhao — NO auto redirect
            // Auto redirect 200ms mein karta tha jab WooCommerce ne
            // abhi order processing mark nahi kiya hota tha → invalid aata tha
            echo '
            <div style="text-align:center; margin:25px 0;">
                <a href="' . esc_url($redirect_url) . '"
                   style="background:#28a745; color:#ffffff; padding:16px 34px;
                          text-decoration:none; border-radius:8px; font-size:18px;
                          font-weight:600; display:inline-block;">
                    🚀 Start Your Test
                </a>
                <p style="color:#666; font-size:13px; margin-top:10px;">
                    Click the button above to begin your career assessment.
                </p>
            </div>';

            return;
        }
    }
}
