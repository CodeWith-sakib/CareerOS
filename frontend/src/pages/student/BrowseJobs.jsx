import { Search, MapPin, Clock, Building2 } from 'lucide-react';
import './BrowseJobs.css';

const sampleJobs = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    company: 'Google',
    location: 'Bangalore',
    type: 'Internship',
    posted: '2 days ago',
    tags: ['React', 'Node.js', 'Python'],
  },
  {
    id: 2,
    title: 'Data Analyst',
    company: 'Infosys',
    location: 'Hyderabad',
    type: 'Full-time',
    posted: '5 days ago',
    tags: ['SQL', 'Power BI', 'Excel'],
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'TCS',
    location: 'Chennai',
    type: 'Full-time',
    posted: '1 week ago',
    tags: ['JavaScript', 'React', 'CSS'],
  },
];

export default function BrowseJobs() {
  return (
    <div className="browse-jobs">
      <h1 className="page-title">Browse Jobs</h1>
      <p className="page-subtitle">Find and apply to the latest campus placement opportunities</p>

      <div className="search-bar">
        <Search size={20} className="search-icon" />
        <input type="text" placeholder="Search jobs by title, company, or skills..." />
      </div>

      <div className="jobs-list">
        {sampleJobs.map((job) => (
          <div className="job-card" key={job.id}>
            <div className="job-card-top">
              <div>
                <h3 className="job-title">{job.title}</h3>
                <div className="job-meta">
                  <span><Building2 size={14} /> {job.company}</span>
                  <span><MapPin size={14} /> {job.location}</span>
                  <span><Clock size={14} /> {job.posted}</span>
                </div>
              </div>
              <span className={`job-type ${job.type === 'Internship' ? 'internship' : 'fulltime'}`}>
                {job.type}
              </span>
            </div>
            <div className="job-tags">
              {job.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
