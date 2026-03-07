import { Link } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand">
            <div className="brand-icon">C</div>
            <span className="brand-text">CareerOS</span>
          </Link>
          <div className="navbar-links">
            <Link to="/login" className="nav-link">Sign In</Link>
            <Link to="/" className="nav-btn">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Login Card */}
      <div className="login-page">
        <div className="login-card">
          <div className="login-logo">
            <div className="login-logo-icon">C</div>
          </div>
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to your CareerOS account</p>

          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>
            <div className="form-row">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            <button type="submit" className="login-btn">Sign In</button>
          </form>

          <p className="login-footer">
            Don't have an account? <Link to="/" className="signup-link">Sign up</Link>
          </p>
          <Link to="/" className="back-home">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
