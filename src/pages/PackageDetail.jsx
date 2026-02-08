import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getPackageById } from '../data/packages'
import { getTranslatedPackageTitle } from '../utils/packageTranslations'
import SEO from '../components/SEO'
import RevealOnScroll from '../components/RevealOnScroll'
import './PackageDetail.css'

function PackageDetail() {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const pkg = getPackageById(id)
  const translatedTitle = pkg ? getTranslatedPackageTitle(pkg.id, pkg.title, i18n) : ''

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

  const packageUrl = `https://www.honeywelltravel.com.cy/packages/${pkg.id}`
  const packageImage = pkg.details?.thumbnailImage || pkg.details?.coverImage || pkg.details?.gallery?.[0] || 'https://www.honeywelltravel.com.cy/images/og-image.jpg'
  const fullImageUrl = packageImage.startsWith('http') ? packageImage : `https://www.honeywelltravel.com.cy${packageImage}`
  const packageDescription = pkg.longDescription || pkg.description || `Book ${translatedTitle} - ${pkg.duration} from €${displayPrice.toLocaleString()}. ${pkg.destination} travel package with Honeywell Travel.`

  // Structured data for package
  const packageStructuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": translatedTitle,
    "description": packageDescription,
    "image": fullImageUrl,
    "url": packageUrl,
    "provider": {
      "@type": "TravelAgency",
      "name": "Honeywell Travel",
      "url": "https://www.honeywelltravel.com.cy"
    },
    "itinerary": {
      "@type": "Place",
      "name": pkg.destination
    },
    "duration": pkg.duration,
    "offers": {
      "@type": "Offer",
      "price": displayPrice,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": packageUrl
    }
  }

  return (
    <div className="package-detail-page">
      <SEO 
        title={`${translatedTitle} - ${pkg.duration} | Honeywell Travel`}
        description={packageDescription}
        keywords={`${pkg.destination}, ${pkg.category}, Travel Package, Holiday Package, ${pkg.duration}, Honeywell Travel`}
        image={fullImageUrl}
        url={packageUrl}
        type="product"
        structuredData={packageStructuredData}
      />
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

            <h1>{translatedTitle}</h1>
            
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
              <Link 
                to={`/packages/${pkg.id}/details`} 
                className="view-travel-package-button"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
                  if (document.documentElement) document.documentElement.scrollTop = 0
                  if (document.body) document.body.scrollTop = 0
                  setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 0)
                }}
              >
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






