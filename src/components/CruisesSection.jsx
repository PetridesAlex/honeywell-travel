import { Link } from 'react-router-dom'
import './CruisesSection.css'

function CruisesSection({ sharedBackground }) {
  const departurePorts = [
    {
      id: 'limassol',
      name: 'Limassol',
      country: 'Cyprus',
      flag: '🇨🇾',
      description: 'Mediterranean cruises from the heart of Cyprus',
      cruises: 12,
      image: '/images/cruises/limassol.webp'
    },
    {
      id: 'piraeus',
      name: 'Piraeus',
      country: 'Greece',
      flag: '🇬🇷',
      description: 'Greek Islands and Mediterranean adventures',
      cruises: 18,
      image: '/images/cruises/piraeus.webp'
    },
    {
      id: 'venice',
      name: 'Venice',
      country: 'Italy',
      flag: '🇮🇹',
      description: 'Adriatic Sea and Italian coast cruises',
      cruises: 15,
      image: '/images/cruises/venice.webp'
    },
    {
      id: 'barcelona',
      name: 'Barcelona',
      country: 'Spain',
      flag: '🇪🇸',
      description: 'Western Mediterranean and Balearic Islands',
      cruises: 20,
      image: '/images/cruises/barcelona.webp'
    },
    {
      id: 'civitavecchia',
      name: 'Civitavecchia',
      country: 'Italy',
      flag: '🇮🇹',
      description: 'Rome gateway to Mediterranean cruises',
      cruises: 14,
      image: '/images/cruises/civitavecchia.webp'
    },
    {
      id: 'miami',
      name: 'Miami',
      country: 'USA',
      flag: '🇺🇸',
      description: 'Caribbean and Bahamas cruises',
      cruises: 25,
      image: '/images/cruises/miami.webp'
    }
  ]

  return (
    <section className="cruises-section" style={{ background: 'transparent' }}>
      <div className="cruises-container">
        <div className="cruises-header">
          <h2 className="cruises-title">Book a Cruise from Top Departure Ports</h2>
          <p className="cruises-subtitle">
            Discover amazing cruise destinations departing from the world's most popular ports
          </p>
        </div>

        <div className="cruises-grid">
          {departurePorts.map((port, index) => (
            <Link
              key={port.id}
              to={`/cruises?port=${port.name}`}
              className="cruise-port-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="cruise-port-image">
                <div className="cruise-port-flag">{port.flag}</div>
                <div className="cruise-port-overlay"></div>
              </div>
              <div className="cruise-port-content">
                <div className="cruise-port-header">
                  <h3 className="cruise-port-name">{port.name}</h3>
                  <span className="cruise-port-country">{port.country}</span>
                </div>
                <p className="cruise-port-description">{port.description}</p>
                <div className="cruise-port-footer">
                  <span className="cruise-count">
                    <span className="cruise-count-number">{port.cruises}</span>
                    <span className="cruise-count-label">Cruises Available</span>
                  </span>
                  <span className="cruise-arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="cruises-cta">
          <Link to="/cruises" className="cruises-view-all-btn">
            <span>View All Cruises</span>
            <span className="btn-icon">🚢</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CruisesSection
