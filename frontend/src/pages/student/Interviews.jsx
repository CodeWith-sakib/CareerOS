import { Calendar } from 'lucide-react';
import './Interviews.css';

export default function Interviews() {
  return (
    <div className="interviews">
      <h1 className="page-title">Interviews</h1>
      <p className="page-subtitle">View and manage your upcoming and past interviews</p>

      <div className="interview-tabs">
        <button className="tab-btn active">Upcoming</button>
        <button className="tab-btn">Completed</button>
      </div>

      <div className="interviews-empty">
        <Calendar size={48} className="empty-icon" />
        <h3>No interviews scheduled</h3>
        <p>When you get shortlisted for a position, your interview details will appear here.</p>
      </div>
    </div>
  );
}
