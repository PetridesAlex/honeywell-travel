import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './SearchSection.css'

// Helper function to convert category name to URL-friendly slug
const categoryToSlug = (category) => {
  if (category === 'Any') return null
  return category
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9-]/g, '')
}

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

  const handleSearch = (e) => {
    e.preventDefault()
    const categorySlug = categoryToSlug(category)

    if (categorySlug) {
      // Navigate directly to the selected category page
      navigate(`/tour-category/${categorySlug}/`)
    } else {
      // No category selected: show all packages (with optional destination filter)
      const params = new URLSearchParams()
      if (destination !== 'Any') params.set('destination', destination)
      const queryString = params.toString()
      navigate(queryString ? `/packages?${queryString}` : '/packages')
    }
  }

  // Helper to convert category to slug for navigation
  const getCategorySlug = (cat) => {
    if (cat === 'Any') return null
    return cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and').replace(/[^a-z0-9-]/g, '')
  }

  return (
    <section className="search-section">
      <div className="search-container">
        <div className="search-header">
          <h2 className="search-title">Find Your Perfect Trip</h2>
          <p className="search-subtitle">Search through our amazing travel packages and discover your next adventure</p>
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
              <div className="form-icon">✈️</div>
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

        {/* Show selected category with navigation to other categories */}
        {category !== 'Any' && (
          <div className="selected-category-section">
            <div className="selected-category-info">
              <h3 className="selected-category-title">
                {categories.find(c => c.value === category)?.icon} {category}
              </h3>
              <p className="selected-category-description">
                Showing packages for {category}. Browse other categories below.
              </p>
            </div>
            <div className="other-categories-quick-nav">
              <h4 className="quick-nav-title">Other Categories</h4>
              <div className="quick-nav-categories">
                {categories.filter(c => c.value !== 'Any' && c.value !== category).slice(0, 6).map((cat) => {
                  const slug = getCategorySlug(cat.value)
                  if (!slug) return null
                  return (
                    <Link
                      key={cat.value}
                      to={`/tour-category/${slug}/`}
                      className="quick-nav-category-link"
                      onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
                        if (document.documentElement) document.documentElement.scrollTop = 0
                        if (document.body) document.body.scrollTop = 0
                        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 0)
                      }}
                    >
                      {cat.icon} {cat.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default SearchSection
