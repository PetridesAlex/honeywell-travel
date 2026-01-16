import './Corporate.css'

function Corporate() {
  const services = [
    'Air tickets',
    'Accommodation',
    'Transfers and Transport',
    'Corporate account management',
    'Tours and Excursions',
    'Car Rental worldwide',
    'Group Travel',
    'Air tickets on low cost carriers',
    'Cruises',
    'Summer packages',
    'Conference and Incentive packages abroad',
    'Travel Insurance',
    'Special packages and/or entrance tickets (football match, concerts, theaters, Athens by night etc)'
  ]

  return (
    <div className="corporate-page">
      {/* Hero Section */}
      <section className="corporate-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>CORPORATE TRIPS</h1>
          <p>Professional Business Travel Management Solutions</p>
        </div>
      </section>

      {/* CWT Information Section */}
      <section className="cwt-section">
        <div className="container">
          <div className="cwt-content">
            <div className="cwt-text">
              <div className="cwt-logo">
                <h2>CWT</h2>
                <p className="cwt-subtitle">(Independently owned and operated by Honeywell Travel Asg - Ltd)</p>
              </div>
              <div className="cwt-description">
                <p>
                  Honeywell Travel is a leading travel agency in Cyprus, specializing in world-class business travel management. 
                  We are proud to be the official partner of <strong>CWT</strong>, a global leader in managing business travel and events 
                  across nearly 150 countries.
                </p>
                <p>
                  CWT focuses on four key pillars: <strong>Savings, Service, Security, and Sustainability</strong>. Through our partnership, 
                  we provide comprehensive travel management solutions that help businesses optimize their travel programs while ensuring 
                  the best possible experience for their employees.
                </p>
                <p>
                  Visit <a href="https://www.mycwt.com" target="_blank" rel="noopener noreferrer">www.myCWT.com</a> to learn more about 
                  CWT's global capabilities and services.
                </p>
                <p>
                  <strong>Honeywell Travel is the international partner representative of CWT Global Partner Network in Cyprus.</strong>
                </p>
              </div>
            </div>
            <div className="cwt-image">
              <div className="cwt-image-cover"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="container">
          <div className="what-we-do-content">
            <div className="what-we-do-image">
              <div className="image-placeholder">
                <span>👔</span>
                <p>Professional Service</p>
              </div>
            </div>
            <div className="what-we-do-text">
              <h2>WHAT WE DO</h2>
              <div className="what-we-do-description">
                <p>
                  Honeywell Travel is a professional, well-established and licensed IATA Travel Agency, offering top-level travel 
                  consulting and services through its partnerships and a network of travel experts and professionals around the world.
                </p>
                <p>
                  Since 1987, our company has been the official Partner of CWT, the biggest network of travel management companies worldwide. 
                  Our offices in Limassol and Nicosia are part of the A.S.G. (Andy Spyrou Group), providing comprehensive travel solutions 
                  to businesses across Cyprus.
                </p>
                <p>
                  Our corporate clientele comprises multinational and local companies from all industries: the marine, pharmaceutical, 
                  banking, educational and telecommunications sectors, as well as public organizations.
                </p>
                <p>
                  Our business travel management services go far beyond merely handling travel arrangements and taking care of transportation 
                  needs for our corporate clients. Our passionate, highly trained, dedicated team of travel consultants will ensure flawless 
                  conduction of all travel processes and requirements.
                </p>
              </div>
              <div className="services-list">
                <h3>Amongst others, our services include:</h3>
                <ul>
                  {services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="extra-services-section">
        <div className="container">
          <h2 className="section-title">EXTRA SERVICES</h2>
          <div className="extra-services-grid">
            <div className="extra-service-card">
              <div className="service-icon">🛡️</div>
              <h3>Travel Insurance</h3>
              <p>
                We know that you'd rather not think about all the things that may go wrong on your trip, but these things can and do happen. 
                This is why here at Honeywell Travel we offer travel insurance, so that you can relax and enjoy your holiday knowing that 
                we've got you covered!
              </p>
              <p>
                We don't just keep you and your family protected, with us, you'll travel smarter and safer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incentive Trips Section */}
      <section className="incentive-section">
        <div className="container">
          <div className="incentive-content">
            <div className="incentive-text">
              <h2>INCENTIVE TRIPS</h2>
              <div className="incentive-description">
                <p>
                  Incentive travel is business-related travel designed to reward employees, integrate new team members, and motivate existing ones. 
                  These trips are carefully crafted to provide unique experiences that strengthen community, foster new ideas, and promote teamwork.
                </p>
                <p>
                  From the magical reindeer sleigh rides in Lapland to sailing adventures in the Mediterranean, or stargazing under the desert sky, 
                  we offer diverse locations and atmospheres for any event. Each incentive trip is customized to meet your company's specific goals 
                  and budget.
                </p>
                <p>
                  These experiences not only reward your team but also increase employee loyalty and success. At Honeywell Travel, we offer suitable 
                  locations and atmospheres for any event, ensuring your incentive trip creates lasting memories and drives performance.
                </p>
              </div>
            </div>
            <div className="incentive-image">
              <div className="image-placeholder">
                <span>🎯</span>
                <p>Team Building</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Travel Awards Section */}
      <section className="awards-section">
        <div className="container">
          <div className="awards-content">
            <div className="awards-logo">
              <div className="awards-icon">🏆</div>
              <h2>WORLD TRAVEL AWARDS</h2>
            </div>
            <div className="awards-text">
              <h3>CYPRUS LEADING TRAVEL MANAGEMENT COMPANY 2020</h3>
              <div className="awards-description">
                <p>
                  We are thrilled to announce that Honeywell Travel has been voted by the 27th World Travel Awards as 
                  <strong> Cyprus' Leading Travel Management Company for 2020</strong>.
                </p>
                <p className="quote">
                  "This prestigious award came at an excellent time for us, inspiring us to never give up, regardless of the 
                  difficulties and the adversities." - <strong>Mary Spyrou, Executive Director of Honeywell Travel</strong>
                </p>
                <p>
                  World Travel Awards serves to acknowledge, reward, and celebrate excellence across all sectors of the global travel 
                  and tourism industry. On the 2nd November, the European winners were announced on a virtual ceremony.
                </p>
                <p>
                  <strong>Graham Cooke, Founder, World Travel Awards</strong>, says: "Our winners represent the very best of Europe's 
                  travel and tourism sector and my congratulations to each of them. They have all demonstrated remarkable resilience in 
                  a year of unprecedented challenges. The World Travel Awards 2020 programme received a record number of votes cast by the 
                  public. This shows that the appetite for travel and tourism has never been stronger and bodes well for the Industry's 
                  future as the global recovery begins."
                </p>
                <p className="signature">
                  <strong>Honeywell Travel - A signature of Travel Management Excellence!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Business Travel?</h2>
          <p>Contact our corporate travel experts today and discover how we can optimize your travel program.</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}

export default Corporate
