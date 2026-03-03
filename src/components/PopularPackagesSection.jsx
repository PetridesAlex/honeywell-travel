import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPackagesByCategory } from '../data/packages'
import PackageCard from './PackageCard'
import './PopularPackagesSection.css'

const popularCategories = [
  { value: 'Summer Packages', label: 'Summer Packages' },
  { value: 'Easter Packages', label: 'Easter Packages' },
  { value: 'Music & Sports', label: 'Music & Sports' },
  { value: 'Exotic Packages', label: 'Exotic Packages' }
]

const PACKAGE_ROTATION_MS = 8000
const CATEGORY_ROTATION_MS = 14000

const categoryToSlug = (category) =>
  category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and').replace(/[^a-z0-9-]/g, '')

function getLeadPrice(pkg) {
  if (pkg.details?.hotels?.length) {
    let lowestDouble = Infinity
    for (const hotel of pkg.details.hotels) {
      const price = hotel?.prices?.double
      if (typeof price === 'number' && price > 0 && price < lowestDouble) {
        lowestDouble = price
      }
    }
    if (lowestDouble !== Infinity) return lowestDouble
  }
  return typeof pkg.price === 'number' ? pkg.price : Number.MAX_SAFE_INTEGER
}

function PopularPackagesSection() {
  const [selectedCategory, setSelectedCategory] = useState(popularCategories[0].value)
  const [rotationIndex, setRotationIndex] = useState(0)

  const allPackagesForCategory = useMemo(() => {
    return getPackagesByCategory(selectedCategory)
      .slice()
      .sort((a, b) => getLeadPrice(a) - getLeadPrice(b))
  }, [selectedCategory])

  useEffect(() => {
    setRotationIndex(0)
  }, [selectedCategory])

  useEffect(() => {
    if (allPackagesForCategory.length <= 3) return
    const interval = setInterval(() => {
      setRotationIndex((prev) => (prev + 1) % allPackagesForCategory.length)
    }, PACKAGE_ROTATION_MS)
    return () => clearInterval(interval)
  }, [allPackagesForCategory])

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCategory((prev) => {
        const currentIndex = popularCategories.findIndex((cat) => cat.value === prev)
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % popularCategories.length
        return popularCategories[nextIndex].value
      })
    }, CATEGORY_ROTATION_MS)
    return () => clearInterval(interval)
  }, [])

  const packagesForCategory = useMemo(() => {
    if (allPackagesForCategory.length <= 3) return allPackagesForCategory
    const visible = []
    for (let i = 0; i < 3; i += 1) {
      visible.push(allPackagesForCategory[(rotationIndex + i) % allPackagesForCategory.length])
    }
    return visible
  }, [allPackagesForCategory, rotationIndex])

  return (
    <section className="popular-packages-section" aria-label="Popular packages">
      <div className="popular-packages-container">
        <div className="popular-packages-header">
          <h2>Popular Packages</h2>
          <p>Explore available packages by travel category and book what fits your clients fastest.</p>
        </div>

        <div className="popular-category-chips" role="tablist" aria-label="Popular package categories">
          {popularCategories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              className={`popular-category-chip${selectedCategory === cat.value ? ' active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat.value)
                setRotationIndex(0)
              }}
              role="tab"
              aria-selected={selectedCategory === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="popular-packages-grid">
          {packagesForCategory.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>

        <div className="popular-packages-actions">
          <Link to={`/tour-category/${categoryToSlug(selectedCategory)}/`} className="popular-packages-link">
            View all {selectedCategory}
          </Link>
          <Link to="/packages" className="popular-packages-link secondary">
            Browse all packages
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PopularPackagesSection
