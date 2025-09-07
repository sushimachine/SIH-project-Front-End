import React from 'react';
import './styles.css'; // The CSS file for styling

// --- SVG Icon Components ---
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const RupeeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="M6 13h12"/><path d="M6 18h12"/><path d="M8 21V3"/><path d="M16 21V3"/></svg>;
const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>;
const BackArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>;


// --- Standalone Dummy Data for this page ---
const job = { 
    id: 1, 
    title: 'Frontend Developer', 
    company: 'Samsung', 
    logo: 'https://placehold.co/100x100/E3E3E3/000000?text=S', 
    location: 'Ahmedabad', 
    type: 'Full-time', 
    experience: '2-6 yrs', 
    salary: '₹8.0L - ₹10.0L', 
    skills: ['HTML', 'UI/UX Design', 'CSS', 'JavaScript'], 
    posted: '1 week ago',
    description: 'Samsung is seeking a passionate Frontend Developer to join our dynamic team. You will be responsible for building high-quality, scalable, and responsive web applications for our global customer base.',
    responsibilities: [
        'Develop new user-facing features using React.js.',
        'Build reusable components and front-end libraries for future use.',
        'Translate designs and wireframes into high-quality code.',
        'Optimize components for maximum performance across a vast array of web-capable devices and browsers.'
    ],
    qualifications: [
        'Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.',
        'Thorough understanding of React.js and its core principles.',
        'Experience with popular React.js workflows (such as Flux or Redux).',
        'Familiarity with modern front-end build pipelines and tools.'
    ],
    companyInfo: 'Samsung is a global leader in technology, opening new possibilities for people everywhere. Through relentless innovation and discovery, we are transforming the worlds of TVs, smartphones, wearable devices, tablets, and digital appliances.'
};


export default function JobDetailPage() {

    const handleBackClick = () => {
        // In a real app with a router, this would be: navigate('/jobs');
        alert("Navigating back to the job list.");
    };

    return (
        <div className="job-detail-page">
            <div className="job-detail-container">
                <button onClick={handleBackClick} className="back-button">
                    <BackArrowIcon /> Back to Job List
                </button>

                <div className="job-detail-grid">
                    {/* --- Main Content Column --- */}
                    <div className="job-detail-main">
                        <div className="job-detail-header">
                            <h1>{job.title}</h1>
                            <div className="company-name-header">{job.company}</div>
                            <div className="header-details">
                                <div className="detail-item"><LocationIcon /> {job.location}</div>
                                <div className="detail-item"><BriefcaseIcon /> {job.type}</div>
                                <div className="detail-item"><ClockIcon /> {job.experience}</div>
                                <div className="detail-item"><RupeeIcon /> {job.salary}</div>
                            </div>
                            <a href="#" className="apply-button-large">Apply Now</a>
                        </div>

                        <div className="job-section">
                            <h2>Job Description</h2>
                            <p>{job.description}</p>
                        </div>

                        <div className="job-section">
                            <h2>Responsibilities</h2>
                            <ul>
                                {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>

                        <div className="job-section">
                            <h2>Qualifications</h2>
                            <ul>
                                {job.qualifications.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                    </div>

                    {/* --- Sidebar Column --- */}
                    <div className="job-detail-sidebar">
                        <div className="sidebar-widget">
                            <h3>About {job.company}</h3>
                            <div className="company-info">
                                <img src={job.logo} alt={`${job.company} logo`} className="company-logo-large" />
                                <p>{job.companyInfo}</p>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <h3>Skills Required</h3>
                            <div className="card-skills">
                                {job.skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                            </div>
                        </div>
                        <div className="sidebar-widget">
                             <h3>Share this Job</h3>
                             <button className="share-button">
                                <ShareIcon /> Share
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}