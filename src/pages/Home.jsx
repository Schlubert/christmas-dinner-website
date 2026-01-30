import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    '/hero-1.jpg',
    '/hero-2.jpg',
    '/hero-3.jpg',
    '/hero-4.jpg',
    '/hero-5.jpg',
    '/hero-6.jpg',
    '/hero-7.jpg'
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        {/* Carousel Images */}
        <div className="hero-carousel">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        
        <div className="hero-overlay"></div>
        
        {/* Carousel Controls */}
        <div className="carousel-controls">
          <button 
            className="carousel-btn prev"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          >
            ‹
          </button>
          <button 
            className="carousel-btn next"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
          >
            ›
          </button>
        </div>
        
        {/* Carousel Dots */}
        <div className="carousel-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content container fade-in">

          <h1 className="hero-title stagger-2 fade-in">
            A Community 
            <span className="title-highlight"> Celebration</span>
            <br />
            for Everyone
          </h1>
          <p className="hero-subtitle stagger-3 fade-in">
            Join us at the Dunedin Town Hall on December 25th at 11:30am
            <br />
            for a free Christmas dinner that brings our community together
          </p>
          <div className="hero-cta stagger-4 fade-in">
            <button className="btn-primary">
              <span>RSVP for Dinner</span>
              <span className="btn-icon">→</span>
            </button>
            <button className="btn-secondary">Volunteer with Us</button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="hero-decoration hero-decoration-1"></div>
        <div className="hero-decoration hero-decoration-2"></div>
        <div className="hero-decoration hero-decoration-3"></div>
      </section>

      {/* Impact Stats */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title fade-in">Our Community Impact</h2>
          <div className="stats-grid">
            <div className="stat-card fade-in stagger-1">
              <div className="stat-icon">🍽️</div>
              <div className="stat-number">550+</div>
              <div className="stat-label">Meals Served</div>
              <p className="stat-desc">Each Christmas day</p>
            </div>
            <div className="stat-card fade-in stagger-2">
              <div className="stat-icon">👥</div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Volunteers</div>
              <p className="stat-desc">Making it possible each year</p>
            </div>
            <div className="stat-card fade-in stagger-3">
              <div className="stat-icon">❤️</div>
              <div className="stat-number">15</div>
              <div className="stat-label">Years of Service</div>
              <p className="stat-desc">Building community together</p>
            </div>
            <div className="stat-card fade-in stagger-4">
              <div className="stat-icon">🎁</div>
              <div className="stat-number">$250K+</div>
              <div className="stat-label">Community Support</div>
              <p className="stat-desc">In donations and sponsorships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column CTAs */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-card cta-attend fade-in stagger-1">
              <div className="cta-icon">🍴</div>
              <h3>Join Us for Dinner</h3>
              <p>Everyone is welcome at our table. RSVP to help us prepare the perfect meal for you.</p>
              <button className="cta-button">Register to Attend</button>
              <div className="cta-details">
                <span>📍 Dunedin Town Hall</span>
                <span>🕐 11:30am - 2:30pm</span>
              </div>
            </div>

            <div className="cta-card cta-volunteer fade-in stagger-2">
              <div className="cta-icon">🤝</div>
              <h3>Volunteer Your Time</h3>
              <p>Be part of something special. Help serve, cook, setup, or entertain on Christmas Day.</p>
              <button className="cta-button">Sign Up to Volunteer</button>
              <div className="cta-details">
                <span>⏰ Multiple shifts available</span>
                <span>👕 T-shirt provided</span>
              </div>
            </div>

            <div className="cta-card cta-donate fade-in stagger-3">
              <div className="cta-icon">💝</div>
              <h3>Support Our Mission</h3>
              <p>Your donation helps us serve hundreds of community members with dignity and joy.</p>
              <button className="cta-button">Make a Donation</button>
              <div className="cta-details">
                <span>✓ Registered Charity</span>
                <span>✓ Tax Deductible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stream Banner */}
      <section className="livestream-banner fade-in">
        <div className="container">
          <div className="livestream-content">
            <div className="livestream-badge">
              <span className="pulse-dot"></span>
              <span>COMING CHRISTMAS DAY</span>
            </div>
            <h2>Can't Join Us in Person?</h2>
            <p>Watch our live stream on Christmas Day and be part of the celebration from anywhere in the world</p>
            <button className="btn-secondary">Get Notified</button>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="stories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title fade-in">Community Stories</h2>
            <p className="section-subtitle fade-in">Hear from those who make our dinner special</p>
          </div>
          
          <div className="stories-grid">
            <div className="story-card fade-in stagger-1">
              <div className="story-image" style={{backgroundImage: 'url(/maria.jpg)'}}></div>
              <div className="story-content">
                <h3>Maria's Story</h3>
                <p className="story-role">Volunteer Chef • 8 Years</p>
                <p>"Cooking for hundreds on Christmas Day fills my heart with joy. It's the best gift I could give."</p>
              </div>
            </div>

            <div className="story-card fade-in stagger-2">
              <div className="story-image" style={{backgroundImage: 'url(/singh.jpg)'}}></div>
              <div className="story-content">
                <h3>The Singh Family</h3>
                <p className="story-role">Attendees • Since 2019</p>
                <p>"This dinner brought us together when we needed community most. Now it's our family tradition."</p>
              </div>
            </div>

            <div className="story-card fade-in stagger-3">
              <div className="story-image" style={{backgroundImage: 'url(/david.jpg)'}}></div>
              <div className="story-content">
                <h3>David's Journey</h3>
                <p className="story-role">From Guest to Volunteer Leader</p>
                <p>"I came as a guest five years ago. Now I coordinate 50 volunteers. This place changed my life."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>Dunedin Christmas Charitable Trust is a registered charity dedicated to bringing our community together.</p>
              <p className="charity-number">Charity No: CC62647</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#attend">Attend Dinner</a></li>
                <li><a href="#volunteer">Volunteer</a></li>
                <li><a href="#donate">Donate</a></li>
                <li><a href="#sponsors">Our Sponsors</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Get in Touch</h3>
              <ul>
                <li>📧 info@christmas.org.nz</li>
                <li>📱 Facebook: @DunedinChristmasDinner</li>
                <li>📍 Dunedin Town Hall</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Newsletter</h3>
              <p>Stay updated with our latest news</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Dunedin Community Christmas Dinner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;