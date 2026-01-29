import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getPackageById, travelPackages } from '../data/packages'
import './PackageFullDetail.css'

// Helper function to format program text with proper paragraphs
const formatProgramText = (text) => {
  if (!text) return []
  // Split by double newlines to create paragraphs
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim())
  return paragraphs.map(p => p.trim())
}

// Helper function to extract title from text
const extractTitle = (text) => {
  if (!text) return null
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim())
  const firstPara = paragraphs[0]?.trim()
  // Check if first paragraph looks like a title (short, contains dashes or colons)
  if (firstPara && firstPara.length < 120 && (firstPara.includes('–') || firstPara.includes('-') || firstPara.includes(':'))) {
    return firstPara
  }
  return null
}

function PackageFullDetail() {
  const { id } = useParams()
  const pkg = getPackageById(id)
  const [activeTab, setActiveTab] = useState('price')
  const [activeProgramIndex, setActiveProgramIndex] = useState(null)
  const [hotelSelections, setHotelSelections] = useState({})
  const [roomSelections, setRoomSelections] = useState({}) // New state for multiple rooms per hotel
  const [showReserveModal, setShowReserveModal] = useState(false)
  const [reserveFormData, setReserveFormData] = useState({
    email: '',
    phone: '',
    numberOfRooms: 1,
    hotelIndex: null
  })

  if (!pkg) {
    return (
      <div className="package-full-page">
        <div className="package-full-container">
          <h1>Package Not Found</h1>
          <Link to="/packages" className="back-link">← Back to Packages</Link>
        </div>
      </div>
    )
  }

      const details = pkg.details || {}
      const gallery = details.gallery || []

      // Calculate cheapest price for a package (per person for 1 adult)
      const getCheapestPrice = (pkg) => {
        if (pkg.details && pkg.details.hotels && pkg.details.hotels.length > 0) {
          let cheapestPrice = Infinity
          
          pkg.details.hotels.forEach(hotel => {
            // Check per-person prices (prices.double is per person)
            if (hotel.prices) {
              if (hotel.prices.double && hotel.prices.double < cheapestPrice) {
                cheapestPrice = hotel.prices.double
              }
              if (hotel.prices.single && hotel.prices.single < cheapestPrice) {
                cheapestPrice = hotel.prices.single
              }
              if (hotel.prices.triple && hotel.prices.triple < cheapestPrice) {
                cheapestPrice = hotel.prices.triple
              }
            }
            // Fallback: if packagePrice exists, divide by 2 to get per-person price
            if (hotel.packagePrice && (hotel.packagePrice / 2) < cheapestPrice) {
              cheapestPrice = hotel.packagePrice / 2
            }
          })
          
          return cheapestPrice !== Infinity ? cheapestPrice : pkg.price
        }
        return pkg.price
      }

      const relatedTours = travelPackages.filter(
        (p) => p.category === pkg.category && p.id !== pkg.id
      ).slice(0, 3).map(tour => ({
        ...tour,
        cheapestPrice: getCheapestPrice(tour)
      }))

  const toggleProgram = (index) => {
    setActiveProgramIndex(activeProgramIndex === index ? null : index)
  }

  // Calculate price for a single room based on selection
  const calculateRoomPrice = (hotel, selection) => {
    let total = 0
    
    // Calculate adult pricing
    if (selection.roomType === 'single' && hotel.prices.single) {
      total = hotel.prices.single * selection.adults
    } else if (selection.roomType === 'double' && hotel.prices.double) {
      total = hotel.prices.double * selection.adults
    } else if (selection.roomType === 'triple' && hotel.prices.triple) {
      total = hotel.prices.triple * Math.min(selection.adults, 3)
      if (selection.adults > 3) {
        const extraAdults = selection.adults - 3
        total += hotel.prices.double * extraAdults
      }
    } else if (hotel.prices.double) {
      total = hotel.prices.double * selection.adults
    }
    
    // Add children pricing
    if (selection.children > 0 && hotel.prices.child1) {
      total += hotel.prices.child1 * Math.min(selection.children, 1)
    }
    if (selection.children2 > 0 && hotel.prices.child2) {
      total += hotel.prices.child2 * selection.children2
    }
    
    return total || 0
  }

  // Calculate total price for a hotel based on all room selections
  const calculateHotelPrice = (hotel, hotelIndex) => {
    const rooms = roomSelections[hotelIndex] || []
    if (rooms.length === 0) {
      // Fallback to old single selection if no rooms added yet
      const selection = hotelSelections[hotelIndex] || { roomType: 'double', adults: 1, children: 0, children2: 0 }
      return calculateRoomPrice(hotel, selection)
    }
    
    return rooms.reduce((total, room) => {
      return total + calculateRoomPrice(hotel, room)
    }, 0)
  }

  // Initialize rooms for a hotel
  const initializeRooms = (hotelIndex) => {
    if (!roomSelections[hotelIndex] || roomSelections[hotelIndex].length === 0) {
      setRoomSelections(prev => ({
        ...prev,
        [hotelIndex]: [{
          roomId: Date.now(),
          roomType: 'double',
          adults: 1,
          children: 0,
          children2: 0
        }]
      }))
    }
  }

  // Add a new room
  const addRoom = (hotelIndex) => {
    const rooms = roomSelections[hotelIndex] || []
    if (rooms.length < 10) {
      setRoomSelections(prev => ({
        ...prev,
        [hotelIndex]: [
          ...(prev[hotelIndex] || []),
          {
            roomId: Date.now(),
            roomType: 'double',
            adults: 1,
            children: 0,
            children2: 0
          }
        ]
      }))
    }
  }

  // Remove a room
  const removeRoom = (hotelIndex, roomId) => {
    setRoomSelections(prev => ({
      ...prev,
      [hotelIndex]: (prev[hotelIndex] || []).filter(room => room.roomId !== roomId)
    }))
  }

  // Update a specific room's selection
  const updateRoomSelection = (hotelIndex, roomId, field, value) => {
    setRoomSelections(prev => ({
      ...prev,
      [hotelIndex]: (prev[hotelIndex] || []).map(room => 
        room.roomId === roomId ? { ...room, [field]: value } : room
      )
    }))
  }

  const updateHotelSelection = (hotelIndex, field, value) => {
    setHotelSelections(prev => ({
      ...prev,
      [hotelIndex]: {
        ...prev[hotelIndex],
        roomType: prev[hotelIndex]?.roomType || 'double',
        adults: prev[hotelIndex]?.adults || 1,
        children: prev[hotelIndex]?.children || 0,
        children2: prev[hotelIndex]?.children2 || 0,
        [field]: value
      }
    }))
  }

  // Initialize rooms when hotels are loaded
  useEffect(() => {
    if (pkg && pkg.details && pkg.details.hotels) {
      pkg.details.hotels.forEach((hotel, index) => {
        if (!roomSelections[index] || roomSelections[index].length === 0) {
          initializeRooms(index)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pkg])

  const heroImage = gallery[0] || '/images/destinations/athens-hero.webp' || '/images/destinations/greece-hero.webp'

  return (
    <div className="package-full-page">
      <div 
        className="package-full-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="package-full-hero-overlay" />
        <div className="package-full-hero-content">
          <span className="badge destination">{pkg.destination}</span>
          <span className="badge category">{pkg.category}</span>
          {pkg.featured && <span className="badge featured">⭐ Featured</span>}
          <h1>{pkg.title}</h1>
          <div className="hero-meta">
            <span>⏱️ {pkg.duration}</span>
            <span>From €{pkg.price.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="package-full-container">
        <Link to={`/packages/${pkg.id}`} className="back-link">← Back to overview</Link>

        <div className="layout-grid">
          <main className="layout-main">
            {/* Tabs */}
            <div className="full-tabs">
              <button
                className={`full-tab ${activeTab === 'price' ? 'active' : ''}`}
                onClick={() => setActiveTab('price')}
              >
                Price
              </button>
              <button
                className={`full-tab ${activeTab === 'program' ? 'active' : ''}`}
                onClick={() => setActiveTab('program')}
              >
                Program
              </button>
              <button
                className={`full-tab ${activeTab === 'details' ? 'active' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                Package Details
              </button>
              <button
                className={`full-tab ${activeTab === 'photos' ? 'active' : ''}`}
                onClick={() => setActiveTab('photos')}
              >
                Photos
              </button>
            </div>

            {/* PRICE TAB */}
            {activeTab === 'price' && (
              <section className="full-section">
                <h2>Prices & Accommodation</h2>
                <div className="price-header">
                  <div className="price-thumb">
                    {(details.coverImage || gallery[0]) ? (
                      <div
                        className="price-thumb-image"
                        style={{ backgroundImage: `url(${details.coverImage || gallery[0]})` }}
                      />
                    ) : (
                      <span className="price-thumb-placeholder">{pkg.image}</span>
                    )}
                  </div>
                  <div className="price-intro">
                    <p className="section-text">
                      {pkg.longDescription || pkg.description}
                    </p>
                  </div>
                </div>

                {details.hotels && details.hotels.length > 0 ? (
                  <div className="hotels-grid">
                    {(() => {
                      // Group hotels by name
                      const groupedHotels = {}
                      details.hotels.forEach((hotel, idx) => {
                        if (!groupedHotels[hotel.name]) {
                          groupedHotels[hotel.name] = []
                        }
                        groupedHotels[hotel.name].push({ ...hotel, originalIndex: idx })
                      })

                      // Render one card per unique hotel
                      return Object.entries(groupedHotels).map(([hotelName, hotelVariants], groupIndex) => {
                        // Use the first variant for common properties (image, stars, roomType)
                        const baseHotel = hotelVariants[0]
                        // Create a unique key for this hotel group
                        const hotelKey = `hotel-${groupIndex}`
                        const currentSelection = hotelSelections[hotelKey] || { 
                          roomType: 'double', 
                          adults: 1, 
                          children: 0, 
                          children2: 0,
                          selectedDateIndex: 0 // Index of selected departure date
                        }
                        
                        // Get the currently selected hotel variant based on date selection
                        const selectedHotel = hotelVariants[currentSelection.selectedDateIndex] || hotelVariants[0]
                        const totalPrice = calculateRoomPrice(selectedHotel, currentSelection)
                        
                        return (
                          <div key={hotelKey} className="hotel-card-vertical">
                            {/* Hotel Image */}
                            <div className="hotel-image-top">
                              {baseHotel.image ? (
                                <div 
                                  className="hotel-image-bg"
                                  style={{ backgroundImage: `url(${baseHotel.image})` }}
                                />
                              ) : (
                                <div className="hotel-image-placeholder">
                                  <span className="image-text">INSERT IMAGE HERE</span>
                                </div>
                              )}
                              <div className="hotel-stars-overlay">
                                {'★'.repeat(baseHotel.stars || 3)}
                                {'☆'.repeat(5 - (baseHotel.stars || 3))}
                              </div>
                            </div>

                            {/* Hotel Content */}
                            <div className="hotel-content-vertical">
                              {/* Hotel Name & Location */}
                              <div className="hotel-header-vertical">
                                <h3 className="hotel-name-vertical">{baseHotel.name}</h3>
                                {baseHotel.location && (
                                  <p className="hotel-location-vertical">{baseHotel.location}</p>
                                )}
                              </div>

                              {/* Room Type & Board Basis */}
                              <div className="hotel-details-vertical">
                                <div className="detail-item">
                                  <span className="detail-icon">🛏️</span>
                                  <span><strong>{baseHotel.roomType || 'Standard Room'}</strong></span>
                                </div>
                                {baseHotel.boardBasis && (
                                  <div className="detail-item">
                                    <span className="detail-icon">🍽️</span>
                                    <span>{baseHotel.boardBasis}</span>
                                  </div>
                                )}
                              </div>

                              {/* Room Type Selection */}
                              <div className="room-type-section-vertical">
                                <label className="section-label">Room Type:</label>
                                <div className="room-type-options-vertical">
                                  {selectedHotel.prices.double && selectedHotel.prices.double > 0 && (
                                    <button
                                      type="button"
                                      className={`room-type-option-btn ${currentSelection.roomType === 'double' ? 'active' : ''}`}
                                      onClick={() => {
                                        updateHotelSelection(hotelKey, 'roomType', 'double')
                                      }}
                                    >
                                      <span className="room-type-name">Double</span>
                                      <span className="room-type-price">€{selectedHotel.prices.double}/person</span>
                                    </button>
                                  )}
                                  {selectedHotel.prices.single && selectedHotel.prices.single > 0 && (
                                    <button
                                      type="button"
                                      className={`room-type-option-btn ${currentSelection.roomType === 'single' ? 'active' : ''}`}
                                      onClick={() => {
                                        updateHotelSelection(hotelKey, 'roomType', 'single')
                                      }}
                                    >
                                      <span className="room-type-name">Single</span>
                                      <span className="room-type-price">€{selectedHotel.prices.single}/person</span>
                                    </button>
                                  )}
                                  {selectedHotel.prices.triple && selectedHotel.prices.triple > 0 && (
                                    <button
                                      type="button"
                                      className={`room-type-option-btn ${currentSelection.roomType === 'triple' ? 'active' : ''}`}
                                      onClick={() => {
                                        updateHotelSelection(hotelKey, 'roomType', 'triple')
                                      }}
                                    >
                                      <span className="room-type-name">Triple</span>
                                      <span className="room-type-price">€{selectedHotel.prices.triple}/person</span>
                                    </button>
                                  )}
                                </div>
                              </div>

                              {/* Departure Dates */}
                              <div className="departure-section-vertical">
                                <label className="section-label">Ημερομηνία αναχώρησης (Departure date):</label>
                                <div className="departure-dates-vertical">
                                  {hotelVariants.map((variant, dateIdx) => (
                                    <label
                                      key={dateIdx}
                                      className={`departure-radio-vertical ${currentSelection.selectedDateIndex === dateIdx ? 'active' : ''}`}
                                    >
                                      <input
                                        type="radio"
                                        name={`departure-${hotelKey}`}
                                        checked={currentSelection.selectedDateIndex === dateIdx}
                                        onChange={() => {
                                          updateHotelSelection(hotelKey, 'selectedDateIndex', dateIdx)
                                        }}
                                        className="departure-radio-input"
                                      />
                                      <span>{variant.departureDate}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>

                              {/* Guest Selection */}
                              <div className="guest-section-vertical">
                                <label className="section-label">Δωμάτιο 1 +</label>
                                <div className="guest-selector-vertical">
                                  <span className="guest-type">Adults:</span>
                                  <div className="guest-controls-vertical">
                                    <button 
                                      type="button"
                                      className="guest-btn-vertical"
                                      onClick={() => {
                                        if (currentSelection.adults > 1) updateHotelSelection(hotelKey, 'adults', currentSelection.adults - 1)
                                      }}
                                      disabled={currentSelection.adults <= 1}
                                      aria-label="Decrease adults"
                                    >−</button>
                                    <span className="guest-count-vertical">{currentSelection.adults}</span>
                                    <button 
                                      type="button"
                                      className="guest-btn-vertical"
                                      onClick={() => {
                                        if (currentSelection.adults < 8) updateHotelSelection(hotelKey, 'adults', currentSelection.adults + 1)
                                      }}
                                    >+</button>
                                  </div>
                                </div>
                              </div>

                              {/* Total Price */}
                              <div className="total-section-vertical">
                                <div className="total-price-vertical">
                                  <span className="total-label">{currentSelection.adults} Adults:</span>
                                  <span className="total-amount">€{totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                              </div>

                              {/* Reserve Button */}
                              <button
                                className="reserve-button-vertical"
                                onClick={() => {
                                  setReserveFormData({
                                    name: '',
                                    email: '',
                                    phone: '',
                                    hotelKey: hotelKey,
                                    hotelName: baseHotel.name,
                                    departureDate: selectedHotel.departureDate,
                                    roomType: currentSelection.roomType,
                                    adults: currentSelection.adults,
                                    children: currentSelection.children,
                                    children2: currentSelection.children2,
                                    totalPrice: totalPrice,
                                    selectedHotel: selectedHotel
                                  })
                                  setShowReserveModal(true)
                                }}
                              >
                                Reserve Now
                              </button>
                            </div>
                          </div>
                        )
                      })
                    })()}
                  </div>
                ) : (
                  <p className="section-text muted">
                    Add room types and rates for this package in the data file.
                  </p>
                )}
              </section>
            )}

            {/* PROGRAM TAB */}
            {activeTab === 'program' && (
              <section className="full-section">
                <h2>Program</h2>
                {details.note && (
                  <div style={{ 
                    padding: '1rem 1.25rem', 
                    marginBottom: '2rem', 
                    background: '#fef3c7', 
                    borderLeft: '4px solid #f59e0b', 
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    color: '#92400e',
                    lineHeight: '1.6'
                  }}>
                    <strong>ℹ️ Σημείωση:</strong> {details.note}
                  </div>
                )}
                
                {details.itinerary && details.itinerary.length > 0 ? (
                  <div className="program-content">
                    <ol className="itinerary-list">
                      {details.itinerary.map((day, index) => (
                        <li key={index} className="itinerary-item">
                          <div className="itinerary-header">
                            <span className="itinerary-day">{day.day}</span>
                            <h3 className="itinerary-title">{day.title}</h3>
                          </div>
                          <p className="itinerary-description">{day.description}</p>
                          {day.image && (
                            <div 
                              className="itinerary-image"
                              style={{ backgroundImage: `url(${day.image})` }}
                            >
                              <div className="itinerary-image-overlay"></div>
                            </div>
                          )}
                        </li>
                      ))}
                    </ol>
                    {details.program && details.program.optional && (
                      <div className="program-section optional-section">
                        <h3>Προαιρετικό</h3>
                        <p className="section-text">{details.program.optional}</p>
                      </div>
                    )}
                  </div>
                ) : details.program ? (
                  <div className="program-content">
                    {details.program.introduction && (() => {
                      const introText = details.program.introduction
                      // Split by double newlines to create paragraphs
                      const paragraphs = introText.split(/\n\n+/).filter(p => p.trim())
                      // Check if first paragraph is a title (contains dashes and is short)
                      const firstPara = paragraphs[0]?.trim()
                      const isTitle = firstPara && firstPara.length < 100 && (firstPara.includes('–') || firstPara.includes('-'))
                      
                      return (
                        <div className="program-section program-section-styled">
                          {isTitle && (
                            <h3 className="program-heading">{firstPara}</h3>
                          )}
                          <div className="program-text">
                            {isTitle ? (
                              // Render remaining paragraphs
                              paragraphs.slice(1).map((para, idx) => (
                                <p key={idx} className="section-text">{para.trim()}</p>
                              ))
                            ) : (
                              // Render all paragraphs
                              paragraphs.map((para, idx) => (
                                <p key={idx} className="section-text">{para.trim()}</p>
                              ))
                            )}
                          </div>
                        </div>
                      )
                    })()}
                    {details.program.heraklionCity && (
                      <div className="program-section program-section-styled">
                        <h3 className="program-heading">Ηράκλειο: πόλη θαλασσινή, γεμάτη ζωή και ιστορία</h3>
                        <div className="program-text">
                          {formatProgramText(details.program.heraklionCity).map((para, idx) => (
                            <p key={idx} className="section-text">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {details.program.venetians && (
                      <div className="program-section program-section-styled">
                        <h3 className="program-heading">Οι Ενετοί στον μόλο</h3>
                        <div className="program-text">
                          {formatProgramText(details.program.venetians).map((para, idx) => (
                            <p key={idx} className="section-text">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {details.program.walls && (
                      <div className="program-section program-section-styled">
                        <h3 className="program-heading">Τα τείχη της παλιάς πόλης: μεταίχμιο του σήμερα και του χθες</h3>
                        <div className="program-text">
                          {formatProgramText(details.program.walls).map((para, idx) => (
                            <p key={idx} className="section-text">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {details.program.knossos && (
                      <div className="program-section program-section-styled">
                        <h3 className="program-heading">Η «μυθική» Κνωσός</h3>
                        <div className="program-text">
                          {formatProgramText(details.program.knossos).map((para, idx) => (
                            <p key={idx} className="section-text">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {details.program.museum && (
                      <div className="program-section program-section-styled">
                        <h3 className="program-heading">Αρχαιολογικό Μουσείο Ηρακλείου: «πανόραμα» Μινωικής Κρήτης</h3>
                        <div className="program-text">
                          {formatProgramText(details.program.museum).map((para, idx) => (
                            <p key={idx} className="section-text">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {details.program.cretaquarium && (
                      <div className="program-section program-section-styled">
                        <h3 className="program-heading">Cretaquarium: υδάτινη κιβωτός της Μεσογείου</h3>
                        <div className="program-text">
                          {formatProgramText(details.program.cretaquarium).map((para, idx) => (
                            <p key={idx} className="section-text">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {details.program.food && (
                      <div className="program-section program-section-styled">
                        <h3 className="program-heading">Πανδαισία γεύσεων και απολαύσεων</h3>
                        <div className="program-text">
                          {formatProgramText(details.program.food).map((para, idx) => (
                            <p key={idx} className="section-text">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {details.program.accommodation && (
                      <div className="program-section program-section-styled">
                        <h3 className="program-heading">Αναρίθμητες επιλογές διαμονής</h3>
                        <div className="program-text">
                          {formatProgramText(details.program.accommodation).map((para, idx) => (
                            <p key={idx} className="section-text">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {details.program.beaches && (
                      <div className="program-section program-section-styled">
                        <h3 className="program-heading">Παραλίες με χαρακτήρα και ομορφιά</h3>
                        <div className="program-text">
                          {formatProgramText(details.program.beaches).map((para, idx) => (
                            <p key={idx} className="section-text">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {details.program.naturalHistory && (
                      <div className="program-section program-section-styled">
                        <h3 className="program-heading">Το Μουσείο Φυσικής Ιστορίας: πλούσιο, δραστήριο, διασκεδαστικό</h3>
                        <div className="program-text">
                          {formatProgramText(details.program.naturalHistory).map((para, idx) => (
                            <p key={idx} className="section-text">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {details.program.historicalMuseum && (
                      <div className="program-section program-section-styled">
                        <h3 className="program-heading">Ιστορικό Μουσείο Κρήτης: η Κρήτη της ιστορίας</h3>
                        <div className="program-text">
                          {formatProgramText(details.program.historicalMuseum).map((para, idx) => (
                            <p key={idx} className="section-text">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {details.program.cityCenter && (
                      <div className="program-section program-section-styled">
                        <h3 className="program-heading">Στην καρδιά της πόλης</h3>
                        <div className="program-text">
                          {formatProgramText(details.program.cityCenter).map((para, idx) => (
                            <p key={idx} className="section-text">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {details.program.whatToSee && (() => {
                      const title = extractTitle(details.program.whatToSee)
                      const paragraphs = formatProgramText(details.program.whatToSee)
                      const contentParas = title ? paragraphs.slice(1) : paragraphs
                      return (
                        <div className="program-section program-section-styled">
                          {title && <h3 className="program-heading">{title}</h3>}
                          <div className="program-text">
                            {contentParas.map((para, idx) => (
                              <p key={idx} className="section-text">{para}</p>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                    {details.program.entertainment && (() => {
                      const title = extractTitle(details.program.entertainment)
                      const paragraphs = formatProgramText(details.program.entertainment)
                      const contentParas = title ? paragraphs.slice(1) : paragraphs
                      return (
                        <div className="program-section program-section-styled">
                          {title && <h3 className="program-heading">{title}</h3>}
                          <div className="program-text">
                            {contentParas.map((para, idx) => (
                              <p key={idx} className="section-text">{para}</p>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                    {details.program.day1 && (() => {
                      const title = extractTitle(details.program.day1)
                      const paragraphs = formatProgramText(details.program.day1)
                      const contentParas = title ? paragraphs.slice(1) : paragraphs
                      return (
                        <div className="program-section program-section-styled">
                          {title && <h3 className="program-heading">{title}</h3>}
                          <div className="program-text">
                            {contentParas.map((para, idx) => (
                              <p key={idx} className="section-text">{para}</p>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                    {details.program.day2 && (() => {
                      const title = extractTitle(details.program.day2)
                      const paragraphs = formatProgramText(details.program.day2)
                      const contentParas = title ? paragraphs.slice(1) : paragraphs
                      return (
                        <div className="program-section program-section-styled">
                          {title && <h3 className="program-heading">{title}</h3>}
                          <div className="program-text">
                            {contentParas.map((para, idx) => (
                              <p key={idx} className="section-text">{para}</p>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                    {details.program.day3 && (() => {
                      const title = extractTitle(details.program.day3)
                      const paragraphs = formatProgramText(details.program.day3)
                      const contentParas = title ? paragraphs.slice(1) : paragraphs
                      return (
                        <div className="program-section program-section-styled">
                          {title && <h3 className="program-heading">{title}</h3>}
                          <div className="program-text">
                            {contentParas.map((para, idx) => (
                              <p key={idx} className="section-text">{para}</p>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                    {details.program.day4 && (() => {
                      const title = extractTitle(details.program.day4)
                      const paragraphs = formatProgramText(details.program.day4)
                      const contentParas = title ? paragraphs.slice(1) : paragraphs
                      return (
                        <div className="program-section program-section-styled">
                          {title && <h3 className="program-heading">{title}</h3>}
                          <div className="program-text">
                            {contentParas.map((para, idx) => (
                              <p key={idx} className="section-text">{para}</p>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                    {details.program.day5 && (() => {
                      const title = extractTitle(details.program.day5)
                      const paragraphs = formatProgramText(details.program.day5)
                      const contentParas = title ? paragraphs.slice(1) : paragraphs
                      return (
                        <div className="program-section program-section-styled">
                          {title && <h3 className="program-heading">{title}</h3>}
                          <div className="program-text">
                            {contentParas.map((para, idx) => (
                              <p key={idx} className="section-text">{para}</p>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                    {details.program.day6 && (() => {
                      const title = extractTitle(details.program.day6)
                      const paragraphs = formatProgramText(details.program.day6)
                      const contentParas = title ? paragraphs.slice(1) : paragraphs
                      return (
                        <div className="program-section program-section-styled">
                          {title && <h3 className="program-heading">{title}</h3>}
                          <div className="program-text">
                            {contentParas.map((para, idx) => (
                              <p key={idx} className="section-text">{para}</p>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                  </div>
                ) : (
                  <p className="section-text muted">
                    Program information will be available here.
                  </p>
                )}
              </section>
            )}

            {/* PACKAGE DETAILS TAB */}
            {activeTab === 'details' && (
              <section className="full-section">
                <h2>Package Details</h2>

                {/* What's Included */}
                <div className="details-section">
                  <h3 className="details-section-title">
                    <span className="icon-badge included">✓</span>
                    What's Included
                  </h3>
                  {details.included && details.included.length > 0 ? (
                    <ul className="icon-list included-list">
                      {details.included.map((item, index) => (
                        <li key={index}>
                          <span className="icon">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="section-text muted">
                      Add all services that are included in this package (flights, hotel, transfers, etc.).
                    </p>
                  )}
                </div>

                {/* What's Not Included */}
                <div className="details-section">
                  <h3 className="details-section-title">
                    <span className="icon-badge not-included">✕</span>
                    What's Not Included
                  </h3>
                  {details.notIncluded && details.notIncluded.length > 0 ? (
                    <ul className="icon-list not-included-list">
                      {details.notIncluded.map((item, index) => (
                        <li key={index}>
                          <span className="icon">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="section-text muted">
                      Add here what is not included (city tax, meals, insurance, optional excursions, etc.).
                    </p>
                  )}
                </div>

                {/* Flights */}
                {details.flights && details.flights.length > 0 && (
                  <div className="details-section">
                    <h3 className="details-section-title">
                      <span className="icon-badge flights">✈️</span>
                      Flights — Sky Express
                    </h3>
                    <div className="flights-container">
                      {details.flights.map((flight, index) => (
                        <div key={index} className="flight-card">
                          <div className="flight-header">
                            <span className="flight-direction">
                              {flight.direction === 'Departure' ? '🛫 Departure' : '🛬 Return'}
                            </span>
                          </div>
                          <div className="flight-details">
                            <div className="flight-route">
                              <strong>{flight.route || `${flight.direction}`}</strong>
                            </div>
                            <div className="flight-info">
                              <div className="flight-info-row">
                                <span className="flight-label">Flight:</span>
                                <span className="flight-value">{flight.flight}</span>
                              </div>
                              <div className="flight-info-row">
                                <span className="flight-label">Time:</span>
                                <span className="flight-value">{flight.time}</span>
                              </div>
                              <div className="flight-info-row">
                                <span className="flight-label">Luggage:</span>
                                <span className="flight-value">{flight.luggage}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Terms & Conditions */}
                {details.termsAndConditions && details.termsAndConditions.length > 0 && (
                  <div className="details-section">
                    <h3 className="details-section-title">
                      <span className="icon-badge terms">📌</span>
                      Terms & Conditions
                    </h3>
                    <ul className="terms-list">
                      {details.termsAndConditions.map((term, index) => (
                        <li key={index} className="section-text">{term}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Cancellation Policy */}
                <div className="details-section">
                  <h3 className="details-section-title">
                    <span className="icon-badge cancellation">⚠️</span>
                    Cancellation Policy
                  </h3>
                  {details.cancellationPolicy ? (
                    <div className="cancellation-policy">
                      <p className="section-text">{details.cancellationPolicy}</p>
                    </div>
                  ) : (
                    <p className="section-text muted">
                      Add the cancellation policy here (deadlines, fees, and special conditions).
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* PHOTOS TAB */}
            {activeTab === 'photos' && (
              <section className="full-section">
                <h2>Photos</h2>
                {gallery.length > 0 ? (
                  <div className="gallery-grid">
                    {gallery.map((src, index) => (
                      <div
                        key={index}
                        className="gallery-item"
                        style={{ backgroundImage: `url(${src})` }}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="section-text muted">
                    Add a set of landscape images for this tour in the gallery field.
                  </p>
                )}
              </section>
            )}

            {/* Related tours */}
            {relatedTours.length > 0 && (
              <section className="full-section related-section">
                <h2>Related Tours</h2>
                <div className="related-grid">
                      {relatedTours.map((tour) => (
                        <Link key={tour.id} to={`/packages/${tour.id}`} className="related-card">
                          <div className="related-header">
                            <span className="related-destination">{tour.destination}</span>
                            <span className="related-price">From €{tour.cheapestPrice.toLocaleString()}</span>
                          </div>
                          <h3>{tour.title}</h3>
                          <p>{tour.duration}</p>
                        </Link>
                      ))}
                </div>
              </section>
            )}

            {/* Mobile-only sidebar cards at the end */}
            <div className="summary-card mobile-sidebar-card">
              <h3>Summary</h3>
              <p className="summary-price">From €{pkg.price.toLocaleString()}</p>
              <p className="summary-duration">{pkg.duration}</p>
              <p className="summary-destination">{pkg.destination}</p>
              <button className="book-button full-book-button">Book this package</button>
            </div>

            <div className="enquiry-card mobile-sidebar-card">
              <h3>Enquire about this tour</h3>
              <form
                className="enquiry-form"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Thank you! We will contact you about this tour.')
                }}
              >
                <label>
                  Name
                  <input type="text" required />
                </label>
                <label>
                  Email
                  <input type="email" required />
                </label>
                <label>
                  Phone
                  <input type="tel" />
                </label>
                <label>
                  Message
                  <textarea rows="3" placeholder="Tell us your preferred dates, travellers, hotel category..." />
                </label>
                <button type="submit" className="enquiry-submit-btn">
                  Send enquiry
                </button>
              </form>
            </div>

            <div className="why-card mobile-sidebar-card">
              <h3>Why book with us</h3>
              <ul>
                <li>Local Cyprus travel experts</li>
                <li>Tailor‑made packages for every budget</li>
                <li>Support before, during & after your trip</li>
              </ul>
            </div>

            <div className="contact-card mobile-sidebar-card">
              <h3>Need help?</h3>
              <p className="contact-phone">📞 +357 77771234</p>
              <p className="contact-email">✉️ info@honeywelltravel.com</p>
            </div>
          </main>

          <aside className="layout-aside">
            <div className="summary-card">
              <h3>Summary</h3>
              <p className="summary-price">From €{pkg.price.toLocaleString()}</p>
              <p className="summary-duration">{pkg.duration}</p>
              <p className="summary-destination">{pkg.destination}</p>
              <button className="book-button full-book-button">Book this package</button>
            </div>

            <div className="enquiry-card">
              <h3>Enquire about this tour</h3>
              <form
                className="enquiry-form"
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target)
                  const name = formData.get('name')
                  const email = formData.get('email')
                  const phone = formData.get('phone') || 'Not provided'
                  const message = formData.get('message') || 'No message provided'
                  
                  const emailBody = `ENQUIRY ABOUT TOUR

Package: ${pkg.title}
Destination: ${pkg.destination}

Contact Information:
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
This enquiry was submitted through the Honeywell Travel website.`.trim()

                  const mailtoLink = `mailto:limassol@honeywelltravel.com.cy?subject=${encodeURIComponent(`Enquiry - ${pkg.title}`)}&body=${encodeURIComponent(emailBody)}`
                  window.location.href = mailtoLink
                  
                  alert('Thank you! We will contact you about this tour.')
                  e.target.reset()
                }}
              >
                <label>
                  Name
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" required />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" />
                </label>
                <label>
                  Message
                  <textarea name="message" rows="3" placeholder="Tell us your preferred dates, travellers, hotel category..." />
                </label>
                <button type="submit" className="enquiry-submit-btn">
                  Send enquiry
                </button>
              </form>
            </div>

            <div className="why-card">
              <h3>Why book with us</h3>
              <ul>
                <li>Local Cyprus travel experts</li>
                <li>Tailor‑made packages for every budget</li>
                <li>Support before, during & after your trip</li>
              </ul>
            </div>

            <div className="contact-card">
              <h3>Need help?</h3>
              <p className="contact-phone">📞 +357 77771234</p>
              <p className="contact-email">✉️ info@honeywelltravel.com</p>
            </div>
          </aside>
        </div>
      </div>

      {/* Reserve Now Modal */}
      {showReserveModal && reserveFormData.hotelKey && (
        <div className="reserve-modal-overlay" onClick={() => setShowReserveModal(false)}>
          <div className="reserve-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowReserveModal(false)}>×</button>
            
            <div className="modal-header">
              <h2>Reservation Request</h2>
              <p className="modal-subtitle">Please provide your contact information to complete your reservation</p>
            </div>

            {(() => {
              const selectedHotel = reserveFormData.selectedHotel
              const selection = {
                roomType: reserveFormData.roomType || 'double',
                adults: reserveFormData.adults || 1,
                children: reserveFormData.children || 0,
                children2: reserveFormData.children2 || 0
              }
              const totalPrice = reserveFormData.totalPrice || 0
              
              return (
                <>
                  <div className="reservation-summary">
                    <h3 className="summary-title">Your Selection</h3>
                    <div className="summary-content">
                      <div className="summary-item">
                        <span className="summary-label">Package</span>
                        <span className="summary-value">{pkg.title}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Hotel</span>
                        <span className="summary-value">{reserveFormData.hotelName}</span>
                      </div>
                      {reserveFormData.departureDate && (
                        <div className="summary-item">
                          <span className="summary-label">Departure Date</span>
                          <span className="summary-value">{reserveFormData.departureDate}</span>
                        </div>
                      )}
                      <div className="summary-item">
                        <span className="summary-label">Room Type</span>
                        <span className="summary-value">
                          {selection.roomType.charAt(0).toUpperCase() + selection.roomType.slice(1)}
                          {selectedHotel && selectedHotel.prices && selectedHotel.prices[selection.roomType] && (
                            <span style={{ fontSize: '0.85rem', color: '#6b7280', marginLeft: '0.5rem', fontWeight: '400' }}>
                              (€{selectedHotel.prices[selection.roomType]}/person)
                            </span>
                          )}
                        </span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Guests</span>
                        <span className="summary-value">
                          {selection.adults} Adult{selection.adults !== 1 ? 's' : ''}
                          {selection.children > 0 && `, ${selection.children} Child${selection.children !== 1 ? 'ren' : ''} (Child 1)`}
                          {selection.children2 > 0 && `, ${selection.children2} Child${selection.children2 !== 1 ? 'ren' : ''} (Child 2)`}
                        </span>
                      </div>
                      <div className="summary-item summary-total">
                        <span className="summary-label">Total Price</span>
                        <span className="summary-value">€{totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <form 
                    className="reserve-form"
                    onSubmit={(e) => {
                      e.preventDefault()
                      const emailBody = `
RESERVATION REQUEST

Package: ${pkg.title}
Hotel: ${reserveFormData.hotelName}
${reserveFormData.departureDate ? `Departure Date: ${reserveFormData.departureDate}\n` : ''}Room Type: ${selection.roomType.charAt(0).toUpperCase() + selection.roomType.slice(1)}
Guests: ${selection.adults} Adult${selection.adults !== 1 ? 's' : ''}${selection.children > 0 ? `, ${selection.children} Child${selection.children !== 1 ? 'ren' : ''} (Child 1)` : ''}${selection.children2 > 0 ? `, ${selection.children2} Child${selection.children2 !== 1 ? 'ren' : ''} (Child 2)` : ''}
Total Price: €${totalPrice.toLocaleString()}

Contact Information:
Name: ${reserveFormData.name || 'Not provided'}
Email: ${reserveFormData.email}
Phone: ${reserveFormData.phone}

---
This reservation request was submitted through the Honeywell Travel website.
                      `.trim()

                      const mailtoLink = `mailto:limassol@honeywelltravel.com.cy?subject=${encodeURIComponent(`Reservation Request - ${reserveFormData.hotelName}`)}&body=${encodeURIComponent(emailBody)}`
                      window.location.href = mailtoLink
                      
                      setShowReserveModal(false)
                      setReserveFormData({ name: '', email: '', phone: '', hotelKey: null, hotelName: '', departureDate: '', roomType: '', adults: 1, children: 0, children2: 0, totalPrice: 0, selectedHotel: null })
                    }}
                  >
                    <div className="form-group">
                      <label htmlFor="reserve-name">Full Name</label>
                      <input
                        type="text"
                        id="reserve-name"
                        required
                        value={reserveFormData.name || ''}
                        onChange={(e) => setReserveFormData({ ...reserveFormData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="reserve-phone">Contact Number</label>
                      <input
                        type="tel"
                        id="reserve-phone"
                        required
                        value={reserveFormData.phone}
                        onChange={(e) => setReserveFormData({ ...reserveFormData, phone: e.target.value })}
                        placeholder="+357 123456789"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="reserve-email">Email Address</label>
                      <input
                        type="email"
                        id="reserve-email"
                        required
                        value={reserveFormData.email}
                        onChange={(e) => setReserveFormData({ ...reserveFormData, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <button type="submit" className="submit-reservation-btn">
                      Send Reservation Request
                    </button>
                  </form>
                </>
              )
            })()}
          </div>
        </div>
      )}
    </div>
  )
}

export default PackageFullDetail

