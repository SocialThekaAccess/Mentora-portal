import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { verifyToken } from '../utils/verifyToken'
import './VerifyPage.css'

export default function VerifyPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const hasRun = useRef(false)

  useEffect(() => {
    // StrictMode double-invoke guard
    if (hasRun.current) return
    hasRun.current = true

    const token = searchParams.get('token')
    const type = searchParams.get('type')

    if (!token || !type) {
      navigate('/invalid', { replace: true })
      return
    }

    // ── KEY FIX ──────────────────────────────────────────────────────────────
    // If a valid session for this exact token already exists in sessionStorage,
    // skip the API call entirely and go straight to /terms.
    // This handles the case where VerifyPage remounts (StrictMode, Vercel
    // redirect, browser back) after the session was already written.
    try {
      const existing = JSON.parse(sessionStorage.getItem('mentora_session') || 'null')
      if (existing && existing.token === token && existing.testType === type) {
        navigate('/terms', { replace: true })
        return
      }
    } catch {
      // corrupt data — fall through to fresh verify
      sessionStorage.removeItem('mentora_session')
    }
    // ─────────────────────────────────────────────────────────────────────────

    async function verify() {
      try {
        const result = await verifyToken(token, type)

        if (result.valid) {
          sessionStorage.setItem('mentora_session', JSON.stringify({
            orderId: result.orderId,
            customerName: result.customerName,
            customerEmail: result.customerEmail,
            testType: result.testType,
            token,
          }))
          navigate('/terms', { replace: true })
        } else {
          navigate(`/${result.reason}`, { replace: true })
        }
      } catch (err) {
        console.error('Verify error:', err)
        navigate('/invalid', { replace: true })
      }
    }

    verify()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="verify-screen">
      <div className="verify-card">
        <div className="verify-logo">
          <span>MB</span>
        </div>
        <div className="verify-spinner" />
        <h2>Verifying your access...</h2>
        <p>Please wait a moment</p>
      </div>
    </div>
  )
}
