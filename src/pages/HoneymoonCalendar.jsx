import RevealOnScroll from '../components/RevealOnScroll'
import './HoneymoonCalendar.css'

const MONTHS = [
  { 
    name: 'January',
    destinations: ['Maldives', 'Seychelles', 'Thailand', 'Dubai'],
    icon: '❄️',
    color: '#4A90E2'
  },
  { 
    name: 'February',
    destinations: ['Maldives', 'Seychelles', 'Mauritius', 'Lapland', 'Mexico'],
    icon: '💝',
    color: '#E91E63'
  },
  { 
    name: 'March',
    destinations: ['Japan', 'Sri Lanka', 'Canary Islands', 'Cape Town'],
    icon: '🌸',
    color: '#9C27B0'
  },
  { 
    name: 'April',
    destinations: ['Japan', 'Greece', 'Italy', 'Bali'],
    icon: '🌷',
    color: '#FF6B6B'
  },
  { 
    name: 'May',
    destinations: ['Greek Islands', 'Italy', 'France', 'Hawaii'],
    icon: '🌺',
    color: '#4ECDC4'
  },
  { 
    name: 'June',
    destinations: ['Greek Islands', 'Cyprus', 'Croatia', 'Bali', 'French Polynesia'],
    icon: '☀️',
    color: '#FFD93D'
  },
  { 
    name: 'July',
    destinations: ['Italy', 'Greece', 'Spain', 'Canada'],
    icon: '🏖️',
    color: '#FF6B35'
  },
  { 
    name: 'August',
    destinations: ['Greek Islands', 'Cyprus', 'Croatia', 'Spain', 'Bali', 'Kenya / Tanzania'],
    icon: '🌊',
    color: '#00D2FF'
  },
  { 
    name: 'September',
    destinations: ['Santorini', 'Italy', 'Portugal', 'Bali', 'Maldives'],
    icon: '🍂',
    color: '#FF8C42'
  },
  { 
    name: 'October',
    destinations: ['Japan (autumn)', 'Maldives', 'Seychelles', 'Morocco', 'New England'],
    icon: '🍁',
    color: '#FF6B6B'
  },
  { 
    name: 'November',
    destinations: ['Maldives', 'Seychelles', 'Mauritius', 'Thailand', 'Vietnam', 'Dubai'],
    icon: '🌙',
    color: '#6C5CE7'
  },
  { 
    name: 'December',
    destinations: ['Maldives', 'Seychelles', 'Mauritius', 'Caribbean', 'Lapland', 'Mexico'],
    icon: '🎄',
    color: '#00B894'
  }
]

const DESTINATION_ICONS = {
  'Maldives': '🏝️',
  'Seychelles': '🌴',
  'Thailand': '🇹🇭',
  'Dubai': '🏙️',
  'Mauritius': '🌺',
  'Lapland': '❄️',
  'Mexico': '🌮',
  'Japan': '🗾',
  'Japan (autumn)': '🍂',
  'Sri Lanka': '🌊',
  'Canary Islands': '🏖️',
  'Cape Town': '🏔️',
  'Greece': '🏛️',
  'Greek Islands': '🏝️',
  'Italy': '🍝',
  'Bali': '🌋',
  'France': '🗼',
  'Hawaii': '🌺',
  'Cyprus': '🏖️',
  'Croatia': '🏰',
  'French Polynesia': '🌺',
  'Spain': '🍷',
  'Canada': '🍁',
  'Kenya / Tanzania': '🦁',
  'Santorini': '🌅',
  'Portugal': '🏰',
  'Morocco': '🏜️',
  'New England': '🍂',
  'Vietnam': '🛶',
  'Caribbean': '🏝️'
}

function HoneymoonCalendar() {
  return (
    <div className="honeymoon-calendar-page">
      <section className="honeymoon-hero">
        <div className="honeymoon-hero-content">
          <div className="hero-icon">💑</div>
          <h1>Honeymoon Calendar</h1>
          <p className="hero-subtitle">Where to Go, Month by Month</p>
          <p className="hero-description">
            Choose your wedding month and discover the best honeymoon destinations around the world.
            This calendar helps you see which islands, cities and regions shine at different times of the year,
            so you can plan the perfect first trip together.
          </p>
        </div>
      </section>

      <RevealOnScroll direction="up">
      <section className="honeymoon-months-section">
        <div className="honeymoon-months-grid">
          {MONTHS.map((month, index) => (
            <article 
              key={month.name} 
              className="honeymoon-month-card"
              style={{ '--month-color': month.color }}
            >
              <div className="card-gradient"></div>
              <header className="month-header">
                <div className="month-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="month-info">
                  <div className="month-icon">{month.icon}</div>
                  <h2>{month.name}</h2>
                </div>
              </header>
              <ul className="destinations-list">
                {month.destinations.map((dest) => (
                  <li key={dest} className="destination-item">
                    <span className="destination-icon">{DESTINATION_ICONS[dest] || '✈️'}</span>
                    <span className="destination-name">{dest}</span>
                  </li>
                ))}
              </ul>
              <div className="card-footer">
                <span className="destination-count">{month.destinations.length} destinations</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      </RevealOnScroll>
    </div>
  )
}

export default HoneymoonCalendar

