import './AppLoader.css'

function AppLoader({ exiting }) {
  return (
    <div className={`app-loader ${exiting ? 'app-loader--exit' : ''}`} aria-hidden="true">
      <div className="app-loader__inner">
        <div className="app-loader__logo">Honeywell Travel</div>
        <div className="app-loader__spinner" aria-label="Loading">
          <span className="app-loader__spinner-dot" />
          <span className="app-loader__spinner-dot" />
          <span className="app-loader__spinner-dot" />
        </div>
        <p className="app-loader__text">Loading your journey...</p>
      </div>
    </div>
  )
}

export default AppLoader
