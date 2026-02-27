import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getTranslatedPackageTitle } from '../utils/packageTranslations'
import './PackageCard.css'

function PackageCard({ package: pkg }) {
  const { i18n } = useTranslation()
  const translatedTitle = getTranslatedPackageTitle(pkg.id, pkg.title, i18n)
  
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
  const imageUrl = pkg.details?.thumbnailImage || pkg.details?.coverImage || pkg.details?.gallery?.[0]
  const resetScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    if (document.documentElement) document.documentElement.scrollTop = 0
    if (document.body) document.body.scrollTop = 0
  }

  return (
    <Link
      to={`/packages/${pkg.id}/details`}
      className="package-card"
      onClick={() => {
        // Ensure destination page always opens at hero/top.
        resetScrollTop()
        requestAnimationFrame(resetScrollTop)
        setTimeout(resetScrollTop, 60)
      }}
    >
      <div
        className={`package-image${imageUrl ? ' package-image-bg' : ''}`}
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
      >
        {!imageUrl && pkg.image}
      </div>
      <div className="package-content">
        <div className="package-badge">{pkg.destination}</div>
        <h3 className={`package-title${[20, 21, 24].includes(pkg.id) ? ' package-title-green' : ''}`}>{translatedTitle}</h3>
        <p className="package-description">{pkg.description}</p>
        <div className="package-details">
          <span className="package-duration">⏱️ {pkg.duration}</span>
          <span className="package-category">{pkg.category}</span>
        </div>
        <div className="package-footer">
          <span className="package-price">From €{displayPrice.toLocaleString()}</span>
          <span className="package-button">View Details →</span>
        </div>
      </div>
    </Link>
  )
}

export default PackageCard






