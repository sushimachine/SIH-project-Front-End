import React, { useState, useEffect } from 'react';
import './styles.css';

// --- SVG Icon Components (unchanged) ---
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const RupeeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="M6 13h12"/><path d="M6 18h12"/><path d="M8 21V3"/><path d="M16 21V3"/></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;

// --- Main Page Component ---
export default function JobOpportunitiesPage() {
    // Dummy data (expanded to show pagination)
    const allJobs = [
        { id: 1, title: 'Frontend Developer', company: 'Samsung', logo: '/path/to/samsung-logo.png', location: 'Ahmedabad', type: 'Full-time', experience: '2-6 yrs', salary: '₹8.0L - ₹10.0L', skills: ['HTML', 'UI/UX Design', 'CSS'], status: 'Active', posted: '1 week ago' },
        { id: 2, title: 'AI Developer', company: 'Google', logo: '/path/to/google-logo.png', location: 'Remote', type: 'Full-time', experience: '4-6 yrs', salary: '₹20.0L - ₹22.0L', skills: ['AI', 'Machine Learning'], status: 'Active', posted: '1 week ago' },
        { id: 3, title: 'Frontend Developer', company: 'TCS', logo: '/path/to/tcs-logo.png', location: 'Gandhinagar', type: 'Full-time', experience: '3-6 yrs', salary: '₹5.0L - ₹7.0L', skills: ['UI/UX Design', 'React', 'CSS'], status: 'Active', posted: '1 week ago' },
        { id: 4, title: 'Python Developer', company: 'Operacell', logo: '/path/to/operacell-logo.png', location: 'Ahmedabad', type: 'Full-time', experience: '2-4 yrs', salary: '₹6.0L - ₹8.0L', skills: ['Python', 'Django', 'Flask'], status: 'Active', posted: '2 weeks ago' },
        { id: 5, title: 'Senior Java Developer', company: 'IBM', logo: '/path/to/ibm-logo.png', location: 'Gandhinagar', type: 'Full-time', experience: '3-7 yrs', salary: '₹12.0L - ₹15.0L', skills: ['Java', 'Spring'], status: 'Active', posted: '3 weeks ago' },
        { id: 6, title: 'Software Engineer', company: 'IBM', logo: '/path/to/ibm-logo.png', location: 'Gandhinagar', type: 'Full-time', experience: '0-0 yrs', salary: 'Not specified', skills: ['Java', 'Spring'], status: 'Active', posted: '1 month ago' },
        { id: 7, title: 'DevOps Engineer', company: 'Microsoft', logo: '/path/to/microsoft-logo.png', location: 'Remote', type: 'Full-time', experience: '5+ yrs', salary: '₹25.0L - ₹30.0L', skills: ['AWS', 'Docker', 'Kubernetes'], status: 'Active', posted: '2 days ago' },
        { id: 8, title: 'UX Designer', company: 'Swiggy', logo: '/path/to/swiggy-logo.png', location: 'Bangalore', type: 'Full-time', experience: '2-4 yrs', salary: '₹10.0L - ₹14.0L', skills: ['Figma', 'User Research'], status: 'Active', posted: '5 days ago' },
    ];

    // NEW: State and constants for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const JOBS_PER_PAGE = 6; // Display 6 jobs on each page

    // NEW: Pagination Logic
    // Calculate the total number of pages needed
    const totalPages = Math.ceil(allJobs.length / JOBS_PER_PAGE);
    
    // Calculate the jobs to display on the current page
    const indexOfLastJob = currentPage * JOBS_PER_PAGE;
    const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
    const currentJobs = allJobs.slice(indexOfFirstJob, indexOfLastJob);

    // Create an array of page numbers to render the buttons
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    
    // NEW: Event handlers for changing pages
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    const recentlyPostedJobs = allJobs.slice(0, 3);

    return (
        <div className="jobs-page">
            {/* --- Banner Section (No changes here) --- */}
            <div className="jobs-banner">
                <div className="jobs-banner-overlay">
                    <div className="banner-content">
                        <h1>Job Opportunities</h1>
                        <p>Explore {allJobs.length} active opportunities across various companies</p>
                        <div className="banner-stats">
                            <div className="stat-item"><div className="stat-number">12</div><div className="stat-label">Active Jobs</div></div>
                            <div className="stat-item"><div className="stat-number">9</div><div className="stat-label">Companies Hiring</div></div>
                            <div className="stat-item"><div className="stat-number">8</div><div className="stat-label">Locations</div></div>
                        </div>
                        <div className="banner-search">
                            <SearchIcon />
                            <input type="text" placeholder="Search jobs by title, company, skills..." />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Main Content Area (No changes here) --- */}
            <div className="jobs-main-content">
                <div className="jobs-filter-section">
                    <div className="filter-header">
                        <h3>Filter Jobs</h3>
                        <button className="clear-filters-btn">Clear Filters</button>
                    </div>
                    <div className="filter-controls">
                        <div className="filter-group"><label htmlFor="role-filter">Role</label><select id="role-filter"><option value="">All Roles</option></select></div>
                        <div className="filter-group"><label htmlFor="location-filter">Location</label><select id="location-filter"><option value="">All Locations</option></select></div>
                        <div className="filter-group"><label htmlFor="type-filter">Job Type</label><select id="type-filter"><option value="">All Types</option></select></div>
                    </div>
                </div>

                <div className="jobs-list-header">
                    <span>Showing {currentJobs.length} of {allJobs.length} jobs</span>
                    <div className="sort-by">
                        <label htmlFor="sort">Sort by</label>
                        <select id="sort"><option value="most-recent">Most Recent</option></select>
                    </div>
                </div>

                {/* --- Job Cards Grid (MODIFIED to use 'currentJobs') --- */}
                <div className="job-cards-grid">
                    {/* NEW: We now map over 'currentJobs' instead of 'allJobs' */}
                    {currentJobs.map(job => (
                        <div key={job.id} className="job-card">
                            <div className="card-header">
                                <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
                                <div className="header-text">
                                    <div className="job-title">{job.title}</div>
                                    <div className="company-name">{job.company}</div>
                                </div>
                                <div className="job-status">{job.status}</div>
                            </div>
                            <div className="card-details">
                                <div className="detail-item"><LocationIcon /> {job.location}</div>
                                <div className="detail-item"><BriefcaseIcon /> {job.type}</div>
                                <div className="detail-item"><ClockIcon /> {job.experience}</div>
                                <div className="detail-item"><RupeeIcon /> {job.salary}</div>
                            </div>
                            <div className="card-skills">
                                {job.skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                            </div>
                            <div className="card-footer">
                                <span className="posted-date">{job.posted}</span>
                                <a href="#" className="apply-button">Apply Now</a>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* --- Pagination Section (MODIFIED with dynamic buttons and logic) --- */}
                <div className="pagination">
                    <button 
                        onClick={handlePrevClick} 
                        className="page-nav" 
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {pageNumbers.map(number => (
                        <button 
                            key={number} 
                            onClick={() => handlePageClick(number)}
                            className={`page-number ${currentPage === number ? 'active' : ''}`}
                        >
                            {number}
                        </button>
                    ))}
                    <button 
                        onClick={handleNextClick} 
                        className="page-nav" 
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>

                {/* --- Recently Posted Jobs Section (No changes here) --- */}
                <div className="recently-posted-section">
                    <h2>Recently Posted Jobs</h2>
                    <div className="recent-jobs-container">
                        {recentlyPostedJobs.map(job => (
                             <div key={job.id} className="recent-job-card">
                                <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
                                <div className="recent-card-info">
                                    <div className="job-title">{job.title}</div>
                                    <div className="company-name">{job.company} - {job.location}</div>
                                </div>
                                <div className="posted-date">{job.posted}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* --- Footer Section (No changes here) --- */}
            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-about">
                        <h4>Job Board X</h4>
                        <p>A curated job board for the best jobs in the tech industry.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Post a Job</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <p>123 Tech Lane, Silicon Valley, CA</p>
                        <p>contact@jobboardx.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Job Board X. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}