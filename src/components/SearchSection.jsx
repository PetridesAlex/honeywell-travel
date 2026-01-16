import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchSection.css'

function SearchSection() {
  const navigate = useNavigate()
  const [category, setCategory] = useState('Any')
  const [destination, setDestination] = useState('Any')
  const [travelers, setTravelers] = useState('2')

  const categories = [
    { value: 'Any', label: 'Any Category', icon: '🌍' },
    { value: 'Summer Packages', label: 'Summer Packages', icon: '☀️' },
    { value: 'Winter Packages', label: 'Winter Packages', icon: '❄️' },
    { value: 'Spring Packages', label: 'Spring Packages', icon: '🌸' },
    { value: 'City Breaks', label: 'City Breaks', icon: '🏙️' },
    { value: 'Cruises', label: 'Cruises', icon: '🚢' },
    { value: 'Exotic Packages', label: 'Exotic Packages', icon: '🌴' },
    { value: 'Christmas Packages', label: 'Christmas Packages', icon: '🎄' },
    { value: 'Easter Packages', label: 'Easter Packages', icon: '🐰' },
    { value: 'Autumn Packages', label: 'Autumn Packages', icon: '🍂' },
    { value: 'Green Monday', label: 'Green Monday', icon: '🌿' },
    { value: 'Group Travel', label: 'Group Travel', icon: '👥' },
    { value: 'Mary Special Trips', label: 'Mary Special Trips', icon: '✨' },
    { value: 'SPORTS EVENTS & CONCERTS', label: 'Sports & Events', icon: '🎫' }
  ]

  const destinations = [
    { value: 'Any', label: 'Any Destination', icon: '🌐' },
    { value: 'Greece', label: 'Greece', icon: '🇬🇷' },
    { value: 'Europe', label: 'Europe', icon: '🇪🇺' },
    { value: 'Asia', label: 'Asia', icon: '🌏' },
    { value: 'America', label: 'America', icon: '🇺🇸' },
    { value: 'Africa', label: 'Africa', icon: '🦁' },
    { value: 'Middle East', label: 'Middle East', icon: '🏜️' }
  ]

  const popularDestinations = [
    { value: 'Greece', label: 'Greece', icon: '🇬🇷' },
    { value: 'Thailand', label: 'Thailand', icon: '🇹🇭' },
    { value: 'Italy', label: 'Italy', icon: '🇮🇹' },
    { value: 'Spain', label: 'Spain', icon: '🇪🇸' },
    { value: 'Dubai', label: 'Dubai', icon: '🏙️' },
    { value: 'France', label: 'France', icon: '🇫🇷' },
    { value: 'Portugal', label: 'Portugal', icon: '🇵🇹' },
    { value: 'Turkey', label: 'Turkey', icon: '🇹🇷' },
    { value: 'Egypt', label: 'Egypt', icon: '🇪🇬' },
    { value: 'Maldives', label: 'Maldives', icon: '🏝️' },
    { value: 'Bali', label: 'Bali', icon: '🌴' },
    { value: 'Japan', label: 'Japan', icon: '🇯🇵' },
    { value: 'Australia', label: 'Australia', icon: '🇦🇺' },
    { value: 'Iceland', label: 'Iceland', icon: '🇮🇸' },
    { value: 'Switzerland', label: 'Switzerland', icon: '🇨🇭' },
    { value: 'Morocco', label: 'Morocco', icon: '🇲🇦' },
    { value: 'Croatia', label: 'Croatia', icon: '🇭🇷' },
    { value: 'Cyprus', label: 'Cyprus', icon: '🇨🇾' },
    { value: 'Malta', label: 'Malta', icon: '🇲🇹' },
    { value: 'Seychelles', label: 'Seychelles', icon: '🏖️' },
    { value: 'Mauritius', label: 'Mauritius', icon: '🇲🇺' },
    { value: 'Zanzibar', label: 'Zanzibar', icon: '🌊' },
    { value: 'Singapore', label: 'Singapore', icon: '🇸🇬' },
    { value: 'Vietnam', label: 'Vietnam', icon: '🇻🇳' },
    { value: 'Indonesia', label: 'Indonesia', icon: '🇮🇩' },
    { value: 'Sri Lanka', label: 'Sri Lanka', icon: '🇱🇰' },
    { value: 'India', label: 'India', icon: '🇮🇳' },
    { value: 'Jordan', label: 'Jordan', icon: '🇯🇴' },
    { value: 'Oman', label: 'Oman', icon: '🇴🇲' },
    { value: 'Qatar', label: 'Qatar', icon: '🇶🇦' }
  ]

  const popularCategories = [
    { value: 'Summer Packages', label: 'Summer', icon: '☀️' },
    { value: 'City Breaks', label: 'City Breaks', icon: '🏙️' },
    { value: 'Cruises', label: 'Cruises', icon: '🚢' },
    { value: 'Exotic Packages', label: 'Exotic', icon: '🌴' },
    { value: 'Winter Packages', label: 'Winter', icon: '❄️' },
    { value: 'Christmas Packages', label: 'Christmas', icon: '🎄' },
    { value: 'Autumn Packages', label: 'Autumn', icon: '🍂' },
    { value: 'Spring Packages', label: 'Spring', icon: '🌸' },
    { value: 'Green Monday', label: 'Green Monday', icon: '🌿' },
    { value: 'Easter Packages', label: 'Easter', icon: '🐰' },
    { value: 'SPORTS EVENTS & CONCERTS', label: 'Sports', icon: '⚽' },
    { value: 'SPORTS EVENTS & CONCERTS', label: 'Events', icon: '🎫' },
    { value: 'SPORTS EVENTS & CONCERTS', label: 'Concerts', icon: '🎵' }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (category !== 'Any') params.set('category', category)
    if (destination !== 'Any') params.set('destination', destination)
    navigate(`/packages?${params.toString()}`)
  }

  const handleQuickFilter = (type, value) => {
    if (type === 'destination') {
      setDestination(value)
    } else if (type === 'category') {
      setCategory(value)
    }
  }

  return (
    <section className="search-section">
      <div className="search-container">
        <div className="search-header">
          <h2 className="search-title">Find Your Perfect Trip</h2>
          <p className="search-subtitle">Search through our amazing travel packages and discover your next adventure</p>
        </div>

        {/* Quick Filters - Popular Destinations */}
        <div className="quick-filters">
          <div className="filter-group">
            <span className="filter-label">Popular Destinations:</span>
            <div className="filter-chips">
              {popularDestinations.map((dest) => (
                <button
                  key={dest.value}
                  type="button"
                  className={`filter-chip ${destination === dest.value ? 'active' : ''}`}
                  onClick={() => handleQuickFilter('destination', dest.value)}
                >
                  <span className="chip-icon">{dest.icon}</span>
                  <span>{dest.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">Popular Categories:</span>
            <div className="filter-chips">
              {popularCategories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  className={`filter-chip ${category === cat.value ? 'active' : ''}`}
                  onClick={() => handleQuickFilter('category', cat.value)}
                >
                  <span className="chip-icon">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Search Form */}
        <form className="search-form" onSubmit={handleSearch}>
          <div className="form-card">
            <div className="form-field-header">
              <div className="form-icon">🌍</div>
              <label htmlFor="destination" className="form-label">Where to?</label>
            </div>
            <div className="form-field-wrapper">
              <select 
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="form-select"
              >
                {destinations.map((dest) => (
                  <option key={dest.value} value={dest.value}>
                    {dest.icon} {dest.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-card">
            <div className="form-field-header">
              <div className="form-icon">📦</div>
              <label htmlFor="category" className="form-label">What type?</label>
            </div>
            <div className="form-field-wrapper">
              <select 
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-select"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.icon} {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-card">
            <div className="form-field-header">
              <div className="form-icon">👥</div>
              <label htmlFor="travelers" className="form-label">Travelers</label>
            </div>
            <div className="form-field-wrapper">
              <select 
                id="travelers"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="form-select"
              >
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4 Travelers</option>
                <option value="5+">5+ Travelers</option>
              </select>
            </div>
          </div>

          <button type="submit" className="search-button">
            <span className="button-icon">🔍</span>
            <span>Search Packages</span>
          </button>
        </form>

        {/* Search Tips */}
        <div className="search-tips">
          <p className="tips-title">💡 Search Tips</p>
          <div className="tips-list">
            <span>• Select multiple filters for better results</span>
            <span>• Try popular destinations for best deals</span>
            <span>• Check seasonal packages for special offers</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
