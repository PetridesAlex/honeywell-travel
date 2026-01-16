import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getPackagesByFilter, travelPackages } from '../data/packages'
import PackageCard from '../components/PackageCard'
import './Packages.css'

function Packages() {
  const [searchParams] = useSearchParams()
  const [filteredPackages, setFilteredPackages] = useState(travelPackages)
  const [category, setCategory] = useState(searchParams.get('category') || 'Any')
  const [destination, setDestination] = useState(searchParams.get('destination') || 'Any')

  const categories = [
    'Any',
    'Autumn Packages',
    'Christmas Packages',
    'City Breaks',
    'Cruises',
    'Easter Packages',
    'Exotic Destinations',
    'Exotic Packages',
    'Green Monday',
    'Group Travel',
    'Mary Special Trips',
    'SPORTS EVENTS & CONCERTS',
    'Summer Packages',
    'Winter Packages'
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

  useEffect(() => {
    const filtered = getPackagesByFilter(category, destination)
    setFilteredPackages(filtered)
  }, [category, destination])

  const handleFilterChange = () => {
    const filtered = getPackagesByFilter(category, destination)
    setFilteredPackages(filtered)
  }

  return (
    <div className="packages-page">
      <div className="packages-container">
        <h1>Travel Packages</h1>
        
        <div className="packages-filters">
          <div className="filter-group">
            <label htmlFor="filter-category">Category</label>
            <select 
              id="filter-category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                handleFilterChange()
              }}
              className="filter-select"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filter-destination">Destination</label>
            <select 
              id="filter-destination"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
                handleFilterChange()
              }}
              className="filter-select"
            >
              {destinations.map((dest) => (
                <option key={dest} value={dest}>{dest}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="packages-results">
          <p className="results-count">
            Found {filteredPackages.length} {filteredPackages.length === 1 ? 'package' : 'packages'}
            {category !== 'Any' && ` in ${category}`}
            {destination !== 'Any' && ` to ${destination}`}
          </p>

          {filteredPackages.length > 0 ? (
            <div className="packages-grid">
              {filteredPackages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No packages found matching your criteria.</p>
              <p>Try adjusting your filters or <a href="/add-package">add a new package</a>.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Packages






