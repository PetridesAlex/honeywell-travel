import { useState } from 'react'
import './OurWorld.css'

function OurWorld() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const teamMembers = [
    { 
      id: 1, 
      name: 'Mary Spyrou', 
      role: 'Executive Director',
      quote: '"Wherever you go, you go with all your heart"',
      image: '/images/team/mary-spyrou.png'
    },
    { 
      id: 2, 
      name: 'Vaso Photiou', 
      role: 'Office Supervisor',
      quote: '"Traveling means exchanging and discovering experiences"',
      image: '/images/team/vaso-photiou.png'
    },
    { 
      id: 3, 
      name: 'Anna Roupina', 
      role: 'Travel Consultant',
      quote: '"Travel is the only thing you buy that makes you richer"',
      image: '/images/team/anna-roupina.png'
    },
    { 
      id: 4, 
      name: 'Evi Panayiotou', 
      role: 'Office Supervisor (Nicosia)',
      quote: '"Travelling means to me continuous learning and experience."',
      image: '/images/team/evi-panayiotou.png'
    },
    { 
      id: 5, 
      name: 'Charis Kapnisi', 
      role: 'Account Officer',
      quote: '"Traveling is about escaping, having fun and enjoy life."',
      image: '/images/team/charis-kapnisi.png'
    },
    { 
      id: 6, 
      name: 'Valentina Avraam', 
      role: 'Travel Consultant',
      quote: '"Don\'t spend your money on things. Spend it on experiences!"',
      image: '/images/team/valentina-avraam.png'
    }
  ]

  const blogPosts = [
    { id: 1, title: 'Blog Post 1', date: '2024-01-15', image: '/images/blog/post1.webp' },
    { id: 2, title: 'Blog Post 2', date: '2024-01-10', image: '/images/blog/post2.webp' },
    { id: 3, title: 'Blog Post 3', date: '2024-01-05', image: '/images/blog/post3.webp' }
  ]

  const travelImages = [
    '/images/travel/travel1.webp',
    '/images/travel/travel2.webp',
    '/images/travel/travel3.webp',
    '/images/travel/travel4.webp',
    '/images/travel/travel5.webp'
  ]

  return (
    <div className="our-world-page">
      {/* Hero Section */}
      <section className="section-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Our World</h1>
          <p className="hero-subtitle">Discovering the world, one journey at a time</p>
        </div>
        <button
          type="button"
          className="hero-scroll-btn"
          onClick={() => {
            document.getElementById('our-world-content')?.scrollIntoView({ behavior: 'smooth' })
          }}
          aria-label="Scroll down to content"
        >
          <span className="hero-scroll-btn-text">Scroll to explore</span>
          <span className="hero-scroll-btn-arrow" aria-hidden>↓</span>
        </button>
      </section>

      {/* Introduction Section */}
      <section id="our-world-content" className="section-introduction">
        <div className="container">
          <div className="introduction-content">
            <div className="introduction-text">
              <h2 className="section-heading">
                {['Discover', 'Our', 'World'].map((word, index) => (
                  <span key={index} className="heading-word" style={{ animationDelay: `${index * 0.2}s` }}>
                    {word}
                    {index < 2 && <span> </span>}
                  </span>
                ))}
              </h2>
              <div className="content-placeholder">
                <p>Here at Honeywell Travel, we are real people in a real workplace ready to offer you the best travel services.</p>
                
                <p>We believe in authenticity, and we create experiences that excite you, challenge you and inspire you. We aspire to connect you with the world and make memories that will stay with you for life.</p>
                
                <p>Our team of travel experts are people who share the same passion – a passion for traveling and discovering beautiful corners of the world. We are all traveling souls! We love exploring new destinations, living new experiences and sharing them with you all.</p>
                
                <p>We strive to find the heart of every city and location, to find out what makes each place so special so that we can offer you the very best that every country has to offer.</p>
                
                <p>With plenty of personal experience, the help of state of art technology, and with the advice of our trusted partners in various destinations, we provide you with the best travel recommendations tailored to your taste and preferences!</p>
                
                <p>When it comes to business travel, we give our corporate clients a chance to concentrate on their own fields of expertise only, by offering them our own know-how on how to arrange sensible and cost efficient travel as well as comprehensive travel management.</p>
                
                <p>We contribute to our client's traveler's success by putting everything they need at their fingertips and providing recommendations to help them navigate unfamiliar locations.</p>
                
                <p>For meetings and events, it means delivering the perfect event so attendees have an enhanced experience and your company sees better return investment.</p>
                
                <p>We believe that every trip should be as unique as you are, and therefore we have made it our main aim to provide you with an unforgettable, hassle-free, awe-inspiring and once-in-a-lifetime experience! And we always do this with a smile. 😊</p>
              </div>
            </div>
            <div className="introduction-image">
              <img
                src="/images/our-world-people.png"
                alt="Honeywell Travel team"
                className="introduction-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-awards">
        <div className="container">
          <h2 className="section-heading">Awards & Recognition</h2>
          <div className="awards-grid">
            <div className="award-card">
              <div className="award-icon">🏆</div>
              <h3>Best Travel Management</h3>
              <p>Recognized for excellence in travel management services</p>
              <span className="award-year">2020</span>
            </div>
            <div className="award-card">
              <div className="award-icon">⭐</div>
              <h3>Best Travel Management</h3>
              <p>Recognized for excellence in travel management services</p>
              <span className="award-year">2021</span>
            </div>
            <div className="award-card">
              <div className="award-icon">🎖️</div>
              <h3>Best Travel Management</h3>
              <p>Recognized for excellence in travel management services</p>
              <span className="award-year">2022</span>
            </div>
            <div className="award-card">
              <div className="award-icon">🌟</div>
              <h3>Best Travel Management</h3>
              <p>Recognized for excellence in travel management services</p>
              <span className="award-year">2024</span>
            </div>
            <div className="award-card">
              <div className="award-icon">🏅</div>
              <h3>Best Travel Management</h3>
              <p>Recognized for excellence in travel management services</p>
              <span className="award-year">2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-video">
        <div className="container">
          <div className="video-wrapper">
            <div className="video-placeholder">
              <div className="play-button">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)"/>
                  <path d="M32 24L56 40L32 56V24Z" fill="#C41230"/>
                </svg>
              </div>
              <p className="video-placeholder-text">Video will be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="section-team">
        <div className="container">
          <h2 className="section-heading">Meet Our Team</h2>
          <p className="section-subtitle">The passionate people behind your perfect journey</p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="team-member-photo" />
                  ) : (
                    <div className="team-image-placeholder">Photo</div>
                  )}
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  {member.quote && (
                    <p className="team-quote">{member.quote}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Blog Section */}
      <section className="section-blog">
        <div className="container">
          <h2 className="section-heading">Travel Blog</h2>
          <p className="section-subtitle">Stories, tips, and inspiration from around the world</p>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <div className="blog-image-placeholder">Image</div>
                </div>
                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">Blog post excerpt will go here...</p>
                  <a href="#" className="blog-read-more">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* We Love Traveling Section - Image Slider */}
      <section className="section-gallery-traveling">
        <div className="container">
          <h2 className="section-heading">We Love Traveling</h2>
          <p className="section-subtitle">Capturing moments from our journeys around the globe</p>
          <div className="travel-slider">
            <div className="slider-container">
              <div 
                className="slider-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {travelImages.map((image, index) => (
                  <div key={index} className="slider-slide">
                    <div className="slide-image-placeholder">
                      Image {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="slider-controls">
              <button 
                className="slider-btn prev"
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? travelImages.length - 1 : prev - 1))}
                aria-label="Previous slide"
              >
                ←
              </button>
              <div className="slider-dots">
                {travelImages.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                className="slider-btn next"
                onClick={() => setCurrentSlide((prev) => (prev === travelImages.length - 1 ? 0 : prev + 1))}
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-contact-form">
        <div className="container">
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-subtitle">We'd love to hear from you</p>
          <form 
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const name = formData.get('name')
              const email = formData.get('email')
              const subject = formData.get('subject') || 'No subject'
              const message = formData.get('message')
              
              const emailBody = `CONTACT FORM - OUR WORLD PAGE

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was submitted through the Our World page contact form.`.trim()

              const mailtoLink = `mailto:limassol@honeywelltravel.com.cy?subject=${encodeURIComponent(`Our World Contact - ${subject}`)}&body=${encodeURIComponent(emailBody)}`
              window.location.href = mailtoLink
              
              alert('Thank you! Your message has been sent. We will get back to you soon.')
              e.target.reset()
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Name <span className="required">*</span></label>
                <input 
                  type="text" 
                  id="contact-name" 
                  name="name" 
                  required 
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email <span className="required">*</span></label>
                <input 
                  type="email" 
                  id="contact-email" 
                  name="email" 
                  required 
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input 
                type="text" 
                id="contact-subject" 
                name="subject" 
                className="form-input"
                placeholder="What is this regarding?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message <span className="required">*</span></label>
              <textarea 
                id="contact-message" 
                name="message" 
                rows="6" 
                required 
                className="form-input form-textarea"
                placeholder="Tell us what's on your mind..."
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default OurWorld
