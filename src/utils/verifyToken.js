// =============================================
// WooCommerce REST API Configuration
// =============================================
const WC_URL    = 'https://mentorabridge.com'
const WC_KEY    = 'ck_832fc97f066f7be8bc313f180baf24b0458990fb'
const WC_SECRET = 'cs_eb927979f0070a153d248a9646c5387ea278b7d1'

const DEV_MODE = false

// =============================================
// RETRY HELPER
// Agar fetch fail ho toh automatically retry karo
// =============================================
async function fetchWithRetry(url, options = {}, retries = 3, delayMs = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, options)
      return res // success — return karo chahe status kuch bhi ho
    } catch (err) {
      console.warn(`Fetch attempt ${attempt} failed:`, err.message)
      if (attempt === retries) throw err // last attempt — throw karo
      await new Promise(r => setTimeout(r, delayMs * attempt)) // 1s, 2s, 3s
    }
  }
}

export async function verifyToken(token, type) {
  if (!token || !type) {
    return { valid: false, reason: 'invalid' }
  }

  // DEV MODE
  if (DEV_MODE && token === 'dev') {
    const usedKey = `mentora_dev_used_${type}`
    if (localStorage.getItem(usedKey) === 'yes') {
      return { valid: false, reason: 'used' }
    }
    const createdKey = `mentora_dev_created_${type}`
    const createdAt  = localStorage.getItem(createdKey)
    if (createdAt) {
      const expiry = new Date(parseInt(createdAt) + 7 * 24 * 60 * 60 * 1000)
      if (new Date() > expiry) return { valid: false, reason: 'expired' }
    } else {
      localStorage.setItem(createdKey, Date.now().toString())
    }
    return {
      valid: true,
      orderId:       'DEV-001',
      customerName:  'Test User',
      customerEmail: 'test@mentorabridge.com',
      testType:      type,
    }
  }

  try {
    // Retry ke saath fetch karo — network hiccup pe automatically retry hoga
    const response = await fetchWithRetry(
      `${WC_URL}/wp-json/wc/v3/orders/${token}?consumer_key=${WC_KEY}&consumer_secret=${WC_SECRET}`,
      { method: 'GET' },
      3,    // 3 attempts
      800   // 800ms, 1600ms, 2400ms delay
    )

    if (!response.ok) {
      console.error('WooCommerce API error:', response.status)
      return { valid: false, reason: 'invalid' }
    }

    const order = await response.json()

    // 1. Order status check — processing + completed dono valid
    const validStatuses = ['completed', 'processing']
    if (!validStatuses.includes(order.status)) {
      console.warn('Order status invalid:', order.status)
      return { valid: false, reason: 'invalid' }
    }

    // 2. Test type match check
    const orderType = order.meta_data?.find(m => m.key === '_mentora_test_type')?.value
    if (orderType && orderType !== type) {
      return { valid: false, reason: 'invalid' }
    }

    // 3. Expiry check — 7 days
    const baseDate   = new Date(order.date_completed || order.date_modified || order.date_created)
    const expiryDate = new Date(baseDate.getTime() + 7 * 24 * 60 * 60 * 1000)
    if (new Date() > expiryDate) {
      return { valid: false, reason: 'expired' }
    }

    // 4. Already used check
    const alreadyUsed = order.meta_data?.find(m => m.key === '_mentora_test_used')?.value
    if (alreadyUsed === 'yes') {
      return { valid: false, reason: 'used' }
    }

    return {
      valid:         true,
      orderId:       order.id,
      customerName:  `${order.billing.first_name} ${order.billing.last_name}`,
      customerEmail: order.billing.email,
      testType:      type,
    }
  } catch (err) {
    console.error('Token verify error after retries:', err)
    return { valid: false, reason: 'invalid' }
  }
}

export async function markTokenUsed(orderId) {
  if (DEV_MODE && orderId === 'DEV-001') {
    try {
      const session = JSON.parse(sessionStorage.getItem('mentora_session') || '{}')
      if (session.testType) {
        localStorage.setItem(`mentora_dev_used_${session.testType}`, 'yes')
      }
    } catch {}
    return
  }

  try {
    await fetchWithRetry(
      `${WC_URL}/wp-json/wc/v3/orders/${orderId}?consumer_key=${WC_KEY}&consumer_secret=${WC_SECRET}`,
      {
        method:  'PUT',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          meta_data: [{ key: '_mentora_test_used', value: 'yes' }],
        }),
      },
      3,
      800
    )
  } catch (err) {
    console.error('Mark used error:', err)
  }
}
