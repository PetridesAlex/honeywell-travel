import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

// Helper function to convert category name to URL-friendly slug
const categoryToSlug = (category) => {
  return category
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9-]/g, '')
}

function Header() {
  const { t } = useTranslation()
  const [activeDropdown, setActiveDropdown] = useState(null) // desktop dropdowns
  const [closeTimeout, setCloseTimeout] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null)

  const holidayTypes = [
    'Destinations',
    'Summer Packages',
    'Summer Packages to Greece',
    'Autumn Packages',
    'Winter Packages',
    'Christmas Packages',
    'Easter Packages',
    'Green Monday Packages',
    'Cruises',
    'City Breaks',
    'Exotic Packages',
    'Mary Specials Trips'
  ]

  const honeymoonTypes = [
    'Honeymoon Trips',
    'Honeymoon Calendar',
    'Gift Voucher'
  ]

  const handleDropdownEnter = (type) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setActiveDropdown(type)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 200) // 200ms delay before closing
    setCloseTimeout(timeout)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setActiveMobileDropdown(null)
  }

  const toggleMobileDropdown = (type) => {
    setActiveMobileDropdown((prev) => (prev === type ? null : type))
  }

  return (
    <header className="header">
      <div className="tagline-bar">
        <span className="tagline-text">#LivetheExperience</span>
      </div>
      <div className="header-container">
        <Link to="/" className="logo">
          <img 
            src="/images/icons/honeywell-travel-logo.webp" 
            alt="Honeywell Travel Logo" 
            className="logo-image"
          />
        </Link>

        <Link 
          to="/build-your-trip" 
          className="header-build-trip"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}
        >
          <span className="header-build-trip-text">Build Your Trip</span>
          <span className="header-build-trip-icon">→</span>
        </Link>
        
        <nav className="nav">
          <Link to="/ourworld/" className="nav-link">Our World</Link>
          
          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleDropdownEnter('holiday')}
            onMouseLeave={handleDropdownLeave}
          >
            <span className="nav-link dropdown-trigger">
              Holiday Types
              <span className="dropdown-arrow">▼</span>
            </span>
            {activeDropdown === 'holiday' && (
              <div className="dropdown-menu" onMouseEnter={() => handleDropdownEnter('holiday')} onMouseLeave={handleDropdownLeave}>
                <div className="dropdown-arrow-top"></div>
                {holidayTypes.map((item, index) => (
                  <Link 
                    key={index} 
                    to={`/tour-category/${categoryToSlug(item)}/`}
                    className="dropdown-item"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
                      if (document.documentElement) document.documentElement.scrollTop = 0
                      if (document.body) document.body.scrollTop = 0
                      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0)
                    }}
                  >
                    <span className="dropdown-item-icon">→</span>
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleDropdownEnter('honeymoon')}
            onMouseLeave={handleDropdownLeave}
          >
            <span className="nav-link dropdown-trigger">
              {t('header.honeymoon')}
              <span className="dropdown-arrow">▼</span>
            </span>
            {activeDropdown === 'honeymoon' && (
              <div className="dropdown-menu" onMouseEnter={() => handleDropdownEnter('honeymoon')} onMouseLeave={handleDropdownLeave}>
                <div className="dropdown-arrow-top"></div>
                {honeymoonTypes.map((item, index) => (
                  <Link 
                    key={index} 
                    to={
                      item === 'Gift Voucher'
                        ? '/gift-vouchers'
                        : item === 'Honeymoon Calendar'
                          ? '/honeymoon-calendar'
                          : `/${item.toLowerCase().replace(/\s+/g, '-')}`
                    } 
                    className="dropdown-item"
                  >
                    <span className="dropdown-item-icon">→</span>
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/our-services/" className="nav-link">{t('header.corporate')}</Link>
          <Link to="/dmc-cyprus" className="nav-link">{t('header.dmcServices')}</Link>
          <a
            href="https://summerautos.com/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('header.carHire')}
          </a>
          <Link to="/honeywell-travel-gallery/" className="nav-link">{t('header.gallery')}</Link>
          <Link to="/our-blog/" className="nav-link">{t('header.blog')}</Link>
          <a 
            href="https://www.icontract.gr/whitelabelcy/el/index.aspx" 
            className="nav-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {t('header.insurance')}
          </a>
          <Link to="/contact/" className="nav-link">{t('header.contact')}</Link>
          
          <LanguageSwitcher />
          
          <div className="social-icons">
            <a 
              href="https://www.facebook.com/honeywelltravel" 
              className="social-icon" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/honeywell_travel/" 
              className="social-icon" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </nav>

        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'is-open' : ''}`}
          onClick={() => {
            setIsMobileMenuOpen((prev) => !prev)
            setActiveMobileDropdown(null)
          }}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/build-your-trip" className="mobile-link mobile-build-trip" onClick={closeMobileMenu}>
            <span>Build Your Trip</span>
            <span className="mobile-build-trip-icon">→</span>
          </Link>
          <Link to="/ourworld/" className="mobile-link" onClick={closeMobileMenu}>{t('header.ourWorld')}</Link>
          
          <div className="mobile-dropdown">
            <button 
              className="mobile-link mobile-dropdown-trigger" 
              onClick={() => toggleMobileDropdown('holiday')}
            >
              {t('header.holidayTypes')}
              <span className="mobile-dropdown-arrow">{activeMobileDropdown === 'holiday' ? '▲' : '▼'}</span>
            </button>
            {activeMobileDropdown === 'holiday' && (
              <div className="mobile-dropdown-menu">
                {holidayTypes.map((item, index) => (
                  <Link 
                    key={index} 
                    to={`/tour-category/${categoryToSlug(item)}/`}
                    className="mobile-dropdown-item"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
                      if (document.documentElement) document.documentElement.scrollTop = 0
                      if (document.body) document.body.scrollTop = 0
                      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0)
                      closeMobileMenu()
                    }}
                  >
                    <span className="dropdown-item-icon">→</span>
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mobile-dropdown">
            <button 
              className="mobile-link mobile-dropdown-trigger" 
              onClick={() => toggleMobileDropdown('honeymoon')}
            >
              {t('header.honeymoon')}
              <span className="mobile-dropdown-arrow">{activeMobileDropdown === 'honeymoon' ? '▲' : '▼'}</span>
            </button>
            {activeMobileDropdown === 'honeymoon' && (
              <div className="mobile-dropdown-menu">
                {honeymoonTypes.map((item, index) => (
                  <Link 
                    key={index} 
                    to={
                      item === 'Gift Voucher'
                        ? '/gift-vouchers'
                        : item === 'Honeymoon Calendar'
                          ? '/honeymoon-calendar'
                          : `/${item.toLowerCase().replace(/\s+/g, '-')}`
                    } 
                    className="mobile-dropdown-item"
                    onClick={closeMobileMenu}
                  >
                    <span className="dropdown-item-icon">→</span>
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/our-services/" className="mobile-link" onClick={closeMobileMenu}>{t('header.corporate')}</Link>
          <Link to="/dmc-cyprus" className="mobile-link" onClick={closeMobileMenu}>{t('header.dmcServices')}</Link>
          <a
            href="https://summerautos.com/"
            className="mobile-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            {t('header.carHire')}
          </a>
          <Link to="/honeywell-travel-gallery/" className="mobile-link" onClick={closeMobileMenu}>{t('header.gallery')}</Link>
          <Link to="/our-blog/" className="mobile-link" onClick={closeMobileMenu}>{t('header.blog')}</Link>
          <a 
            href="https://www.icontract.gr/whitelabelcy/el/index.aspx" 
            className="mobile-link" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            {t('header.insurance')}
          </a>
          <Link to="/contact/" className="mobile-link" onClick={closeMobileMenu}>{t('header.contact')}</Link>
          
          <LanguageSwitcher />
          
          <div className="mobile-social-icons">
            <a 
              href="https://www.facebook.com/honeywelltravel" 
              className="mobile-social-icon" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              onClick={closeMobileMenu}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/honeywell_travel/" 
              className="mobile-social-icon" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              onClick={closeMobileMenu}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

