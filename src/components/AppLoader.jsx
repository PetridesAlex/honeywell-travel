import { useEffect, useState } from 'react'
import './AppLoader.css'

const LOAD_DURATION_MS = 1800
const CIRCLE_R = 92
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

  const progressPct = Math.round(progress * 100)
  const stageLabel = progressPct < 30
    ? 'Preparing your escape'
    : progressPct < 65
      ? 'Mapping the best routes'
      : progressPct < 95
        ? 'Finishing your experience'
        : 'Welcome aboard'

  const strokeDashoffset = CIRCLE_CIRCUMFERENCE * (1 - progress)

  return (
    <div className={`app-loader ${exiting ? 'app-loader--exit' : ''}`} role="status" aria-live="polite">
      {/* Background layers */}
      <div className="app-loader__bg" aria-hidden="true" />
      <div className="app-loader__aurora" aria-hidden="true" />
      <div className="app-loader__grain" aria-hidden="true" />

      {/* Curtains for split reveal (same visual as bg) */}
      <div className="app-loader__curtain app-loader__curtain--left" aria-hidden="true" />
      <div className="app-loader__curtain app-loader__curtain--right" aria-hidden="true" />

      {/* Content on top so logo stays visible when curtains part */}
      <div className="app-loader__inner">
        <div className="app-loader__orbital" aria-hidden="true">
          <span className="app-loader__orbit app-loader__orbit--one" />
          <span className="app-loader__orbit app-loader__orbit--two" />
          <span className="app-loader__orbit-dot" />
        </div>

        <div className="app-loader__logo-container">
          <div className="app-loader__logo-circle" aria-hidden="true">
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
                strokeWidth="4"
              />
              <circle
                className="app-loader__progress-ring-fill"
                cx={CIRCLE_R + 8}
                cy={CIRCLE_R + 8}
                r={CIRCLE_R}
                fill="none"
                strokeWidth="4"
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
            <div className="app-loader__percent">{progressPct}%</div>
          </div>
        </div>

        <div className="app-loader__wordmark" aria-hidden="true">
          <span className="app-loader__wordmark-main">HONEYWELL</span>
          <span className="app-loader__wordmark-sub">TRAVEL</span>
        </div>

        <div className="app-loader__spinner" aria-hidden="true">
          <span className="app-loader__spinner-dot" />
          <span className="app-loader__spinner-dot" />
          <span className="app-loader__spinner-dot" />
        </div>

        <div className="app-loader__progress-bar" aria-hidden="true">
          <span className="app-loader__progress-bar-fill" style={{ width: `${progressPct}%` }} />
        </div>

        <p className="app-loader__text">
          <span className="app-loader__text-inner">{stageLabel}</span>
        </p>
      </div>
    </div>
  )
}

export default AppLoader
