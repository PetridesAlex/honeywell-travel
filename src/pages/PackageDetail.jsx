import { useParams, Link } from 'react-router-dom'
import { getPackageById } from '../data/packages'
import RevealOnScroll from '../components/RevealOnScroll'
import './PackageDetail.css'

function PackageDetail() {
  const { id } = useParams()
  const pkg = getPackageById(id)

  // From price = lowest double room price per person across all hotels
  const getCheapestPrice = () => {
    if (pkg.details && pkg.details.hotels && pkg.details.hotels.length > 0) {
      let lowestDouble = Infinity
      pkg.details.hotels.forEach(hotel => {
        if (hotel.prices && hotel.prices.double != null && hotel.prices.double > 0 && hotel.prices.double < lowestDouble) {
          lowestDouble = hotel.prices.double
        }
      })
      return lowestDouble !== Infinity ? lowestDouble : pkg.price
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
      <RevealOnScroll direction="up">
      <div className="package-detail-container">
        <Link to="/packages" className="back-link">← Back to Packages</Link>
        
        <div className="package-detail-content">
          <div className="package-detail-image">
            {pkg.details ? (
              <div 
                className="package-image-bg"
                style={{ 
                  backgroundImage: `url(${pkg.details.thumbnailImage || pkg.details.coverImage || (pkg.details.gallery && pkg.details.gallery[0]) || '/images/destinations/athens-hero.webp'})` 
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
      </RevealOnScroll>
    </div>
  )
}

export default PackageDetail






