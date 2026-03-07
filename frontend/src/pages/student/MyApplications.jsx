import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import './MyApplications.css';

export default function MyApplications() {
  return (
    <div className="my-applications">
      <h1 className="page-title">My Applications</h1>
      <p className="page-subtitle">Track all your job applications in one place</p>

      <div className="app-filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Pending</button>
        <button className="filter-btn">Shortlisted</button>
        <button className="filter-btn">Rejected</button>
      </div>

      <div className="applications-empty">
        <FileText size={48} className="empty-icon" />
        <h3>No applications yet</h3>
        <p>You haven't applied to any jobs yet. Start browsing available positions.</p>
        <Link to="/student/browse-jobs" className="empty-btn">Browse Jobs</Link>
      </div>
    </div>
  );
}
