import { useState } from 'react'
import { Link } from 'react-router-dom'
import { travelPackages } from '../data/packages'
import RevealOnScroll from '../components/RevealOnScroll'
import './BookOnline.css'

function BookOnline() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

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

    if (selectedCategory && pkg.category !== selectedCategory) {
      matches = false
    }

    // Note: Type filtering would need to be added to package data structure
    // For now, we'll just filter by category and dates if dates are set
    
    return matches
  })

  const handleSearch = (e) => {
    e.preventDefault()
    setHasSearched(true)
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

            <div className="form-actions">
              <button type="submit" className="search-btn">
                Search Packages
              </button>
            </div>
          </form>
        </div>
      </section>

      {hasSearched ? (
        <RevealOnScroll direction="up">
          <section className="packages-results">
            <div className="container">
              <h2 className="results-title">
                {filteredPackages.length} travel packages available
              </h2>

              {filteredPackages.length === 0 ? (
                <div className="no-results">
                  <p>No packages found matching your criteria.</p>
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
            </div>
          </section>
        </RevealOnScroll>
      ) : (
        <section className="packages-results packages-results-prompt">
          <div className="container">
            <p className="search-prompt-text">
              Select your travel category and dates above, then click <strong>Search Packages</strong> to see available packages.
            </p>
          </div>
        </section>
      )}
    </div>
  )
}

export default BookOnline
