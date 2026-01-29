import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPackagesByFilter, travelPackages } from '../data/packages'
import PackageCard from '../components/PackageCard'
import './Cruises.css'

function Cruises() {
  const [filteredCruises, setFilteredCruises] = useState([])
  const [selectedPort, setSelectedPort] = useState('Any')
  const [selectedDuration, setSelectedDuration] = useState('Any')

  const departurePorts = [
    { value: 'Any', label: 'All Ports', icon: '🌍' },
    { value: 'Limassol', label: 'Limassol, Cyprus', icon: '🇨🇾' },
    { value: 'Piraeus', label: 'Piraeus, Greece', icon: '🇬🇷' },
    { value: 'Venice', label: 'Venice, Italy', icon: '🇮🇹' },
    { value: 'Barcelona', label: 'Barcelona, Spain', icon: '🇪🇸' },
    { value: 'Civitavecchia', label: 'Civitavecchia, Italy', icon: '🇮🇹' },
    { value: 'Miami', label: 'Miami, USA', icon: '🇺🇸' }
  ]

  const durations = [
    { value: 'Any', label: 'Any Duration' },
    { value: '3-5', label: '3-5 Days' },
    { value: '6-8', label: '6-8 Days' },
    { value: '9-12', label: '9-12 Days' },
    { value: '13+', label: '13+ Days' }
  ]

  useEffect(() => {
    // Filter for cruises only
    const cruises = travelPackages.filter(pkg => 
      pkg.category === 'Cruises' || pkg.category === 'cruises'
    )
    
    // Apply additional filters if needed
    let filtered = cruises
    // You can add more filtering logic here based on selectedPort and selectedDuration
    
    setFilteredCruises(filtered)
  }, [selectedPort, selectedDuration])

  return (
    <div className="cruises-page">
      {/* Hero Section */}
      <div className="cruises-hero">
        <div className="cruises-hero-overlay"></div>
        <div className="cruises-hero-content">
          <div className="cruises-hero-icon">🚢</div>
          <h1>Luxury Cruises</h1>
          <p>Set sail on an unforgettable journey across the world's most beautiful waters</p>
        </div>
        <div className="cruises-hero-waves">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.1)"/>
          </svg>
        </div>
      </div>

      <div className="cruises-container">
        {/* Why Choose Cruises Section */}
        <section className="cruises-benefits">
          <h2 className="section-title">Why Choose a Cruise?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🏝️</div>
              <h3>Multiple Destinations</h3>
              <p>Visit several stunning destinations in one trip without the hassle of packing and unpacking</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🍽️</div>
              <h3>All-Inclusive Dining</h3>
              <p>Enjoy world-class cuisine with unlimited dining options included in your cruise package</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎭</div>
              <h3>Entertainment & Activities</h3>
              <p>From Broadway shows to spa treatments, enjoy endless entertainment and relaxation</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌊</div>
              <h3>Ocean Views</h3>
              <p>Wake up to breathtaking ocean views and stunning sunsets from your private balcony</p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="cruises-filters-section">
          <h2 className="section-title">Find Your Perfect Cruise</h2>
          <div className="cruises-filters">
            <div className="filter-group">
              <label htmlFor="port-filter">
                <span className="filter-icon">⚓</span>
                Departure Port
              </label>
              <select 
                id="port-filter"
                value={selectedPort}
                onChange={(e) => setSelectedPort(e.target.value)}
                className="filter-select"
              >
                {departurePorts.map((port) => (
                  <option key={port.value} value={port.value}>
                    {port.icon} {port.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="duration-filter">
                <span className="filter-icon">⏱️</span>
                Duration
              </label>
              <select 
                id="duration-filter"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="filter-select"
              >
                {durations.map((duration) => (
                  <option key={duration.value} value={duration.value}>
                    {duration.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Cruise Packages Grid */}
        <section className="cruises-results">
          <div className="results-header">
            <h2 className="results-title">
              {filteredCruises.length} {filteredCruises.length === 1 ? 'Cruise' : 'Cruises'} Available
            </h2>
            {(selectedPort !== 'Any' || selectedDuration !== 'Any') && (
              <div className="active-filters">
                {selectedPort !== 'Any' && (
                  <span className="active-filter-tag">
                    {departurePorts.find(p => p.value === selectedPort)?.label}
                    <button 
                      onClick={() => setSelectedPort('Any')}
                      className="remove-filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedDuration !== 'Any' && (
                  <span className="active-filter-tag">
                    {durations.find(d => d.value === selectedDuration)?.label}
                    <button 
                      onClick={() => setSelectedDuration('Any')}
                      className="remove-filter"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {filteredCruises.length > 0 ? (
            <div className="cruises-grid">
              {filteredCruises.map((cruise) => (
                <PackageCard key={cruise.id} package={cruise} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🚢</div>
              <h3>No cruises found</h3>
              <p>No cruises match your current filters. Try adjusting your search criteria.</p>
              <button 
                className="clear-filters-btn"
                onClick={() => {
                  setSelectedPort('Any')
                  setSelectedDuration('Any')
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </section>

        {/* Popular Destinations */}
        <section className="popular-destinations">
          <h2 className="section-title">Popular Cruise Destinations</h2>
          <div className="destinations-grid">
            <div className="destination-card">
              <div className="destination-icon">🏝️</div>
              <h3>Mediterranean</h3>
              <p>Explore the stunning coasts of Greece, Italy, Spain, and more</p>
            </div>
            <div className="destination-card">
              <div className="destination-icon">🌴</div>
              <h3>Caribbean</h3>
              <p>Discover tropical paradise with crystal-clear waters and white sand beaches</p>
            </div>
            <div className="destination-card">
              <div className="destination-icon">🏔️</div>
              <h3>Alaska</h3>
              <p>Witness breathtaking glaciers and wildlife in America's last frontier</p>
            </div>
            <div className="destination-card">
              <div className="destination-icon">🌊</div>
              <h3>Northern Europe</h3>
              <p>Experience the beauty of Scandinavian fjords and Baltic capitals</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Cruises
