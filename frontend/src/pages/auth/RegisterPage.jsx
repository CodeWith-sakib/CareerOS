import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
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
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [branch, setBranch] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [designation, setDesignation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!fullName || !email || !password || !confirmPassword) {
      return setError('Please fill in all required fields.');
    }
    if (password.length < 8) {
      return setError('Password must be at least 8 characters.');
    }
    if (password !== confirmPassword) {
      return setError('Passwords do not match.');
    }

    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName: fullName });

      const profileData = {
        fullName,
        email,
        role,
        createdAt: new Date().toISOString(),
      };

      if (role === 'student') {
        profileData.rollNumber = rollNumber;
        profileData.branch = branch;
      } else {
        profileData.companyName = companyName;
        profileData.designation = designation;
      }

      await setDoc(doc(db, 'users', cred.user.uid), profileData);
      if (role === 'student') {
        navigate('/student/dashboard');
      } else if (role === 'recruiter') {
        navigate('/recruiter/dashboard');
      } else {
        navigate('/');
      }
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address.');
      } else {
        setError(err.message);
      }
    }
    setLoading(false);
  }

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

          <form className="register-form" onSubmit={handleSubmit}>
            {error && <div className="form-error">{error}</div>}
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
              <input type="text" id="fullName" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" placeholder="you@example.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            {/* Student-specific fields */}
            {role === 'student' && (
              <>
                <div className="form-group">
                  <label htmlFor="rollNumber">Roll Number</label>
                  <input type="text" id="rollNumber" placeholder="CS2021001" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="branch">Branch/Department</label>
                  <select id="branch" value={branch} onChange={(e) => setBranch(e.target.value)}>
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
                  <input type="text" id="companyName" placeholder="Acme Inc." value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="designation">Your Designation</label>
                  <input type="text" id="designation" placeholder="HR Manager" value={designation} onChange={(e) => setDesignation(e.target.value)} />
                </div>
              </>
            )}

            {/* Password fields */}
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input type="password" id="password" placeholder="••••••••" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <span className="form-hint">Minimum 8 characters</span>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <input type="password" id="confirmPassword" placeholder="••••••••" autoComplete="new-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <button type="submit" className="register-btn" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
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
