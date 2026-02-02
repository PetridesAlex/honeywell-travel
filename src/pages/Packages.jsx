import { useState, useEffect } from 'react'
import { useSearchParams, useParams } from 'react-router-dom'
import { getPackagesByFilter, travelPackages } from '../data/packages'
import PackageCard from '../components/PackageCard'
import './Packages.css'

// Helper function to convert slug back to category name
const slugToCategory = (slug) => {
  const slugCategoryMap = {
    'destinations': 'Destinations',
    'summer-packages': 'Summer Packages',
    'autumn-packages': 'Autumn Packages',
    'winter-packages': 'Winter Packages',
    'spring-packages': 'Spring Packages',
    'christmas-packages': 'Christmas Packages',
    'easter-packages': 'Easter Packages',
    'green-monday-packages': 'Green Monday Packages',
    'cruises': 'Cruises',
    'city-breaks': 'City Breaks',
    'exotic-packages': 'Exotic Packages',
    'mary-specials-trips': 'Mary Specials Trips',
    'build-your-trip': 'Build Your Trip',
    'green-monday': 'Green Monday',
    'group-travel': 'Group Travel',
    'mary-special-trips': 'Mary Special Trips',
    'sports-events-concerts': 'Sports Events & Concerts',
    'sports-events-and-concerts': 'Sports Events & Concerts',
    'ski-packages': 'Ski Packages',
    'exotic-destinations': 'Exotic Destinations'
  }
  return slugCategoryMap[slug] || null
}

function Packages() {
  const { slug } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [filteredPackages, setFilteredPackages] = useState(travelPackages)
  
  // Determine category from slug or query param
  const getInitialCategory = () => {
    if (slug) {
      const categoryFromSlug = slugToCategory(slug.replace(/\/$/, '')) // Remove trailing slash
      if (categoryFromSlug) return categoryFromSlug
    }
    return searchParams.get('category') || 'Any'
  }
  
  const [category, setCategory] = useState(getInitialCategory())
  const [destination, setDestination] = useState(searchParams.get('destination') || 'Any')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [departureMonth, setDepartureMonth] = useState('Any')
  const [travelType, setTravelType] = useState('Any')
  const [showFilters, setShowFilters] = useState(category === 'Any')

  const categories = [
    'Any',
    'Destinations',
    'Summer Packages',
    'Autumn Packages',
    'Winter Packages',
    'Spring Packages',
    'Christmas Packages',
    'City Breaks',
    'Cruises',
    'Easter Packages',
    'Exotic Packages',
    'Green Monday',
    'Group Travel',
    'Mary Special Trips',
    'Sports Events & Concerts',
    'Ski Packages'
  ]

  const destinations = [
    'Any',
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Greece',
    'Middle East'
  ]

  const months = [
    'Any',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const travelTypes = [
    'Any',
    'Group Travel',
    'Individual Travel'
  ]

  // Get price range from packages
  const getPriceRange = () => {
    const prices = travelPackages
      .map(pkg => {
        if (pkg.details && pkg.details.hotels && pkg.details.hotels.length > 0) {
          return pkg.details.hotels[0].packagePrice || pkg.price
        }
        return pkg.price
      })
      .filter(price => price != null && price > 0)
    if (prices.length === 0) return { min: 0, max: 10000 }
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    }
  }

  const priceRange = getPriceRange()

  // Update category when slug changes
  useEffect(() => {
    if (slug) {
      const categoryFromSlug = slugToCategory(slug.replace(/\/$/, ''))
      if (categoryFromSlug) {
        setCategory(categoryFromSlug)
        setShowFilters(false) // Hide filters when category is selected
      }
    }
  }, [slug])

  // Update showFilters when category changes
  useEffect(() => {
    setShowFilters(category === 'Any')
  }, [category])

  useEffect(() => {
    let filtered = getPackagesByFilter(category, destination)
    
    // Apply price filter
    if (minPrice || maxPrice) {
      filtered = filtered.filter(pkg => {
        const pkgPrice = pkg.details?.hotels?.[0]?.packagePrice || pkg.price || 0
        const min = minPrice ? parseFloat(minPrice) : 0
        const max = maxPrice ? parseFloat(maxPrice) : Infinity
        return pkgPrice >= min && pkgPrice <= max
      })
    }
    
    // Apply departure month filter
    if (departureMonth !== 'Any') {
      filtered = filtered.filter(pkg => {
        const month = pkg.details?.monthAvailability
        return month && month.toLowerCase() === departureMonth.toLowerCase()
      })
    }
    
    // Apply travel type filter
    if (travelType !== 'Any') {
      filtered = filtered.filter(pkg => {
        if (travelType === 'Group Travel') {
          return pkg.category === 'Group Travel'
        } else if (travelType === 'Individual Travel') {
          return pkg.category !== 'Group Travel'
        }
        return true
      })
    }
    
    setFilteredPackages(filtered)
  }, [category, destination, minPrice, maxPrice, departureMonth, travelType])

  const applyFilters = (nextCategory, nextDestination) => {
    const filtered = getPackagesByFilter(nextCategory, nextDestination)
    setFilteredPackages(filtered)
    const params = {}
    if (nextCategory && nextCategory !== 'Any') params.category = nextCategory
    if (nextDestination && nextDestination !== 'Any') params.destination = nextDestination
    setSearchParams(params)
  }

  const clearAllFilters = () => {
    setCategory('Any')
    setDestination('Any')
    setMinPrice('')
    setMaxPrice('')
    setDepartureMonth('Any')
    setTravelType('Any')
    applyFilters('Any', 'Any')
  }

  return (
    <div className="packages-page">
      {/* Hero Section */}
      <div className="packages-hero">
        <div className="packages-hero-content">
          <h1>
            {['Search', 'Your', 'Package'].map((word, index) => (
              <span key={index} className="hero-word" style={{ animationDelay: `${index * 0.2}s` }}>
                {word}
                {index < 2 && <span> </span>}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* Browse by Category – directly below hero, no empty space */}
      <div className="category-chips-wrapper">
        <h2 className="section-subtitle">Browse by Category</h2>
        <div className="category-chips">
          {categories.filter((cat) => cat !== 'Any').map((cat) => (
            <button
              key={cat}
              className={`category-chip ${category === cat ? 'active' : ''}`}
              onClick={() => {
                setCategory(cat)
                applyFilters(cat, destination)
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="packages-container">
        {/* Filters Section - Only show when category is Any or when expanded */}
        {showFilters && (
          <div className="packages-filters-section">
            <div className="filters-header">
              <h2 className="filters-title">
                <span className="filters-icon">🔍</span>
                Find Your Perfect Trip
              </h2>
              <p className="filters-subtitle">Use our advanced filters to narrow down your search</p>
            </div>
            <div className="packages-filters">
            <div className="filter-row">
              <div className="filter-group">
                <label htmlFor="filter-category">
                  <span className="filter-icon">📂</span>
                  Category
                </label>
                <select 
                  id="filter-category"
                  value={category}
                  onChange={(e) => {
                    const nextCategory = e.target.value
                    setCategory(nextCategory)
                    applyFilters(nextCategory, destination)
                  }}
                  className="filter-select"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="filter-destination">
                  <span className="filter-icon">🌍</span>
                  Destination
                </label>
                <select 
                  id="filter-destination"
                  value={destination}
                  onChange={(e) => {
                    const nextDestination = e.target.value
                    setDestination(nextDestination)
                    applyFilters(category, nextDestination)
                  }}
                  className="filter-select"
                >
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="filter-travel-type">
                  <span className="filter-icon">👥</span>
                  Travel Type
                </label>
                <select 
                  id="filter-travel-type"
                  value={travelType}
                  onChange={(e) => setTravelType(e.target.value)}
                  className="filter-select"
                >
                  {travelTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="filter-row">
              <div className="filter-group price-filter-group">
                <label>
                  <span className="filter-icon">💰</span>
                  Price Range (€)
                </label>
                <div className="price-inputs">
                  <input
                    type="number"
                    placeholder={`Min: €${Math.round(priceRange.min)}`}
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="price-input"
                    min={priceRange.min}
                    max={priceRange.max}
                  />
                  <span className="price-separator">-</span>
                  <input
                    type="number"
                    placeholder={`Max: €${Math.round(priceRange.max)}`}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="price-input"
                    min={minPrice || priceRange.min}
                    max={priceRange.max}
                  />
                </div>
              </div>

              <div className="filter-group">
                <label htmlFor="filter-month">
                  <span className="filter-icon">📅</span>
                  Departure Month
                </label>
                <select 
                  id="filter-month"
                  value={departureMonth}
                  onChange={(e) => setDepartureMonth(e.target.value)}
                  className="filter-select"
                >
                  {months.map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>

              <div className="filter-actions">
                <button 
                  className="clear-filters-btn-small"
                  onClick={clearAllFilters}
                  type="button"
                >
                  Clear All
                </button>
              </div>
            </div>
            </div>
          </div>
        )}

        {/* Show expand filters button when category is selected */}
        {!showFilters && category !== 'Any' && (
          <div className="expand-filters-wrapper">
            <button 
              className="expand-filters-btn"
              onClick={() => setShowFilters(true)}
            >
              <span className="expand-icon">🔍</span>
              <span>Show Advanced Filters</span>
            </button>
          </div>
        )}

        {/* Results Section */}
        <div className="packages-results">
          <div className="results-header">
            <h2 className="results-title">
              {category !== 'Any' ? (
                <>
                  {category} - {filteredPackages.length} {filteredPackages.length === 1 ? 'Package' : 'Packages'} Found
                </>
              ) : (
                <>
                  {filteredPackages.length} {filteredPackages.length === 1 ? 'Package' : 'Packages'} Found
                </>
              )}
            </h2>
            {(category !== 'Any' || destination !== 'Any' || minPrice || maxPrice || departureMonth !== 'Any' || travelType !== 'Any') && (
              <div className="active-filters">
                {category !== 'Any' && (
                  <span className="active-filter-tag">
                    {category}
                    <button 
                      onClick={() => {
                        setCategory('Any')
                        applyFilters('Any', destination)
                      }}
                      className="remove-filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {destination !== 'Any' && (
                  <span className="active-filter-tag">
                    {destination}
                    <button 
                      onClick={() => {
                        setDestination('Any')
                        applyFilters(category, 'Any')
                      }}
                      className="remove-filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {travelType !== 'Any' && (
                  <span className="active-filter-tag">
                    {travelType}
                    <button 
                      onClick={() => setTravelType('Any')}
                      className="remove-filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {(minPrice || maxPrice) && (
                  <span className="active-filter-tag">
                    €{minPrice || priceRange.min} - €{maxPrice || priceRange.max}
                    <button 
                      onClick={() => {
                        setMinPrice('')
                        setMaxPrice('')
                      }}
                      className="remove-filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {departureMonth !== 'Any' && (
                  <span className="active-filter-tag">
                    {departureMonth}
                    <button 
                      onClick={() => setDepartureMonth('Any')}
                      className="remove-filter"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Browse Other Categories Section - Only show when a specific category is selected */}
          {category !== 'Any' && (
            <div className="browse-other-categories">
              <h3 className="browse-title">Browse Other Categories</h3>
              <div className="other-categories-grid">
                {categories.filter((cat) => cat !== 'Any' && cat !== category).slice(0, 6).map((cat) => {
                  const categoryToSlug = (categoryName) => {
                    return categoryName.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and').replace(/[^a-z0-9-]/g, '')
                  }
                  return (
                    <a
                      key={cat}
                      href={`/tour-category/${categoryToSlug(cat)}/`}
                      className="other-category-link"
                    >
                      {cat}
                    </a>
                  )
                })}
              </div>
            </div>
          )}

          {filteredPackages.length > 0 ? (
            <div className="packages-grid">
              {filteredPackages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No packages found</h3>
              <p>No packages match your current filters. Try adjusting your search criteria.</p>
              <button 
                className="clear-filters-btn"
                onClick={clearAllFilters}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Packages






