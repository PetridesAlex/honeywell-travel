import { useMemo, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getPackagesByFilter } from '../data/packages'
import PackageCard from './PackageCard'
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

  // Packages for the selected category (and destination)
  const packagesForSelection = useMemo(() => {
    if (category === 'Any') return []
    return getPackagesByFilter(category, destination)
  }, [category, destination])

  const categoryLabel = categories.find(c => c.value === category)?.label ?? category

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

        {/* Show packages for the selected category */}
        <div className="packages-by-category-section">
          {category === 'Any' ? (
            <>
              <h3 className="packages-by-category-title">See packages by category</h3>
              <p className="packages-by-category-subtitle">Select a category above to view available packages for Summer, Winter, City Breaks, and more.</p>
            </>
          ) : (
            <>
              <h3 className="packages-by-category-title">
                {categories.find(c => c.value === category)?.icon} {categoryLabel}
              </h3>
              <p className="packages-by-category-subtitle">
                {packagesForSelection.length === 0
                  ? `No packages found for ${categoryLabel}${destination !== 'Any' ? ` in ${destination}` : ''}. Try another category or destination.`
                  : `Showing ${packagesForSelection.length} package${packagesForSelection.length === 1 ? '' : 's'} for ${categoryLabel}${destination !== 'Any' ? ` in ${destination}` : ''}.`
                }
              </p>
              {packagesForSelection.length > 0 && (
                <>
                  <div className="packages-by-category-cards">
                    {packagesForSelection.slice(0, 6).map((pkg) => (
                      <PackageCard key={pkg.id} package={pkg} />
                    ))}
                  </div>
                  {packagesForSelection.length > 6 && (
                    <div className="packages-by-category-view-all">
                      <Link
                        to={`/tour-category/${getCategorySlug(category)}/`}
                        className="packages-by-category-view-all-link"
                        onClick={() => {
                          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
                          if (document.documentElement) document.documentElement.scrollTop = 0
                          if (document.body) document.body.scrollTop = 0
                        }}
                      >
                        View all {packagesForSelection.length} packages →
                      </Link>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>

      </div>
    </section>
  )
}

export default SearchSection
