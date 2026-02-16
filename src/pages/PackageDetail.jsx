import { Navigate, useParams, Link } from 'react-router-dom'
import { getPackageById } from '../data/packages'
import SEO from '../components/SEO'
import './PackageDetail.css'

function PackageDetail() {
  const { id } = useParams()
  const pkg = getPackageById(id)

  if (!pkg) {
    return (
      <div className="package-detail-page">
        <SEO
          title="Package Not Found | Honeywell Travel"
          description="The requested package could not be found."
          noindex
        />
        <div className="package-detail-container">
          <h1>Package Not Found</h1>
          <p>The package you're looking for doesn't exist.</p>
          <Link to="/packages" className="back-link">← Back to Packages</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title="Redirecting to Package Details | Honeywell Travel"
        description="Redirecting to the full package details page."
        noindex
      />
      <Navigate to={`/packages/${id}/details`} replace />
    </>
  )
}

export default PackageDetail






