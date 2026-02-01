import React, { useState, useEffect } from 'react';
import './SponsorShowcase.css';

const SponsorShowcase = () => {
  const [selectedTier, setSelectedTier] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Financial Sponsors (Major funding partners)
  const financialSponsors = [
    { 
      id: 1, 
      name: 'Dunedin City Council', 
      logo: `${process.env.PUBLIC_URL}/sponsors/dcc.png`, 
      since: 2023, 
      contribution: 'Financial support through grants and the Mayoral Fund',
      amount: '$15,000 annually',
      website: 'https://www.dunedin.govt.nz'
    },
    { 
      id: 2, 
      name: 'Otago Community Trust', 
      logo: `${process.env.PUBLIC_URL}/sponsors/oct.png`, 
      since: 2015, 
      contribution: 'Grant Funding',
      amount: '$12,000 annually',
      website: 'https://www.oct.org.nz'
    },
    { 
      id: 3, 
      name: 'Lion Foundation', 
      logo: `${process.env.PUBLIC_URL}/sponsors/lion.png`, 
      since: 2018, 
      contribution: 'Event Funding',
      amount: '$8,000 annually',
      website: 'https://www.lionfoundation.org.nz'
    }
  ];

  // In-Kind Sponsors (Products and services)
  const inKindSponsors = [
    { 
      id: 4, 
      name: 'Alsco', 
      logo: `${process.env.PUBLIC_URL}/sponsors/alsco.png`, 
      since: 2012,
      contribution: 'All the linen services',
      details: 'Providing all the tables cloths, napkins, and kitchen towels',
      website: 'https://www.alsco.co.nz'
    },
    { 
      id: 5, 
      name: 'DB Breweries', 
      logo: `${process.env.PUBLIC_URL}/sponsors/speights.png`, 
      since: 2014,
      contribution: 'Beverages',
      details: 'Soft drinks and water for all guests',
      website: 'https://www.dbbreweries.co.nz'
    },
    { 
      id: 6, 
      name: 'Scenic Hotel Group', 
      logo: `${process.env.PUBLIC_URL}/sponsors/scenic.png`, 
      since: 2016,
      contribution: 'All Linen',
      details: 'Tablecloths, napkins, and table decorations',
      website: 'https://www.scenichotelgroup.co.nz'
    },
    { 
      id: 7, 
      name: 'Mainland Products', 
      logo: `${process.env.PUBLIC_URL}/sponsors/mainland.png`, 
      since: 2019,
      contribution: 'Dairy Products',
      details: 'Cheese, butter, and cream',
      website: 'https://www.mainland.co.nz'
    },
    { 
      id: 8, 
      name: 'T&G Fresh', 
      logo: `${process.env.PUBLIC_URL}/sponsors/tg-fresh.png`, 
      since: 2020,
      contribution: 'Fresh Fruit',
      details: 'Seasonal fruit for desserts',
      website: 'https://www.tgfresh.com'
    }
  ];

  const communitySupporters = [
    { id: 9, name: 'St John Ambulance', contribution: 'First Aid Services' },
    { id: 10, name: 'Rotary Club Dunedin', contribution: 'Volunteer Support' },
    { id: 11, name: 'Lions Club', contribution: 'Equipment & Setup' },
    { id: 12, name: 'Salvation Army', contribution: 'Outreach & Support' },
    { id: 13, name: 'Red Cross Dunedin', contribution: 'Volunteer Coordination' },
    { id: 14, name: 'Presbyterian Support', contribution: 'Guest Services' }
  ];

  // Carousel for hero section
  const featuredLogos = [
    ...financialSponsors.map(s => ({ ...s, type: 'financial' })),
    ...inKindSponsors.map(s => ({ ...s, type: 'in-kind' }))
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredLogos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [featuredLogos.length]);

  const impactStats = [
    { value: '45+', label: 'Active Sponsors', icon: '🤝' },
    { value: '$280K', label: 'Annual Support', icon: '💰' },
    { value: '15', label: 'Years Partnership', icon: '📅' },
    { value: '100%', label: 'Community Impact', icon: '❤️' }
  ];

  return (
    <div className="sponsor-showcase">
      {/* Hero Section - Split Screen */}
      <section className="sponsor-hero-split">
        {/* Left Side - Text */}
        <div className="sponsor-hero-left">
          <div className="sponsor-hero-content">
            <div className="hero-badge stagger-1 fade-in">
              <span>🏆</span>
              <span>THANK YOU</span>
            </div>
            <h1 className="stagger-2 fade-in">
              Our Generous
              <span className="highlight"> Supporters</span>
            </h1>
            <p className="hero-subtitle stagger-3 fade-in">
              The Dunedin Community Christmas Dinner wouldn't be possible without our 
              incredible sponsors who provide both financial support and in-kind donations 
              to make this event special for our community.
            </p>
            <div className="hero-stats stagger-4 fade-in">
              <div className="stat-item">
                <span className="stat-number">$280K+</span>
                <span className="stat-label">Annual Value</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">45+</span>
                <span className="stat-label">Partners</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Logo Carousel */}
        <div className="sponsor-hero-right">
          <div className="sponsor-carousel">
            {featuredLogos.map((sponsor, index) => (
              <div
                key={sponsor.id}
                className={`sponsor-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="sponsor-featured-card">
                  <img src={sponsor.logo} alt={sponsor.name} className="sponsor-featured-logo" />
                  <div className="sponsor-featured-info">
                    <h3>{sponsor.name}</h3>
                    <p className="sponsor-type-badge">{sponsor.type === 'financial' ? '💰 Financial Partner' : '🎁 In-Kind Partner'}</p>
                    <p className="sponsor-contribution">{sponsor.contribution}</p>
                    <p className="sponsor-details">{sponsor.details || sponsor.amount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="sponsor-carousel-dots">
            {featuredLogos.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-section">
        <div className="container">
          <div className="impact-grid">
            {impactStats.map((stat, index) => (
              <div key={index} className={`impact-card fade-in stagger-${index + 1}`}>
                <div className="impact-icon">{stat.icon}</div>
                <div className="impact-value">{stat.value}</div>
                <div className="impact-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-tabs fade-in">
            <button
              className={selectedTier === 'all' ? 'active' : ''}
              onClick={() => setSelectedTier('all')}
            >
              All Sponsors
            </button>
            <button
              className={selectedTier === 'financial' ? 'active' : ''}
              onClick={() => setSelectedTier('financial')}
            >
              💰 Financial
            </button>
            <button
              className={selectedTier === 'in-kind' ? 'active' : ''}
              onClick={() => setSelectedTier('in-kind')}
            >
              🎁 In-Kind
            </button>
            <button
              className={selectedTier === 'community' ? 'active' : ''}
              onClick={() => setSelectedTier('community')}
            >
              🌟 Community
            </button>
          </div>
        </div>
      </section>

      {/* Financial Sponsors */}
      {(selectedTier === 'all' || selectedTier === 'financial') && (
        <section className="sponsor-tier financial-tier">
          <div className="container">
            <div className="tier-header fade-in">
              <div className="tier-badge financial">
                <span className="tier-icon">💰</span>
                <span className="tier-name">Financial Partners</span>
              </div>
              <p className="tier-description">
                Our Financial Partners provide crucial funding that makes our event possible year after year.
              </p>
            </div>

            <div className="sponsor-cards-grid">
              {financialSponsors.map((sponsor, index) => (
                <div key={sponsor.id} className={`sponsor-card fade-in stagger-${index + 1}`}>
                  <div className="sponsor-logo-container">
                    <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
                  </div>
                  <div className="sponsor-details-section">
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-name-link">
                      <h3 className="sponsor-name">{sponsor.name}</h3>
                    </a>
                    <div className="sponsor-meta">
                      <span className="sponsor-since">Partner since {sponsor.since}</span>
                    </div>
                    <div className="sponsor-contribution-box">
                      <p className="contribution-label">{sponsor.contribution}</p>
                      <p className="contribution-amount">{sponsor.amount}</p>
                    </div>
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-website-link">
                      Visit Website →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* In-Kind Sponsors */}
      {(selectedTier === 'all' || selectedTier === 'in-kind') && (
        <section className="sponsor-tier in-kind-tier">
          <div className="container">
            <div className="tier-header fade-in">
              <div className="tier-badge in-kind">
                <span className="tier-icon">🎁</span>
                <span className="tier-name">In-Kind Partners</span>
              </div>
              <p className="tier-description">
                Our In-Kind Partners donate products, services, and expertise that enhance the event experience.
              </p>
            </div>

            <div className="sponsor-cards-grid">
              {inKindSponsors.map((sponsor, index) => (
                <div key={sponsor.id} className={`sponsor-card fade-in stagger-${(index % 4) + 1}`}>
                  <div className="sponsor-logo-container">
                    <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
                  </div>
                  <div className="sponsor-details-section">
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-name-link">
                      <h3 className="sponsor-name">{sponsor.name}</h3>
                    </a>
                    <div className="sponsor-meta">
                      <span className="sponsor-since">Partner since {sponsor.since}</span>
                    </div>
                    <div className="sponsor-contribution-box in-kind-box">
                      <p className="contribution-label">{sponsor.contribution}</p>
                      <p className="contribution-details">{sponsor.details}</p>
                    </div>
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-website-link">
                      Visit Website →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Community Supporters */}
      {(selectedTier === 'all' || selectedTier === 'community') && (
        <section className="sponsor-tier community-tier">
          <div className="container">
            <div className="tier-header fade-in">
              <div className="tier-badge community">
                <span className="tier-icon">🌟</span>
                <span className="tier-name">Community Supporters</span>
              </div>
              <p className="tier-description">
                Local organizations and groups who volunteer their time, resources, and expertise.
              </p>
            </div>

            <div className="community-grid fade-in stagger-1">
              {communitySupporters.map((supporter) => (
                <div key={supporter.id} className="community-card">
                  <h4>{supporter.name}</h4>
                  <p>{supporter.contribution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Become a Sponsor Section */}
      <section className="become-sponsor-section">
        <div className="container">
          <div className="sponsor-cta-card fade-in">
            <div className="cta-content">
              <h2>Become a Sponsor</h2>
              <p>
                Join us in making a difference. Your support helps create magical Christmas memories
                for hundreds of community members. We offer flexible sponsorship packages for both
                financial contributions and in-kind donations.
              </p>
              <div className="cta-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Brand visibility across all event materials</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Recognition on website and social media</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Impact reports and community stories</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Invitation to exclusive sponsor events</span>
                </div>
              </div>
            </div>
            <div className="cta-action">
              <button className="btn-primary large">
                Download Sponsorship Package
              </button>
              <button className="btn-secondary large">
                Contact Our Team
              </button>
              <p className="cta-contact">
                📧 sponsors@christmas.org.nz<br />
                📱 027 SPONSOR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta">
        <div className="container">
          <div className="footer-cta-content fade-in">
            <h2>Thank You to All Our Supporters</h2>
            <p>
              Every contribution, big or small, makes a difference in creating a memorable
              Christmas celebration for our community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorShowcase;