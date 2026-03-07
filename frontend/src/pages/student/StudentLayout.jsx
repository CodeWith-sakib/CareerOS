import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
Home,
Briefcase,
FileText,
Calendar,
File,
User,
LogOut,
Bell,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import './StudentLayout.css';

const navItems = [
{ to: '/student/dashboard', icon: Home, label: 'Dashboard' },
{ to: '/student/browse-jobs', icon: Briefcase, label: 'Browse Jobs' },
{ to: '/student/applications', icon: FileText, label: 'My Applications' },
{ to: '/student/interviews', icon: Calendar, label: 'Interviews' },
{ to: '/student/resume', icon: File, label: 'Resume' },
{ to: '/student/profile', icon: User, label: 'Profile' },
];

export default function StudentLayout() {
const { currentUser, logout } = useAuth();
const navigate = useNavigate();

async function handleLogout() {
    await logout();
    navigate('/');
}

return (
    <div className="student-layout">
    {/* Sidebar */}
    <aside className="sidebar">
        <div className="sidebar-top">
        <div className="sidebar-brand">
            <div className="brand-icon">C</div>
            <span className="brand-text">CareerOS</span>
        </div>
        <nav className="sidebar-nav">
            {navItems.map((item) => (
            <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
                }
            >
                <item.icon size={20} />
                <span>{item.label}</span>
            </NavLink>
            ))}
        </nav>
        </div>
        <div className="sidebar-bottom">
        <div className="sidebar-user">
            <div className="sidebar-avatar">
            <User size={20} />
            </div>
            <div className="sidebar-user-info">
            <span className="sidebar-user-name">
                {currentUser?.displayName || 'Student'}
            </span>
            <span className="sidebar-user-email">
                {currentUser?.email}
            </span>
            </div>
        </div>
        <button className="sidebar-logout" onClick={handleLogout}>
            <LogOut size={18} />
            <span>Sign Out</span>
        </button>
        </div>
    </aside>

    {/* Main content */}
    <main className="student-main">
        <header className="student-header">
        <div className="header-right">
            <button className="notif-btn">
            <Bell size={20} />
            <span className="notif-dot" />
            </button>
        </div>
        </header>
        <div className="student-content">
        <Outlet />
        </div>
    </main>
    </div>
);
}
