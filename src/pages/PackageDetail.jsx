import { useParams, Link } from 'react-router-dom'
import { getPackageById } from '../data/packages'
import './PackageDetail.css'

function PackageDetail() {
  const { id } = useParams()
  const pkg = getPackageById(id)

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
            <div className="image-placeholder">{pkg.image}</div>
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
                <span className="meta-value price">€{pkg.price.toLocaleString()}</span>
              </div>
            </div>

            <div className="package-actions">
              <button className="book-button">Book Now</button>
              <button className="inquiry-button">Make Inquiry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageDetail






