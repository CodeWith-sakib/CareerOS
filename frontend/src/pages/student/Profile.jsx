import { User, Mail, Hash, BookOpen } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import './Profile.css';

export default function Profile() {
  const { currentUser, userData } = useAuth();

  return (
    <div className="profile-page">
      <h1 className="page-title">Profile</h1>
      <p className="page-subtitle">Manage your personal information</p>

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <User size={40} />
          </div>
          <div>
            <h2 className="profile-name">{currentUser?.displayName || 'Student'}</h2>
            <p className="profile-role">Student</p>
          </div>
        </div>

        <div className="profile-fields">
          <div className="profile-field">
            <label><User size={16} /> Full Name</label>
            <input type="text" defaultValue={currentUser?.displayName || ''} />
          </div>
          <div className="profile-field">
            <label><Mail size={16} /> Email</label>
            <input type="email" defaultValue={currentUser?.email || ''} readOnly />
          </div>
          <div className="profile-field">
            <label><Hash size={16} /> Roll Number</label>
            <input type="text" defaultValue={userData?.rollNumber || ''} />
          </div>
          <div className="profile-field">
            <label><BookOpen size={16} /> Branch/Department</label>
            <input type="text" defaultValue={userData?.branch || ''} />
          </div>
        </div>

        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
}
