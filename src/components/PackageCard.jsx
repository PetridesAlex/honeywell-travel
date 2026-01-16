import { Link } from 'react-router-dom'
import './PackageCard.css'

function PackageCard({ package: pkg }) {
  return (
    <Link to={`/packages/${pkg.id}`} className="package-card">
      <div className="package-image">{pkg.image}</div>
      <div className="package-content">
        <div className="package-badge">{pkg.destination}</div>
        <h3 className="package-title">{pkg.title}</h3>
        <p className="package-description">{pkg.description}</p>
        <div className="package-details">
          <span className="package-duration">⏱️ {pkg.duration}</span>
          <span className="package-category">{pkg.category}</span>
        </div>
        <div className="package-footer">
          <span className="package-price">€{pkg.price.toLocaleString()}</span>
          <span className="package-button">View Details →</span>
        </div>
      </div>
    </Link>
  )
}

export default PackageCard






