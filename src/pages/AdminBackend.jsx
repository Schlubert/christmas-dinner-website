import React, { useState } from 'react';
import './AdminBackend.css';

const AdminBackend = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedVolunteers, setSelectedVolunteers] = useState([]);

  // Mock data
  const stats = {
    totalVolunteers: 247,
    confirmedAttendees: 425,
    shiftsRemaining: 12,
    donations: 28650
  };

  const recentVolunteers = [
    { id: 1, name: 'Sarah Johnson', role: 'Kitchen Helper', status: 'confirmed', shift: 'Morning', date: '2 hours ago' },
    { id: 2, name: 'Mike Chen', role: 'Server', status: 'pending', shift: 'Service', date: '5 hours ago' },
    { id: 3, name: 'Emma Wilson', role: 'Setup Crew', status: 'confirmed', shift: 'Morning', date: '1 day ago' },
    { id: 4, name: 'David Brown', role: 'Greeter', status: 'confirmed', shift: 'Service', date: '1 day ago' },
    { id: 5, name: 'Lisa Martinez', role: 'Entertainment', status: 'pending', shift: 'Service', date: '2 days ago' }
  ];

  const upcomingShifts = [
    { id: 1, shift: 'Morning Setup', time: '8:00am - 11:00am', assigned: 45, needed: 50, status: 'warning' },
    { id: 2, shift: 'Service Time', time: '11:00am - 2:00pm', assigned: 87, needed: 80, status: 'good' },
    { id: 3, shift: 'Cleanup', time: '2:00pm - 5:00pm', assigned: 28, needed: 40, status: 'critical' },
    { id: 4, shift: 'Kitchen prep day 1', time: '7:00am - 2:00pm', assigned: 15, needed: 20, status: 'warning' },
    { id: 5, shift: 'Kitchen prep day 2', time: '7:00am - 2:00pm', assigned: 10, needed: 20, status: 'critical' },
    { id: 6, shift: 'et cetera', time: '11:00am - 2:00pm', assigned: 5, needed: 10, status: 'good' },
    { id: 7, shift: 'et cetera', time: '11:00am - 2:00pm', assigned: 5, needed: 10, status: 'good' }
  ];

  const tasks = [
    { id: 1, task: 'Send reminder emails to confirmed volunteers', priority: 'high', due: 'Today' },
    { id: 2, task: 'Review dietary requirements for catering order', priority: 'high', due: 'Tomorrow' },
    { id: 3, task: 'Confirm sponsor logo placement', priority: 'medium', due: 'Dec 20' },
    { id: 4, task: 'Order additional volunteer t-shirts', priority: 'medium', due: 'Dec 18' },
    { id: 5, task: 'Schedule volunteer orientation session', priority: 'low', due: 'Dec 22' }
  ];

  const toggleVolunteerSelection = (id) => {
    setSelectedVolunteers(prev =>
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  return (
    <div className="admin-backend">
      {/* Header */}
      <div className="admin-header">
        <div className="container">
          <div className="header-top">
            <div className="header-info">
              <h1 className="fade-in">Admin Dashboard</h1>
              <p className="fade-in stagger-1">Christmas Day 2025 Event Management</p>
            </div>
           </div>

          {/* Navigation Tabs */}
          <div className="admin-tabs fade-in stagger-3">
            <button
              className={activeTab === 'dashboard' ? 'active' : ''}
              onClick={() => setActiveTab('dashboard')}
            >
              <span>📊</span>
              Dashboard
            </button>
            <button
              className={activeTab === 'volunteers' ? 'active' : ''}
              onClick={() => setActiveTab('volunteers')}
            >
              <span>👥</span>
              Volunteers
            </button>
            <button
              className={activeTab === 'shifts' ? 'active' : ''}
              onClick={() => setActiveTab('shifts')}
            >
              <span>📅</span>
              Shifts
            </button>
            <button
              className={activeTab === 'attendees' ? 'active' : ''}
              onClick={() => setActiveTab('attendees')}
            >
              <span>🍽️</span>
              Attendees
            </button>
            <button
              className={activeTab === 'communications' ? 'active' : ''}
              onClick={() => setActiveTab('communications')}
            >
              <span>💬</span>
              Communications
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="admin-content">
        <div className="container">
          {activeTab === 'dashboard' && (
            <div className="dashboard-view">
              {/* Stats Grid */}
              <div className="stats-row">
                <div className="stat-box fade-in stagger-1">
                  <div className="stat-icon volunteers">👥</div>
                  <div className="stat-details">
                    <div className="stat-number">{stats.totalVolunteers}</div>
                    <div className="stat-label">Total Volunteers</div>
                    <div className="stat-change positive">+23 this week</div>
                  </div>
                </div>

                <div className="stat-box fade-in stagger-2">
                  <div className="stat-icon attendees">🍽️</div>
                  <div className="stat-details">
                    <div className="stat-number">{stats.confirmedAttendees}</div>
                    <div className="stat-label">Confirmed Attendees</div>
                    <div className="stat-change positive">+56 this week</div>
                  </div>
                </div>

                <div className="stat-box fade-in stagger-3">
                  <div className="stat-icon shifts">📅</div>
                  <div className="stat-details">
                    <div className="stat-number">{stats.shiftsRemaining}</div>
                    <div className="stat-label">Shifts to Fill</div>
                    <div className="stat-change negative">-5 this week</div>
                  </div>
                </div>

                <div className="stat-box fade-in stagger-4">
                  <div className="stat-icon donations">💰</div>
                  <div className="stat-details">
                    <div className="stat-number">${(stats.donations / 1000).toFixed(1)}K</div>
                    <div className="stat-label">Total Donations</div>
                    <div className="stat-change positive">+$2.4K this week</div>
                  </div>
                </div>
              </div>

              {/* Main Dashboard Grid */}
              <div className="dashboard-grid">
                {/* Recent Volunteers */}
                <div className="dashboard-card fade-in stagger-1">
                  <div className="card-header">
                    <h2>Recent Volunteer Registrations</h2>
                    <button className="btn-text">View All →</button>
                  </div>
                  <div className="volunteer-list">
                    {recentVolunteers.map(volunteer => (
                      <div key={volunteer.id} className="volunteer-item">
                        <div className="volunteer-avatar">
                          {volunteer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="volunteer-info">
                          <div className="volunteer-name">{volunteer.name}</div>
                          <div className="volunteer-role">{volunteer.role} • {volunteer.shift}</div>
                        </div>
                        <div className="volunteer-meta">
                          <span className={`status-badge ${volunteer.status}`}>
                            {volunteer.status}
                          </span>
                          <span className="volunteer-time">{volunteer.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shift Coverage */}
                <div className="dashboard-card fade-in stagger-2">
                  <div className="card-header">
                    <h2>Shift Coverage Overview</h2>
                    <button className="btn-text">Manage →</button>
                  </div>
                  <div className="shift-list">
                    {upcomingShifts.map(shift => (
                      <div key={shift.id} className="shift-item">
                        <div className="shift-info">
                          <div className="shift-name">{shift.shift}</div>
                          <div className="shift-time">{shift.time}</div>
                        </div>
                        <div className="shift-progress">
                          <div className="progress-bar">
                            <div 
                              className={`progress-fill ${shift.status}`}
                              style={{ width: `${(shift.assigned / shift.needed) * 100}%` }}
                            ></div>
                          </div>
                          <div className="progress-label">
                            {shift.assigned} / {shift.needed} assigned
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tasks */}
                <div className="dashboard-card full-width fade-in stagger-3">
                  <div className="card-header">
                    <h2>Upcoming Tasks</h2>
                    <button className="btn-text">Add Task +</button>
                  </div>
                  <div className="task-list">
                    {tasks.map(task => (
                      <div key={task.id} className="task-item">
                        <input type="checkbox" className="task-checkbox" />
                        <div className="task-info">
                          <div className="task-name">{task.task}</div>
                          <div className="task-meta">
                            <span className={`priority-badge ${task.priority}`}>
                              {task.priority}
                            </span>
                            <span className="task-due">Due: {task.due}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'volunteers' && (
            <div className="volunteers-view fade-in">
              <div className="view-header">
                <div className="search-bar">
                  <span className="search-icon">🔍</span>
                  <input type="text" placeholder="Search volunteers by name, role, or email..." />
                </div>
                <div className="view-actions">
                  <button className="btn-filter">
                    <span>🔽</span>
                    Filter
                  </button>
                  <button className="btn-secondary">Export CSV</button>
                  {selectedVolunteers.length > 0 && (
                    <button className="btn-primary">
                      Send Message ({selectedVolunteers.length})
                    </button>
                  )}
                </div>
              </div>

              <div className="table-card">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th><input type="checkbox" /></th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Shift</th>
                      <th>Contact</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentVolunteers.map(volunteer => (
                      <tr key={volunteer.id}>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedVolunteers.includes(volunteer.id)}
                            onChange={() => toggleVolunteerSelection(volunteer.id)}
                          />
                        </td>
                        <td>
                          <div className="table-name">
                            <div className="table-avatar">
                              {volunteer.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            {volunteer.name}
                          </div>
                        </td>
                        <td>{volunteer.role}</td>
                        <td>{volunteer.shift}</td>
                        <td>
                          <button className="btn-link">View Details</button>
                        </td>
                        <td>
                          <span className={`status-badge ${volunteer.status}`}>
                            {volunteer.status}
                          </span>
                        </td>
                        <td>
                          <div className="table-actions">
                            <button className="action-btn" title="Edit">✏️</button>
                            <button className="action-btn" title="Message">💬</button>
                            <button className="action-btn" title="More">⋯</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'shifts' && (
            <div className="shifts-view fade-in">
              <div className="view-header">
                <h2>Shift Management</h2>
                <button className="btn-primary">+ Create New Shift</button>
              </div>
              <div className="shifts-grid">
                {upcomingShifts.map(shift => (
                  <div key={shift.id} className="shift-card">
                    <div className="shift-card-header">
                      <h3>{shift.shift}</h3>
                      <span className={`status-indicator ${shift.status}`}></span>
                    </div>
                    <div className="shift-card-time">{shift.time}</div>
                    <div className="shift-card-stats">
                      <div className="shift-stat">
                        <span className="stat-value">{shift.assigned}</span>
                        <span className="stat-text">Assigned</span>
                      </div>
                      <div className="shift-stat">
                        <span className="stat-value">{shift.needed - shift.assigned}</span>
                        <span className="stat-text">Needed</span>
                      </div>
                    </div>
                    <button className="btn-secondary full-width">Manage Volunteers</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'attendees' && (
            <div className="attendees-view fade-in">
              <div className="attendees-banner">
                <div className="banner-content">
                  <h2>Attendee Management</h2>
                  <p>Track RSVPs, dietary requirements, and guest information</p>
                </div>
                <button className="btn-primary">Download Guest List</button>
              </div>
              <div className="info-message">
                <span className="info-icon">ℹ️</span>
                <p>This section would contain attendee RSVPs, dietary requirements tracking, and guest list management.</p>
              </div>
            </div>
          )}

          {activeTab === 'communications' && (
            <div className="communications-view fade-in">
              <div className="comms-grid">
                <div className="comms-card">
                  <div className="comms-icon">📧</div>
                  <h3>Email Campaigns</h3>
                  <p>Send targeted emails to volunteers and attendees</p>
                  <button className="btn-primary">Create Campaign</button>
                </div>
                
                <div className="comms-card">
                  <div className="comms-icon">📢</div>
                  <h3>Announcements</h3>
                  <p>Post updates visible to all users</p>
                  <button className="btn-primary">New Announcement</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBackend;
