import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react'
import './i18n/config' // Initialize i18n
import Header from './components/Header'
import AppLoader from './components/AppLoader'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Packages from './pages/Packages'
import AddPackage from './pages/AddPackage'
import PackageDetail from './pages/PackageDetail'
import PackageFullDetail from './pages/PackageFullDetail'
import HoneymoonCalendar from './pages/HoneymoonCalendar'
import HoneymoonTrips from './pages/HoneymoonTrips'
import GiftVoucher from './pages/GiftVoucher'
import HolidayTypes from './pages/HolidayTypes'
import Corporate from './pages/Corporate'
import BookOnline from './pages/BookOnline'
import Cruises from './pages/Cruises'
import OurWorld from './pages/OurWorld'
import BlogPostDetail from './pages/BlogPostDetail'
import './App.css'

function ScrollToTop() {
  const location = useLocation()

  useLayoutEffect(() => {
    const resetScrollTop = () => {
      window.scrollTo(0, 0)
      if (document.documentElement) document.documentElement.scrollTop = 0
      if (document.body) document.body.scrollTop = 0
    }

    // Immediate reset on every navigation key change (path/search/hash)
    resetScrollTop()

    // Extra post-render attempts for components that shift layout after mount
    const rafId = requestAnimationFrame(resetScrollTop)
    const t1 = setTimeout(resetScrollTop, 60)
    const t2 = setTimeout(resetScrollTop, 180)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [location.key])

  return null
}

function AppContent() {
  const [hideFooter, setHideFooter] = useState(false)
  const location = useLocation()

  // Hide footer during navigation and ensure it stays hidden until page loads
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHideFooter(true)
    // Keep footer hidden longer to ensure page loads from top
    const timer = setTimeout(() => {
      setHideFooter(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [location.pathname])

  // Hide footer immediately when links/buttons are clicked
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a, button')
      if (target && (target.tagName === 'A' || target.tagName === 'BUTTON')) {
        const href = target.getAttribute('href')
        // Only hide footer for internal navigation links
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          setHideFooter(true)
          // Show footer again after navigation completes and page has scrolled
          setTimeout(() => {
            setHideFooter(false)
          }, 1000)
        }
      }
    }

    document.addEventListener('click', handleClick, true) // Use capture phase
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-blog" element={<Blog />} />
          <Route path="/our-blog/" element={<Blog />} />
          <Route path="/our-blog/:slug" element={<BlogPostDetail />} />
          <Route path="/honeywell-travel-gallery" element={<Gallery />} />
          <Route path="/honeywell-travel-gallery/" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/tour-category/:slug" element={<Packages />} />
          <Route path="/tour-category/:slug/" element={<Packages />} />
          <Route path="/packages/:id" element={<PackageDetail />} />
          <Route path="/packages/:id/details" element={<PackageFullDetail />} />
          <Route path="/cruises" element={<Cruises />} />
          <Route path="/add-package" element={<AddPackage />} />
          <Route path="/gift-vouchers" element={<GiftVoucher />} />
          <Route path="/holiday-types" element={<HolidayTypes />} />
          <Route path="/honeymoon-trips" element={<HoneymoonTrips />} />
          <Route path="/honeymoon-calendar" element={<HoneymoonCalendar />} />
          <Route path="/ourworld" element={<OurWorld />} />
          <Route path="/ourworld/" element={<OurWorld />} />
          <Route path="/our-services" element={<Corporate />} />
          <Route path="/our-services/" element={<Corporate />} />
          <Route path="/book-online" element={<BookOnline />} />
          <Route path="/car-hire" element={<div className="page-placeholder"><h1>Car Hire</h1><p>Coming soon...</p></div>} />
          <Route path="/insurance" element={<div className="page-placeholder"><h1>Insurance</h1><p>Coming soon...</p></div>} />
        </Routes>
        {!hideFooter && <Footer />}
      </main>
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const [loaderExiting, setLoaderExiting] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false)
      setLoaderExiting(true)
    }, 1200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!loaderExiting) return
    const t = setTimeout(() => setLoaderExiting(false), 550)
    return () => clearTimeout(t)
  }, [loaderExiting])

  const showLoader = loading || loaderExiting

  return (
    <Router>
      {showLoader && <AppLoader exiting={loaderExiting} />}
      <ScrollToTop />
      <div className="app">
        <AppContent />
      </div>
    </Router>
  )
}

export default App
