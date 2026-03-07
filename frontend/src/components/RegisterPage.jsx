import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const branches = [
  'Computer Science',
  'Information Technology',
  'Electronics & Communication',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Chemical Engineering',
  'Biotechnology',
];

export default function RegisterPage() {
  const [role, setRole] = useState('student');

  return (
    <div className="register-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand">
            <div className="brand-icon">C</div>
            <span className="brand-text">CareerOS</span>
          </Link>
          <div className="navbar-links">
            <Link to="/login" className="nav-link">Sign In</Link>
            <Link to="/register" className="nav-btn">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Register Card */}
      <div className="register-page">
        <div className="register-card">
          <div className="register-logo">
            <div className="register-logo-icon">C</div>
          </div>
          <h1 className="register-title">Create Your Account</h1>
          <p className="register-subtitle">Join CareerOS today</p>

          <form className="register-form" onSubmit={(e) => e.preventDefault()}>
            {/* Role selector */}
            <div className="form-group">
              <label>I am a</label>
              <div className="role-toggle">
                <button
                  type="button"
                  className={`role-toggle-btn ${role === 'student' ? 'active' : ''}`}
                  onClick={() => setRole('student')}
                >
                  <strong>Student</strong>
                  <span>Looking for opportunities</span>
                </button>
                <button
                  type="button"
                  className={`role-toggle-btn ${role === 'recruiter' ? 'active' : ''}`}
                  onClick={() => setRole('recruiter')}
                >
                  <strong>Recruiter</strong>
                  <span>Hiring candidates</span>
                </button>
              </div>
            </div>

            {/* Common fields */}
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullName" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" placeholder="you@example.com" autoComplete="email" />
            </div>

            {/* Student-specific fields */}
            {role === 'student' && (
              <>
                <div className="form-group">
                  <label htmlFor="rollNumber">Roll Number</label>
                  <input type="text" id="rollNumber" placeholder="CS2021001" />
                </div>
                <div className="form-group">
                  <label htmlFor="branch">Branch/Department</label>
                  <select id="branch" defaultValue="">
                    <option value="" disabled>Select your branch</option>
                    {branches.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {/* Recruiter-specific fields */}
            {role === 'recruiter' && (
              <>
                <div className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input type="text" id="companyName" placeholder="Acme Inc." />
                </div>
                <div className="form-group">
                  <label htmlFor="designation">Your Designation</label>
                  <input type="text" id="designation" placeholder="HR Manager" />
                </div>
              </>
            )}

            {/* Password fields */}
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input type="password" id="password" placeholder="••••••••" autoComplete="new-password" />
              <span className="form-hint">Minimum 8 characters</span>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <input type="password" id="confirmPassword" placeholder="••••••••" autoComplete="new-password" />
            </div>

            <button type="submit" className="register-btn">Create Account</button>
          </form>

          <p className="register-footer">
            Already have an account? <Link to="/login" className="signin-link">Sign in</Link>
          </p>
          <Link to="/" className="back-home">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
