import React, { useState } from 'react';
import './VolunteerSignup.css';

const VolunteerSignup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    availability: [],
    dietaryReqs: '',
    shirtSize: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const roles = [
    { id: 'kitchen', name: 'Kitchen Helper', icon: '👨‍🍳', desc: 'Assist with meal preparation' },
    { id: 'server', name: 'Food Server', icon: '🍽️', desc: 'Serve meals to guests' },
    { id: 'setup', name: 'Setup Crew', icon: '🔧', desc: 'Arrange tables and decorations' },
    { id: 'cleanup', name: 'Cleanup Crew', icon: '🧹', desc: 'Post-event cleanup' },
    { id: 'greeter', name: 'Greeter', icon: '👋', desc: 'Welcome guests at entrance' },
    { id: 'entertainment', name: 'Entertainment', icon: '🎵', desc: 'Provide music or activities' }
  ];

  const shifts = [
    { id: 'morning', time: '8:00am - 11:00am', label: 'Morning Setup' },
    { id: 'service', time: '11:00am - 2:00pm', label: 'Service Time' },
    { id: 'afternoon', time: '2:00pm - 5:00pm', label: 'Cleanup' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvailabilityChange = (shiftId) => {
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.includes(shiftId)
        ? prev.availability.filter(id => id !== shiftId)
        : [...prev.availability, shiftId]
    }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="volunteer-signup">
      {/* Header */}
      <section className="signup-header">
        <div className="container">
          <div className="header-content fade-in">
            <div className="header-badge stagger-1 fade-in">
              <span>🤝</span>
              <span>VOLUNTEER REGISTRATION</span>
            </div>
            <h1 className="stagger-2 fade-in">Join Our Volunteer Team</h1>
            <p className="stagger-3 fade-in">
              Be part of something special this Christmas Day. Every volunteer makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="progress-section">
        <div className="container">
          <div className="progress-bar fade-in stagger-1">
            {[1, 2, 3, 4].map(step => (
              <div
                key={step}
                className={`progress-step ${currentStep >= step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
              >
                <div className="step-number">{currentStep > step ? '✓' : step}</div>
                <div className="step-label">
                  {step === 1 && 'Personal Info'}
                  {step === 2 && 'Choose Role'}
                  {step === 3 && 'Availability'}
                  {step === 4 && 'Finalize'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="form-container">
        <div className="container">
          <div className="form-card fade-in">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="form-step">
                <h2 className="step-title">Tell Us About Yourself</h2>
                <p className="step-description">We'll use this information to contact you about your volunteer shifts.</p>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="027 123 4567"
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="experience">Previous Volunteer Experience</label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Tell us about any relevant volunteer or hospitality experience (optional)"
                      rows="4"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Choose Role */}
            {currentStep === 2 && (
              <div className="form-step">
                <h2 className="step-title">What Would You Like to Do?</h2>
                <p className="step-description">Choose the volunteer role that interests you most.</p>
                
                <div className="role-grid">
                  {roles.map(role => (
                    <div
                      key={role.id}
                      className={`role-card ${formData.role === role.id ? 'selected' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, role: role.id }))}
                    >
                      <div className="role-icon">{role.icon}</div>
                      <h3>{role.name}</h3>
                      <p>{role.desc}</p>
                      <div className="role-check">
                        {formData.role === role.id && '✓'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Availability */}
            {currentStep === 3 && (
              <div className="form-step">
                <h2 className="step-title">When Can You Help?</h2>
                <p className="step-description">Select all the shifts you're available for. You can choose multiple.</p>
                
                <div className="shift-list">
                  {shifts.map(shift => (
                    <div
                      key={shift.id}
                      className={`shift-card ${formData.availability.includes(shift.id) ? 'selected' : ''}`}
                      onClick={() => handleAvailabilityChange(shift.id)}
                    >
                      <div className="shift-checkbox">
                        {formData.availability.includes(shift.id) && '✓'}
                      </div>
                      <div className="shift-content">
                        <h3>{shift.label}</h3>
                        <p className="shift-time">{shift.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="form-grid" style={{ marginTop: '2rem' }}>
                  <div className="form-group">
                    <label htmlFor="shirtSize">T-Shirt Size *</label>
                    <select
                      id="shirtSize"
                      name="shirtSize"
                      value={formData.shirtSize}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select size</option>
                      <option value="xs">XS</option>
                      <option value="s">S</option>
                      <option value="m">M</option>
                      <option value="l">L</option>
                      <option value="xl">XL</option>
                      <option value="2xl">2XL</option>
                      <option value="3xl">3XL</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="dietaryReqs">Dietary Requirements</label>
                    <input
                      type="text"
                      id="dietaryReqs"
                      name="dietaryReqs"
                      value={formData.dietaryReqs}
                      onChange={handleInputChange}
                      placeholder="e.g., Vegetarian, Gluten-free"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Emergency Contact & Confirmation */}
            {currentStep === 4 && (
              <div className="form-step">
                <h2 className="step-title">Almost Done!</h2>
                <p className="step-description">Emergency contact details and final confirmation.</p>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="emergencyContact">Emergency Contact Name *</label>
                    <input
                      type="text"
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      placeholder="Contact person name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="emergencyPhone">Emergency Contact Phone *</label>
                    <input
                      type="tel"
                      id="emergencyPhone"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                      placeholder="027 123 4567"
                      required
                    />
                  </div>
                </div>

                <div className="summary-card">
                  <h3>Your Volunteer Registration Summary</h3>
                  <div className="summary-grid">
                    <div className="summary-item">
                      <span className="summary-label">Name:</span>
                      <span className="summary-value">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Email:</span>
                      <span className="summary-value">{formData.email}</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Role:</span>
                      <span className="summary-value">
                        {roles.find(r => r.id === formData.role)?.name || 'Not selected'}
                      </span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Shifts:</span>
                      <span className="summary-value">
                        {formData.availability.length} selected
                      </span>
                    </div>
                  </div>
                </div>

                <div className="terms-checkbox">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">
                    I agree to the volunteer code of conduct and understand that I will receive confirmation via email.
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button className="btn-back" onClick={prevStep}>
                  ← Back
                </button>
              )}
              
              <div className="nav-spacer"></div>
              
              {currentStep < 4 ? (
                <button className="btn-primary" onClick={nextStep}>
                  Continue →
                </button>
              ) : (
                <button className="btn-primary submit-btn">
                  Submit Registration
                </button>
              )}
            </div>
          </div>

          {/* Side Info */}
          <div className="side-info fade-in stagger-2">
            <div className="info-card">
              <h3>What to Expect</h3>
              <ul>
                <li>✓ Free volunteer t-shirt</li>
                <li>✓ Complimentary meals during shifts</li>
                <li>✓ Certificate of appreciation</li>
                <li>✓ Amazing community experience</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Questions?</h3>
              <p>Contact our volunteer coordinator:</p>
              <p><strong>volunteers@christmas.org.nz</strong></p>
              <p><strong>027 VOLUNTEER</strong></p>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "Volunteering at the Christmas Dinner was the most rewarding experience. The joy on people's faces made my day!"
              </p>
              <p className="testimonial-author">- Sarah M., 2024 Volunteer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerSignup;
