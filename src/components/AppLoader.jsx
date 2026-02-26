import { useEffect, useState } from 'react'
import './AppLoader.css'

const LOAD_DURATION_MS = 1200
const CIRCLE_R = 88
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_R

function AppLoader({ exiting }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (exiting) return
    const start = performance.now()
    const frame = (now) => {
      const elapsed = now - start
      const p = Math.min(elapsed / LOAD_DURATION_MS, 1)
      setProgress(p)
      if (p < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [exiting])

  const strokeDashoffset = CIRCLE_CIRCUMFERENCE * (1 - progress)

  return (
    <div className={`app-loader ${exiting ? 'app-loader--exit' : ''}`} aria-hidden="true">
      {/* Background layer */}
      <div className="app-loader__bg" aria-hidden="true" />

      {/* Curtains for split reveal (same visual as bg) */}
      <div className="app-loader__curtain app-loader__curtain--left" aria-hidden="true" />
      <div className="app-loader__curtain app-loader__curtain--right" aria-hidden="true" />

      {/* Content on top so logo stays visible when curtains part */}
      <div className="app-loader__inner">
        <div className="app-loader__logo-container">
          <div className="app-loader__logo-circle">
            <svg
              className="app-loader__progress-ring"
              viewBox={`0 0 ${(CIRCLE_R + 8) * 2} ${(CIRCLE_R + 8) * 2}`}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="app-loader-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E31E24" />
                  <stop offset="100%" stopColor="#C41230" />
                </linearGradient>
              </defs>
              <circle
                className="app-loader__progress-ring-bg"
                cx={CIRCLE_R + 8}
                cy={CIRCLE_R + 8}
                r={CIRCLE_R}
                fill="none"
                strokeWidth="3"
              />
              <circle
                className="app-loader__progress-ring-fill"
                cx={CIRCLE_R + 8}
                cy={CIRCLE_R + 8}
                r={CIRCLE_R}
                fill="none"
                strokeWidth="3"
                strokeDasharray={CIRCLE_CIRCUMFERENCE}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ stroke: 'url(#app-loader-ring-gradient)' }}
              />
            </svg>
            <div className="app-loader__logo-inner">
              <img
                src="/images/icons/honeywell-travel-logo.webp"
                alt="Honeywell Travel"
                className="app-loader__logo-image"
              />
            </div>
          </div>
        </div>
        <div className="app-loader__spinner" aria-label="Loading">
          <span className="app-loader__spinner-dot" />
          <span className="app-loader__spinner-dot" />
          <span className="app-loader__spinner-dot" />
        </div>
        <p className="app-loader__text">
          <span className="app-loader__text-inner">Loading your journey...</span>
        </p>
      </div>
    </div>
  )
}

export default AppLoader
