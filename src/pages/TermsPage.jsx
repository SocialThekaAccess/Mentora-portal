import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { TESTS, TEST_LABELS, TERMS_DATA } from '../data/testsData'
import './TermsPage.css'

export default function TermsPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [checked, setChecked] = useState({ c1: false, c2: false, c3: false })

  // Session data teen jagah se try karo — jo bhi pehle mile
  const [session] = useState(() => {
    // 1. React Router state — sabse reliable (VerifyPage ne directly pass kiya)
    if (location.state?.session) {
      return location.state.session
    }
    // 2. sessionStorage — backup
    try {
      const data = sessionStorage.getItem('mentora_session')
      if (data) return JSON.parse(data)
    } catch {}
    // 3. Kuch nahi mila
    return null
  })

  useEffect(() => {
    if (!session) {
      navigate('/invalid', { replace: true })
    } else {
      try {
        sessionStorage.setItem('mentora_session', JSON.stringify(session))
      } catch {}
    }
  }, [session, navigate])

  if (!session) return null

  const test      = TESTS[session.testType]
  const terms     = TERMS_DATA[session.testType]
  const allChecked = Object.values(checked).every(Boolean)

  return (
    <div className="terms-page">
      <div className="terms-container">

        {/* ── Header ── */}
        <div className="terms-header">
          <div className="terms-logo">MB</div>
          <div>
            <h1>MentoraBridge</h1>
            <span className="terms-badge">Psychometric Assessment</span>
          </div>
        </div>

        {/* ── Welcome ── */}
        <div className="terms-welcome">
          <h2>Welcome, {session.customerName}!</h2>
          <p>
            You are about to start the <strong>{test?.title}</strong>.
            Please read all instructions carefully before beginning.
          </p>
        </div>

        {/* ── Age Group & Stage ── */}
        {terms && (
          <div className="terms-section">
            <div className="terms-stage-badge">
              <span className="stage-age">{terms.ageGroup}</span>
              <span className="stage-name">{terms.stage}</span>
            </div>
          </div>
        )}

        {/* ── Test Overview Cards ── */}
        <div className="terms-info-grid">
          <div className="info-card">
            <span className="info-icon">⏱️</span>
            <div>
              <strong>{terms?.duration || test?.duration + ' mins'}</strong>
              <span>Estimated Duration</span>
            </div>
          </div>
          <div className="info-card">
            <span className="info-icon">📝</span>
            <div>
              <strong>{terms?.totalQuestions || test?.totalQuestions} Questions</strong>
              <span>Total Questions</span>
            </div>
          </div>
          <div className="info-card">
            <span className="info-icon">🔒</span>
            <div>
              <strong>One-Time Access</strong>
              <span>Cannot be retaken</span>
            </div>
          </div>
        </div>

        {/* ── About This Assessment ── */}
        {terms?.about && (
          <div className="terms-block">
            <h3>About This Assessment</h3>
            <p>{terms.about}</p>
          </div>
        )}

        {/* ── Purpose ── */}
        {terms?.purpose?.length > 0 && (
          <div className="terms-block">
            <h3>Purpose of the Test</h3>
            <ul className="terms-list">
              {terms.purpose.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Test Structure / Modules ── */}
        {terms?.modules?.length > 0 && (
          <div className="terms-block">
            <h3>Test Structure</h3>
            <div className="terms-table">
              <div className="terms-table-header">
                <span>Module</span>
                <span>Focus Area</span>
              </div>
              {terms.modules.map((mod) => (
                <div key={mod.id} className="terms-table-row">
                  <span className="mod-id">{mod.id}</span>
                  <span>{mod.focus}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── How to Answer ── */}
        {terms?.howToAnswer?.length > 0 && (
          <div className="terms-block">
            <h3>How to Answer</h3>
            <ul className="terms-list">
              {terms.howToAnswer.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Important Guidelines ── */}
        {terms?.guidelines?.length > 0 && (
          <div className="terms-block terms-block--highlight">
            <h3>Important Guidelines</h3>
            <ul className="terms-list">
              {terms.guidelines.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Section-wise Instructions ── */}
        {terms?.sectionInstructions?.length > 0 && (
          <div className="terms-block">
            <h3>Section-wise Instructions</h3>
            <div className="section-instructions">
              {terms.sectionInstructions.map((si, i) => (
                <div key={i} className="section-instr-row">
                  <span className="section-instr-module">{si.modules}</span>
                  <span className="section-instr-detail">{si.detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── What You Will Receive ── */}
        {terms?.afterTest?.length > 0 && (
          <div className="terms-block">
            <h3>What You Will Receive</h3>
            <ul className="terms-list terms-list--check">
              {terms.afterTest.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {terms.counsellingLink && (
              <p className="counselling-link">
                Book your 1:1 Counselling Session:{' '}
                <a href={terms.counsellingLink} target="_blank" rel="noopener noreferrer">
                  {terms.counsellingLink}
                </a>
              </p>
            )}
          </div>
        )}

        {/* ── Who Should Take (Professionals only) ── */}
        {terms?.whoShouldTake?.length > 0 && (
          <div className="terms-block">
            <h3>Who Should Take This Test</h3>
            <ul className="terms-list">
              {terms.whoShouldTake.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ── For Parents ── */}
        {terms?.forParents && (
          <div className="terms-block terms-block--parents">
            <h3>For Parents</h3>
            <p>{terms.forParents}</p>
          </div>
        )}

        {/* ── Final Note ── */}
        {terms?.finalNote && (
          <div className="terms-final-note">
            <span>📌</span>
            <p><strong>Final Note:</strong> {terms.finalNote}</p>
          </div>
        )}

        {/* ── Consent Checkboxes ── */}
        <div className="terms-consent">
          <h3>Before you begin</h3>
          {[
            { key: 'c1', label: 'I have read all the instructions and understand how the test works.' },
            { key: 'c2', label: 'I understand this is a one-time test and cannot be retaken.' },
            { key: 'c3', label: 'I agree that my responses will be used for career guidance purposes.' },
          ].map(({ key, label }) => (
            <label key={key} className="consent-item">
              <input
                type="checkbox"
                checked={checked[key]}
                onChange={e => setChecked(prev => ({ ...prev, [key]: e.target.checked }))}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>

        {/* ── Start Button ── */}
        <button
          className={`start-btn ${allChecked ? 'active' : ''}`}
          disabled={!allChecked}
          onClick={() => navigate('/test', { state: { session } })}
        >
          Start Test →
        </button>

      </div>
    </div>
  )
}
