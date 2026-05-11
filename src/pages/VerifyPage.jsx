import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { verifyToken } from '../utils/verifyToken'
import './VerifyPage.css'

export default function VerifyPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const hasRun = useRef(false)
  const [statusText, setStatusText] = useState('Verifying your access...')

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    const token = searchParams.get('token')
    const type  = searchParams.get('type')

    if (!token || !type) {
      navigate('/invalid', { replace: true })
      return
    }

    async function verify() {
      try {
        setStatusText('Verifying your access...')
        const result = await verifyToken(token, type)

        if (result.valid) {
          const sessionData = {
            orderId:       result.orderId,
            customerName:  result.customerName,
            customerEmail: result.customerEmail,
            testType:      result.testType,
            token,
          }
          try {
            sessionStorage.setItem('mentora_session', JSON.stringify(sessionData))
            localStorage.setItem('mentora_session', JSON.stringify(sessionData))
          } catch {}

          navigate('/terms', { replace: true, state: { session: sessionData } })
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
        <h2>{statusText}</h2>
        <p>Please wait a moment</p>
      </div>
    </div>
  )
}
