import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Packages from './pages/Packages'
import AddPackage from './pages/AddPackage'
import PackageDetail from './pages/PackageDetail'
import GiftVoucher from './pages/GiftVoucher'
import HolidayTypes from './pages/HolidayTypes'
import Corporate from './pages/Corporate'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:id" element={<PackageDetail />} />
            <Route path="/add-package" element={<AddPackage />} />
            <Route path="/gift-vouchers" element={<GiftVoucher />} />
            <Route path="/holiday-types" element={<HolidayTypes />} />
            <Route path="/our-world" element={<div className="page-placeholder"><h1>Our World</h1><p>Coming soon...</p></div>} />
            <Route path="/corporate" element={<Corporate />} />
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
