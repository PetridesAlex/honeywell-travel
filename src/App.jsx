import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './i18n/config' // Initialize i18n
import Header from './components/Header'
import AppLoader from './components/AppLoader'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
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
import DmcCyprus from './pages/DmcCyprus'
import BookOnline from './pages/BookOnline'
import BuildYourTrip from './pages/BuildYourTrip'
import Cruises from './pages/Cruises'
import OurWorld from './pages/OurWorld'
import BlogPostDetail from './pages/BlogPostDetail'
import './App.css'

function AppContent() {
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
          <Route path="/dmc-cyprus" element={<DmcCyprus />} />
          <Route path="/dmc-cyprus/" element={<DmcCyprus />} />
          <Route path="/book-online" element={<BookOnline />} />
          <Route path="/build-your-trip" element={<BuildYourTrip />} />
          <Route path="/build-your-trip/" element={<BuildYourTrip />} />
          <Route path="/car-hire" element={<div className="page-placeholder"><h1>Car Hire</h1><p>Coming soon...</p></div>} />
          <Route path="/insurance" element={<div className="page-placeholder"><h1>Insurance</h1><p>Coming soon...</p></div>} />
        </Routes>
        <Footer />
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
