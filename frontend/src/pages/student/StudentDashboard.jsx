import { Link } from 'react-router-dom';
import {
    FileText,
    Calendar,
    CheckCircle,
    Briefcase,
    File,
    UserCheck,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import './StudentDashboard.css';

const stats = [
    { label: 'Applications', value: 0, icon: FileText, color: '#3b82f6' },
    { label: 'Interviews', value: 0, icon: Calendar, color: '#8b5cf6' },
    { label: 'Offers', value: 0, icon: CheckCircle, color: '#10b981' },
    { label: 'Jobs Available', value: 0, icon: Briefcase, color: '#ef4444' },
];

const quickActions = [
    { label: 'Browse Available Jobs', icon: Briefcase, to: '/student/browse-jobs', color: '#3b82f6' },
    { label: 'Update Resume', icon: File, to: '/student/resume', color: '#8b5cf6' },
    { label: 'Complete Profile', icon: UserCheck, to: '/student/profile', color: '#10b981' },
];

export default function StudentDashboard() {
    const { currentUser } = useAuth();


    return (
        <div className="dashboard">
        <h1 className="dashboard-title">Welcome back, {currentUser?.displayName || 'Student'}!</h1>
        <p className="dashboard-subtitle">Here's your placement dashboard overview</p>

        {/* Stats */}
        <div className="stats-grid">
            {stats.map((s) => (
            <div className="stat-card" key={s.label}>
                <div className="stat-info">
                <span className="stat-label">{s.label}</span>
                <span className="stat-value">{s.value}</span>
                </div>
                <div className="stat-icon" style={{ color: s.color, background: s.color + '15' }}>
                <s.icon size={24} />
                </div>
            </div>
            ))}
        </div>

        {/* Quick actions + Recent applications */}
        <div className="dashboard-row">
            <div className="dashboard-card">
            <h2>Quick Actions</h2>
            <div className="quick-actions">
                {quickActions.map((a) => (
                <Link to={a.to} className="quick-action" key={a.label}>
                    <a.icon size={18} style={{ color: a.color }} />
                    <span style={{ color: a.color }}>{a.label}</span>
                </Link>
                ))}
            </div>
            </div>
            <div className="dashboard-card">
            <h2>Recent Applications</h2>
            <div className="empty-state">
                <FileText size={40} className="empty-icon" />
                <p>No applications yet</p>
                <Link to="/student/browse-jobs" className="empty-link">Start applying to jobs</Link>
            </div>
            </div>
        </div>
        </div>
    );
    }
