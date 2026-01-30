import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import VolunteerSignup from './pages/VolunteerSignup';
import AdminBackend from './pages/AdminBackend';
import SponsorShowcase from './pages/SponsorShowcase';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Calculate countdown function
  const calculateCountdown = () => {
    const christmas = new Date('2026-12-25T11:30:00');
    const now = new Date();
    const diff = christmas - now;
    
    if (diff > 0) {
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };
  
  // Initialize with calculated value (not placeholder)
  const [countdown, setCountdown] = useState(calculateCountdown());

  // Real-time countdown to Christmas Day
  useEffect(() => {
    // Update immediately on mount
    setCountdown(calculateCountdown());
    
    // Then update every second
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'volunteer':
        return <VolunteerSignup />;
      case 'admin':
        return <AdminBackend />;
      case 'sponsors':
        return <SponsorShowcase />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      {/* Logo - Fixed Position */}
      <div className="nav-logo" onClick={() => setCurrentPage('home')} style={{cursor: 'pointer'}}>
        <img src="/logo.png" alt="Christmas in Dunedin Logo" className="logo-image" />
      </div>

      {/* Countdown - Fixed Position */}
      <div className="nav-countdown">
        <div className="countdown-label">Christmas Day</div>
        <div className="countdown-numbers">
          <div className="countdown-unit">
            <span className="countdown-value">{countdown.days}</span>
            <span className="countdown-text">d</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-unit">
            <span className="countdown-value">{countdown.hours}</span>
            <span className="countdown-text">h</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-unit">
            <span className="countdown-value">{countdown.minutes}</span>
            <span className="countdown-text">m</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-unit">
            <span className="countdown-value">{countdown.seconds}</span>
            <span className="countdown-text">s</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="nav-links">
            <button 
              onClick={() => setCurrentPage('home')}
              className={currentPage === 'home' ? 'active' : ''}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('volunteer')}
              className={currentPage === 'volunteer' ? 'active' : ''}
            >
              Volunteer
            </button>
            <button 
              onClick={() => setCurrentPage('sponsors')}
              className={currentPage === 'sponsors' ? 'active' : ''}
            >
              Sponsors
            </button>
            <button 
              onClick={() => setCurrentPage('admin')}
              className={currentPage === 'admin' ? 'active' : ''}
            >
              Admin
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;