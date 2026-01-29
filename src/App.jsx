import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
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
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
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
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
