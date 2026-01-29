import { useParams, Link } from 'react-router-dom'
import { getPackageById } from '../data/packages'
import './PackageDetail.css'

function PackageDetail() {
  const { id } = useParams()
  const pkg = getPackageById(id)

  // Calculate the cheapest hotel price
  const getCheapestPrice = () => {
    if (pkg.details && pkg.details.hotels && pkg.details.hotels.length > 0) {
      let cheapestPrice = Infinity
      
      pkg.details.hotels.forEach(hotel => {
        // Check packagePrice (for 2 adults)
        if (hotel.packagePrice && hotel.packagePrice < cheapestPrice) {
          cheapestPrice = hotel.packagePrice
        }
        
        // Check individual prices (double, single, triple, child1, child2)
        if (hotel.prices) {
          Object.values(hotel.prices).forEach(price => {
            if (price && price < cheapestPrice) {
              cheapestPrice = price
            }
          })
        }
      })
      
      return cheapestPrice !== Infinity ? cheapestPrice : pkg.price
    }
    return pkg.price
  }

  const displayPrice = getCheapestPrice()

  if (!pkg) {
    return (
      <div className="package-detail-page">
        <div className="package-detail-container">
          <h1>Package Not Found</h1>
          <p>The package you're looking for doesn't exist.</p>
          <Link to="/packages" className="back-link">← Back to Packages</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="package-detail-page">
      <div className="package-detail-container">
        <Link to="/packages" className="back-link">← Back to Packages</Link>
        
        <div className="package-detail-content">
          <div className="package-detail-image">
            {pkg.details ? (
              <div 
                className="package-image-bg"
                style={{ 
                  backgroundImage: `url(${pkg.details.coverImage || (pkg.details.gallery && pkg.details.gallery[0]) || '/images/destinations/athens-hero.webp'})` 
                }}
              >
                <div className="package-image-overlay"></div>
              </div>
            ) : (
              <div 
                className="package-image-bg"
                style={{ backgroundImage: 'url(/images/destinations/athens-hero.webp)' }}
              >
                <div className="package-image-overlay"></div>
              </div>
            )}
          </div>

          <div className="package-detail-info">
            <div className="package-badges">
              <span className="badge destination">{pkg.destination}</span>
              <span className="badge category">{pkg.category}</span>
              {pkg.featured && <span className="badge featured">⭐ Featured</span>}
            </div>

            <h1>{pkg.title}</h1>
            
            <p className="package-description">{pkg.description}</p>

            <div className="package-meta">
              <div className="meta-item">
                <span className="meta-label">Duration:</span>
                <span className="meta-value">⏱️ {pkg.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Price:</span>
                <span className="meta-value price">From €{displayPrice.toLocaleString()}</span>
              </div>
            </div>

            <div className="package-actions">
              <Link to={`/packages/${pkg.id}/details`} className="view-travel-package-button">
                View Travel Package
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageDetail






