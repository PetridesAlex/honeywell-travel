import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { travelPackages } from '../data/packages'
import RevealOnScroll from '../components/RevealOnScroll'
import './BookOnline.css'

function BookOnline() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedType, setSelectedType] = useState('Any Type')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const resultsRef = useRef(null)

  // Check if any filters are active
  const hasActiveFilters = selectedCategory || selectedType !== 'Any Type' || startDate || endDate

  const categories = [
    'Destinations',
    'Summer Packages',
    'Autumn Packages',
    'Winter Packages',
    'Christmas Packages',
    'Easter Packages',
    'Green Monday',
    'Cruises',
    'City Breaks',
    'Exotic Packages',
    'Music & Sports',
    'Mary Special Trips'
  ]

  const packageTypes = [
    'Any Type',
    'Group Tour',
    'Private Tour',
    'Self-Guided',
    'Adventure',
    'Relaxation',
    'Family Friendly',
    'Luxury'
  ]

  // Filter packages based on selections  
  const filteredPackages = travelPackages.filter(pkg => {
    let matches = true

    // Filter by category
    if (selectedCategory && selectedCategory !== '') {
      if (pkg.category !== selectedCategory) {
        matches = false
      }
    }

    // Filter by type (if package has type field)
    if (selectedType && selectedType !== 'Any Type' && selectedType !== '') {
      if (pkg.type && pkg.type !== selectedType) {
        matches = false
      }
    }

    // Filter by date range - ONLY if dates are actually selected
    if ((startDate && startDate !== '') || (endDate && endDate !== '')) {
      // Check if package has departure date information
      if (pkg.details?.departureDate) {
        const pkgDates = pkg.details.departureDate
        
        // Handle multiple departure dates (format: 'DD/MM, DD/MM, ...' or single 'DD/MM')
        const dateStrings = pkgDates.split(',').map(d => d.trim())
        const currentYear = new Date().getFullYear()
        
        // Parse all departure dates
        const departureDates = dateStrings.map(dateStr => {
          const [day, month] = dateStr.split('/').map(num => parseInt(num))
          return new Date(currentYear, month - 1, day)
        }).filter(date => !isNaN(date.getTime())) // Filter out invalid dates
        
        if (departureDates.length === 0) {
          // If no valid dates could be parsed, exclude package
          matches = false
        } else {
          // Check if ANY of the departure dates fall within the selected range
          const hasMatchingDate = departureDates.some(packageDate => {
            let dateMatches = true
            
            // If start date is selected, check if package date is on or after start date
            if (startDate) {
              const selectedStartDate = new Date(startDate)
              if (packageDate < selectedStartDate) {
                dateMatches = false
              }
            }
            
            // If end date is selected, check if package date is on or before end date
            if (endDate) {
              const selectedEndDate = new Date(endDate)
              if (packageDate > selectedEndDate) {
                dateMatches = false
              }
            }
            
            return dateMatches
          })
          
          if (!hasMatchingDate) {
            matches = false
          }
        }
      } else {
        // If dates are selected but package has no departure date, exclude it
        matches = false
      }
    }
    
    return matches
  })

  // Auto-scroll to results when filters change and there are active filters
  useEffect(() => {
    if (hasActiveFilters && resultsRef.current) {
      // Small delay to allow render
      const timer = setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [selectedCategory, selectedType, startDate, endDate, hasActiveFilters])

  const handleSearch = (e) => {
    e.preventDefault()
    // Scroll to results
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleClearFilters = () => {
    setSelectedCategory('')
    setSelectedType('Any Type')
    setStartDate('')
    setEndDate('')
  }

  return (
    <div className="book-online-page">
      <section className="booking-hero-filters">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Book Your Perfect Trip</h1>
            <p>Choose your preferences and find the ideal travel package for you</p>
          </div>
          <form className="booking-form" onSubmit={handleSearch}>
            <div className="filter-row">
              <div className="filter-group">
                <label htmlFor="category">Travel Category</label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="type">Package Type</label>
                <select
                  id="type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {packageTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="start-date">Travel From</label>
                <input
                  type="date"
                  id="start-date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="filter-group">
                <label htmlFor="end-date">Travel To</label>
                <input
                  type="date"
                  id="end-date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate || new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            {hasActiveFilters && (
              <div className="form-actions">
                <button type="submit" className="search-btn">
                  View Results ↓
                </button>
                <button 
                  type="button" 
                  className="clear-btn"
                  onClick={handleClearFilters}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      <RevealOnScroll direction="up">
        <section className="packages-results" ref={resultsRef}>
          <div className="container">
            {hasActiveFilters ? (
              <>
                <div className="results-header">
                  <h2 className="results-title">
                    {filteredPackages.length} travel package{filteredPackages.length !== 1 ? 's' : ''} found
                  </h2>
                  <div className="active-filters">
                    {selectedCategory && <span className="filter-tag">Category: {selectedCategory}</span>}
                    {selectedType && selectedType !== 'Any Type' && <span className="filter-tag">Type: {selectedType}</span>}
                    {startDate && <span className="filter-tag">From: {new Date(startDate).toLocaleDateString()}</span>}
                    {endDate && <span className="filter-tag">To: {new Date(endDate).toLocaleDateString()}</span>}
                  </div>
                </div>

                {filteredPackages.length === 0 ? (
                  <div className="no-results">
                    <p>😔 No packages found matching your criteria.</p>
                    <p>Try adjusting your filters to see more options.</p>
                  </div>
                ) : (
                  <div className="packages-grid">
                    {filteredPackages.map((pkg) => {
                      const imageUrl = pkg.details?.thumbnailImage || pkg.details?.coverImage || pkg.details?.gallery?.[0]
                      return (
                      <Link
                        key={pkg.id}
                        to={`/packages/${pkg.id}`}
                        className="package-card-link"
                        onClick={() => {
                          window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
                          if (document.documentElement) document.documentElement.scrollTop = 0
                          if (document.body) document.body.scrollTop = 0
                          setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 0)
                        }}
                      >
                        <div className="package-card">
                          {imageUrl ? (
                            <div
                              className="package-image-thumb"
                              style={{ backgroundImage: `url(${imageUrl})` }}
                            />
                          ) : (
                            <div className="package-emoji">{pkg.image}</div>
                          )}
                          <div className="package-content">
                            <p className="package-category">{pkg.category}</p>
                            <h3 className="package-title">{pkg.title}</h3>
                            <p className="package-destination">{pkg.destination}</p>
                            <div className="package-footer">
                              <span className="package-duration">{pkg.duration}</span>
                              <span className="package-price">€{pkg.price}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )})}
                  </div>
                )}
              </>
            ) : (
              <div className="search-prompt">
                <p className="search-prompt-text">
                  Select your travel preferences above to see available packages.
                </p>
              </div>
            )}
          </div>
        </section>
      </RevealOnScroll>
    </div>
  )
}

export default BookOnline
