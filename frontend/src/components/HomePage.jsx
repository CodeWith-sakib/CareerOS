import {
  Zap,
  BarChart3,
  ShieldCheck,
  GraduationCap,
  LayoutGrid,
  Settings,
  ArrowRight,
  Mail,
  MapPin,
  BookOpen,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const companyNames = [
  'Google', 'iQuanti', 'Lumen', 'Wipro', 'KEC', 'Infosys', 'Accenture',
  'Allen', 'TCS', 'Deloitte', 'JCB', 'Gammon', 'TVS', 'Capgemini',
  'Bajaj', 'Dalmia', 'FCA', 'Cognizant', 'HCL',
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <div className="brand-icon">C</div>
          <span className="brand-text">CareerOS</span>
        </div>
        <div className="navbar-links">
          <Link to="/login" className="nav-link">Sign In</Link>
          <Link to="/" className="nav-btn">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-badge">
        <Zap size={16} />
        <span>Powering Smart Campus Placements</span>
      </div>
      <h1 className="hero-title">
        Transform Your Campus<br />
        <span className="hero-highlight">Placement Experience</span>
      </h1>
      <p className="hero-subtitle">
        CareerOS is the all-in-one platform connecting students, recruiters, and
        placement cells with real-time collaboration and intelligent automation.
      </p>
    </section>
  );
}

function RoleCards() {
  return (
    <section className="roles">
      <h2 className="roles-heading">WHO ARE YOU ?</h2>
      <div className="roles-grid">
        {/* Student */}
        <div className="role-card role-student">
          <div className="role-icon student-icon">
            <GraduationCap size={28} />
          </div>
          <h3>Student</h3>
          <p>
            Find dream jobs, build your resume, track applications, and prepare
            for interviews — all in one place.
          </p>
          <a href="#" className="role-btn student-btn">
            Get Started <ArrowRight size={16} />
          </a>
        </div>

        {/* Recruiter */}
        <div className="role-card role-recruiter">
          <div className="role-icon recruiter-icon">
            <LayoutGrid size={28} />
          </div>
          <h3>Recruiter</h3>
          <p>
            Post jobs, manage applications, shortlist candidates, and schedule
            interviews efficiently.
          </p>
          <a href="#" className="role-btn recruiter-btn">
            Get Started <ArrowRight size={16} />
          </a>
        </div>

        {/* Admin */}
        <div className="role-card role-admin">
          <span className="auth-badge">
            <ShieldCheck size={14} /> Authorized Only
          </span>
          <div className="role-icon admin-icon">
            <Settings size={28} />
          </div>
          <h3>Admin</h3>
          <p>
            Manage the entire placement process — oversee students, recruiters,
            analytics, and generate reports.
          </p>
          <a href="#" className="role-btn admin-btn">
            Admin Login <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <p className="roles-footer">
        Already have an account?{' '}
        <a href="#" className="signin-link">Sign in here →</a>
      </p>
    </section>
  );
}

const features = [
  {
    icon: <Zap size={24} />,
    title: 'Smart Job Matching',
    desc: 'AI-powered job recommendations based on your profile, skills, and preferences.',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Real-time Updates',
    desc: 'Get instant notifications on application status changes and new opportunities.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Transparent Process',
    desc: 'Complete visibility into the recruitment pipeline with audit trails.',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Resume Builder',
    desc: 'Create professional resumes with industry-standard templates.',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Analytics Dashboard',
    desc: 'Comprehensive insights into placement trends and hiring patterns.',
  },
  {
    icon: <Users size={24} />,
    title: 'Multi-role Support',
    desc: 'Separate dashboards for students, recruiters, and placement administrators.',
  },
];

function FeaturesSection() {
  return (
    <section className="features">
      <h2 className="features-title">Everything You Need for Successful Placements</h2>
      <p className="features-subtitle">
        Powerful features designed to streamline the entire recruitment lifecycle
      </p>
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CompaniesSection() {
  return (
    <section className="companies">
      <h2 className="companies-title">Trusted by Top Companies</h2>
      <p className="companies-subtitle">
        Our students have been placed at leading organizations worldwide
      </p>
      <div className="companies-marquee">
        <div className="marquee-track">
          {[...companyNames, ...companyNames].map((name, i) => (
            <div className="company-logo" key={i}>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="brand-icon small">C</div>
            <span className="brand-text">CareerOS</span>
          </div>
          <p>
            Streamlining campus placements with smart technology. Connecting
            students, recruiters, and administrators on one platform.
          </p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">Sign In</a>
          <a href="#">Register</a>
          <a href="#">Reset Password</a>
        </div>
        <div className="footer-col">
          <h4>Portals</h4>
          <a href="#">Student Portal</a>
          <a href="#">Recruiter Portal</a>
          <a href="#">Admin Portal</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p className="contact-item">
            <Mail size={16} /> support@careeros.com
          </p>
          <p className="contact-item">
            <MapPin size={16} /> Training &amp; Placement Cell
          </p>
          <div className="social-links">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">⌘</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <RoleCards />
      <FeaturesSection />
      <CompaniesSection />
      <Footer />
    </div>
  );
}
