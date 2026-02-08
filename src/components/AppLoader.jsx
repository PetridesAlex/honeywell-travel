import './AppLoader.css'

function AppLoader({ exiting }) {
  return (
    <div className={`app-loader ${exiting ? 'app-loader--exit' : ''}`} aria-hidden="true">
      <div className="app-loader__inner">
        <div className="app-loader__logo-container">
          <div className="app-loader__logo-circle">
            <div className="app-loader__logo-ring"></div>
            <div className="app-loader__logo-ring app-loader__logo-ring--reverse"></div>
            <div className="app-loader__logo-inner">
              <img 
                src="https://www.honeywelltravel.com.cy/wp-content/uploads/2019/02/imageedit_1_2975338924.png" 
                alt="Honeywell Travel Logo" 
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
        <p className="app-loader__text">Loading your journey...</p>
      </div>
    </div>
  )
}

export default AppLoader
