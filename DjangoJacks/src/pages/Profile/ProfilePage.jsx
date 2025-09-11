import React, { useState } from 'react';

// --- SVG Icon Components ---
// These icons are used throughout the profile page for a clean, consistent look.

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
);

const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
);

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-left"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
);

const EmailIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-left"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);

const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-left"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>;

// Social Icons
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>;
const GitHubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const WebsiteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;

// Dashboard Icons
const PostedJobsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-icon"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const ApplicationsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const ReferralIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-icon active"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;
const EventsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const CampaignsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-icon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6v6l4 2"/></svg>;
const DonationsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-icon"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;


// --- Dummy Data for the Profile ---
const alumniData = {
    name: "Amit Grover",
    title: "UI/UX Designer",
    avatarUrl: "/public/Images/profile.webp",
    bio: "Full stack product designer with hands-on experience in solving problems for clients ranging from Real Estate, Hospitality, Rentals, On Demand Healthcare, IT Services & Social network among others. End-to-end user-centric-skills, with a defined process for engagement, a toolkit for collaboration & a user-centered approach to design.",
    skills: ["User Interface Designing", "UX", "UI", "Adobe XD", "Mobile Apps", "User Research", "Wireframing", "Information Architecture"],
    basicInfo: {
        age: "28 years",
        experience: "4 years",
        ctc: "12.5 Lac",
        location: "Pune, Maharastra",
        workphone: "+91 98123 55679",
        email: "amitgrover@gmail.com"
    },
    experience: [
        {
            logo: "/public/Images/OIP.webp",
            company: "Google",
            role: "Product & UI/UX Designer",
            period: "Apr 2024 - Present | Pune, India"
        },
        {
            logo: "/Images/tcs.jpeg",
            company: "tcs",
            role: "UI/UX Designer",
            period: "Jul 2022 - Jul 2024 | Bengaluru, India"
        },
        {
            logo: "https://placehold.co/48x48/8b5cf6/ffffff?text=RS",
            company: "Ramotion Studio",
            role: "Web Designer",
            period: "Apr 2021 - July 2022 | Bengaluru, India"
        }
    ],
    education: [
         {
            logo: "/public/Images/Nit.jpeg",
            institution: "NIT Trichy",
            degree: "Master of Technology",
            period: "2019 - 2022 | Hyderabad, India"
        },
        {
            logo: "/public/Images/Techno.png",
            institution: "Techno Main Salt Lake",
            degree: "Bachelor of Technology",
            period: "2015 - 2019 | Kolkata, India"
        }
    ],
    accomplishments: [
        { logo: "Images/bckg.jpg", title: "Best Designer Award", organization: "Infosys", year: "2020" },
        { logo: "Images/bckg1.webp", title: "Innovator of the Year", organization: "Pixel Studio", year: "2017" }
    ],
    donations: [
        { id: 1, campaign: "Annual Alumni Fund 2024", amount: "₹5,000", date: "2024-08-15" },
        { id: 2, campaign: "Tech Wing Renovation", amount: "₹10,000", date: "2024-03-22" },
        { id: 3, campaign: "Student Scholarship Program", amount: "₹2,500", date: "2023-11-01" },
    ],
    socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        website: "#",
    }
};

// --- CSS Styles ---
// We embed the CSS directly in the component using a <style> tag
const Styles = () => (
    <style>{`
        /* General Body Styles */
        .alumni-profile-page {
            background-color: #f1f5f9;
            min-height: 100vh;
            padding: 1rem;
            font-family: sans-serif;
        }

        /* Main Container */
        .profile-container {
            max-width: 80rem; /* 1280px */
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 1rem; /* 16px */
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            overflow: hidden;
        }

        /* Header */
        .profile-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid #e2e8f0;
        }

        .back-button, .share-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: none;
            border: 1px solid transparent;
            cursor: pointer;
            font-weight: 500;
            transition: color 0.2s ease-in-out;
        }
        .back-button {
            color: #475569;
        }
        .back-button:hover {
            color: #2563eb;
        }
        .share-button {
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            border-color: #cbd5e1;
            transition: background-color 0.2s ease-in-out;
        }
        .share-button:hover {
            background-color: #f1f5f9;
        }

        /* Profile Body Grid */
        .profile-body {
            display: grid;
            grid-template-columns: 1fr;
        }

        /* Sidebar */
        .profile-sidebar {
            padding: 1.5rem;
            border-right: 1px solid #e2e8f0;
        }
        .sidebar-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .avatar {
            width: 8rem; /* 128px */
            height: 8rem;
            border-radius: 9999px;
            margin-bottom: 1rem;
            border: 4px solid #dbeafe;
        }
        .profile-name {
            font-size: 1.5rem; /* 24px */
            font-weight: bold;
            color: #1e293b;
            margin: 0;
        }
        .profile-title {
            color: #64748b;
            margin-bottom: 1rem;
        }
        .profile-bio {
            font-size: 0.875rem; /* 14px */
            color: #475569;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }
        .sidebar-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .section-title {
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.75rem;
        }
        .skills-container {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        .skill-tag {
            background-color: #eff6ff;
            color: #3b82f6;
            font-size: 0.75rem; /* 12px */
            font-weight: 500;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
        }
        .notes-textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #cbd5e1;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            box-sizing: border-box;
            transition: border-color 0.2s, box-shadow 0.2s;
        }
        .notes-textarea:focus {
            outline: none;
            border-color: #2563eb;
            box-shadow: 0 0 0 2px #bfdbfe;
        }
        .notes-list {
            margin-top: 0.5rem;
            padding-left: 1.25rem;
            list-style: disc;
            font-size: 0.875rem;
            color: #64748b;
        }
        .add-note-button {
            width: 100%;
            margin-top: 0.5rem;
            background-color: #2563eb;
            color: white;
            font-weight: 600;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .add-note-button:hover {
            background-color: #1d4ed8;
        }

        /* Main Content */
        .main-content {
            padding: 1.5rem;
        }

        /* Social Links */
        .social-buttons-section {
            margin-bottom: 2rem;
            padding: 1.5rem 0;
            border-top: 1px solid #e2e8f0;
            border-bottom: 1px solid #e2e8f0;
            margin-top: 2rem;
        }
        .social-buttons-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
        .social-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            font-weight: 600;
            color: white;
            text-decoration: none;
            transition: opacity 0.2s;
        }
        .social-btn:hover {
            opacity: 0.9;
        }
        .btn-linkedin { background-color: #0A66C2; }
        .btn-github { background-color: #181717; }
        .btn-twitter { background-color: #1DA1F2; }
        .btn-portfolio { background-color: #6366f1; }
        
        /* Dashboard */
        .dashboard-section {
            margin-bottom: 2rem;
        }
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
        .dashboard-item {
            padding: 1rem;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            transition: all 0.2s ease-in-out;
        }
        .dashboard-item.clickable {
            cursor: pointer;
        }
        .dashboard-item.clickable:hover {
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            border-color: #cbd5e1;
        }
        .dashboard-item.active {
            background-color: #eff6ff;
            border-color: #bfdbfe;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        }
        .dashboard-icon {
            height: 1.5rem;
            width: 1.5rem;
            color: #64748b;
        }
        .dashboard-icon.active {
            color: #2563eb;
        }
        .dashboard-count {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1e293b;
            margin: 0;
        }
        .dashboard-item.active .dashboard-count {
            color: #1d4ed8;
        }
        .dashboard-label {
            font-size: 0.75rem;
            font-weight: 500;
            color: #64748b;
            margin: 0;
        }

        /* Basic Info Card */
        .basic-info-card {
            background-color: rgba(239, 246, 255, 0.5);
            border: 1px solid #bfdbfe;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 0;
        }
        .card-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #1e293b;
            margin-bottom: 1.5rem;
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem 1rem;
            font-size: 0.875rem;
            margin-bottom: 1.5rem;
        }
        .info-label {
            display: block;
            color: #64748b;
        }
        .info-value {
            font-weight: 500;
            color: #334155;
        }

        /* Buttons */
        .button-group {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        .btn {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid;
            cursor: pointer;
            transition: background-color 0.2s, color 0.2s;
        }
        .btn-primary {
            background-color: #2563eb;
            border-color: #2563eb;
            color: white;
        }
        .btn-primary:hover {
            background-color: #1d4ed8;
        }
        .btn-secondary {
            background-color: white;
            border-color: #cbd5e1;
            color: #334155;
        }
        .btn-secondary:hover {
            background-color: #f1f5f9;
        }
        .btn-success {
            background-color: #16a34a;
            border-color: #16a34a;
            color: white;
        }
        .btn-success:hover {
            background-color: #15803d;
        }

        .content-section {
            padding-bottom: 1rem;
            border-bottom: 1px solid #e2e8f0;
        }
        .content-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #1e293b;
            padding: 1rem 0;
        }
        .content-body {
            padding-bottom: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        .list-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }
        .list-item-logo {
            width: 3rem;
            height: 3rem;
            border-radius: 9999px;
            flex-shrink: 0;
        }
        .list-item-title {
            font-weight: 600;
            color: #334155;
            margin: 0 0 0.25rem 0;
        }
        .list-item-subtitle {
            color: #475569;
             margin: 0 0 0.25rem 0;
        }
        .list-item-meta {
            font-size: 0.875rem;
            color: #64748b;
             margin: 0;
        }
        
        /* Modals */
        .modal-backdrop {
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.3);
            -webkit-backdrop-filter: blur(4px);
            backdrop-filter: blur(4px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 50;
            padding: 1rem;
        }
        .modal-container {
            background-color: white;
            border-radius: 0.75rem;
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
            width: 100%;
            max-width: 32rem; /* 512px */
        }
        .booking-modal {
            max-width: 28rem; /* 448px */
        }
        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
        }
        .modal-title {
            font-size: 1.25rem;
            font-weight: bold;
            margin:0;
        }
        .modal-subtitle {
            font-size: 0.875rem;
            color: #64748b;
            margin:0;
        }
        .modal-body {
            padding: 1.5rem;
            max-height: 60vh;
            overflow-y: auto;
        }
        .donation-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .donation-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem;
            background-color: #f8fafc;
            border-radius: 0.5rem;
        }
        .donation-campaign {
            font-weight: 600;
            color: #1e293b;
            margin:0;
        }
        .donation-date {
            font-size: 0.875rem;
            color: #64748b;
            margin:0;
        }
        .donation-amount {
            font-weight: bold;
            font-size: 1.125rem;
            color: #16a34a;
            margin:0;
        }
        .modal-footer {
            padding: 1.5rem;
            background-color: #f8fafc;
            border-bottom-left-radius: 0.75rem;
            border-bottom-right-radius: 0.75rem;
            display: flex;
            gap: 0.75rem;
        }
        .modal-footer .btn {
            flex: 1;
        }

        /* Form Styles (for Booking Modal) */
        .form-container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .form-label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            color: #334155;
            margin-bottom: 0.25rem;
        }
        .form-input, .form-textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #cbd5e1;
            border-radius: 0.5rem;
            box-sizing: border-box;
        }
        .form-input:focus, .form-textarea:focus {
            outline: none;
            border-color: #2563eb;
            box-shadow: 0 0 0 2px #bfdbfe;
        }

        /* Icons */
        .icon {
            height: 1.25rem;
            width: 1.25rem;
        }
        .icon.icon-left {
            margin-right: 0.5rem;
        }

        /* Responsive Styles */
        @media (min-width: 640px) {
            .alumni-profile-page { padding: 1.5rem; }
            .info-grid { grid-template-columns: repeat(3, 1fr); }
            .button-group { flex-direction: row; }
            .social-buttons-container { grid-template-columns: repeat(4, 1fr); }
        }

        @media (min-width: 768px) {
            .dashboard-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (min-width: 1024px) {
            .alumni-profile-page { padding: 2rem; }
            .profile-body { grid-template-columns: 1fr 2fr; } /* Sidebar and main content */
            .dashboard-grid { grid-template-columns: repeat(6, 1fr); }
        }

        @media (min-width: 1280px) {
            .profile-body { grid-template-columns: 1fr 3fr; } /* Wider main content on large screens */
        }
    `}</style>
);


// --- Main App Component ---
export default function AlumniProfilePage() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");
    const [isDonationModalOpen, setDonationModalOpen] = useState(false);
    const [isBookingModalOpen, setBookingModalOpen] = useState(false);

    const handleAddNote = () => {
        if (newNote.trim()) {
            setNotes([...notes, newNote]);
            setNewNote("");
        }
    };

    const dashboardItems = [
        { id: 'jobs', icon: <PostedJobsIcon />, label: 'Posted Jobs', count: 0 },
        { id: 'apps', icon: <ApplicationsIcon />, label: 'Applications', count: 0 },
        { id: 'referral', icon: <ReferralIcon />, label: 'Referral Requests', count: 2, active: true },
        { id: 'events', icon: <EventsIcon />, label: 'Events', count: 0 },
        { id: 'campaigns', icon: <CampaignsIcon />, label: 'Campaigns', count: 0 },
        { id: 'donations', icon: <DonationsIcon />, label: 'My Donations', count: alumniData.donations.length, action: () => setDonationModalOpen(true) },
    ];

    return (
        <>
            <Styles />
            <div className="alumni-profile-page">
                <div className="profile-container">
                    {/* Header */}
                    <header className="profile-header">
                        <button className="back-button">
                            <BackIcon />
                            <span>Back</span>
                        </button>
                        <button className="share-button">
                            <ShareIcon />
                            <span>Share Profile</span>
                        </button>
                    </header>

                    {/* Main Body */}
                    <div className="profile-body">
                        {/* Left Sidebar */}
                        <aside className="profile-sidebar">
                            <div className="sidebar-header">
                                <img src={alumniData.avatarUrl} alt={alumniData.name} className="avatar" />
                                <h1 className="profile-name">{alumniData.name}</h1>
                                <h2 className="profile-title">{alumniData.title}</h2>
                                <p className="profile-bio">{alumniData.bio}</p>
                            </div>

                            <div className="sidebar-content">
                                <div>
                                    <h3 className="section-title">Skills</h3>
                                    <div className="skills-container">
                                        {alumniData.skills.map(skill => (
                                            <span key={skill} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="section-title">Add Notes</h3>
                                    <textarea
                                        value={newNote}
                                        onChange={(e) => setNewNote(e.target.value)}
                                        className="notes-textarea"
                                        rows="3"
                                        placeholder="Add notes for future reference"
                                    ></textarea>
                                    {notes.length > 0 && (
                                        <ul className="notes-list">
                                            {notes.map((note, index) => <li key={index}>{note}</li>)}
                                        </ul>
                                    )}
                                    <button
                                        onClick={handleAddNote}
                                        className="add-note-button"
                                    >
                                        Add Note
                                    </button>
                                </div>
                            </div>
                        </aside>

                        {/* Right Content */}
                        <main className="main-content">
                            {/* Basic Info */}
                            <div className="basic-info-card">
                                <h3 className="card-title">Basic Information</h3>
                                <div className="info-grid">
                                    <div><span className="info-label">AGE</span><span className="info-value">{alumniData.basicInfo.age}</span></div>
                                    <div><span className="info-label">YEARS OF EXPERIENCE</span><span className="info-value">{alumniData.basicInfo.experience}</span></div>
                                    <div><span className="info-label">PHONE</span><span className="info-value">{alumniData.basicInfo.workphone}</span></div>
                                    <div><span className="info-label">CTC</span><span className="info-value">{alumniData.basicInfo.ctc}</span></div>
                                    <div><span className="info-label">LOCATION</span><span className="info-value">{alumniData.basicInfo.location}</span></div>
                                    <div><span className="info-label">EMAIL</span><span className="info-value">{alumniData.basicInfo.email}</span></div>
                                </div>
                                <div className="button-group">
                                    <button className="btn btn-secondary"> <DownloadIcon /> Download Resume</button>
                                    <button className="btn btn-secondary"> <EmailIcon /> Send Email</button>
                                    <button onClick={() => setBookingModalOpen(true)} className="btn btn-primary"><CalendarIcon /> Book 1-to-1 Call</button>
                                </div>
                            </div>

                            {/* Social Buttons Section */}
                            <section className="social-buttons-section">
                                <div className="social-buttons-container">
                                    <a href={alumniData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn btn-linkedin">
                                        <LinkedInIcon />
                                        <span>LinkedIn</span>
                                    </a>
                                    <a href={alumniData.socials.github} target="_blank" rel="noopener noreferrer" className="social-btn btn-github">
                                        <GitHubIcon />
                                        <span>GitHub</span>
                                    </a>
                                    <a href={alumniData.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-btn btn-twitter">
                                        <TwitterIcon />
                                        <span>Twitter</span>
                                    </a>
                                    <a href={alumniData.socials.website} target="_blank" rel="noopener noreferrer" className="social-btn btn-portfolio">
                                        <WebsiteIcon />
                                        <span>Portfolio</span>
                                    </a>
                                </div>
                            </section>

                            {/* Dashboard Section */}
                            <section className="dashboard-section">
                                <div className="dashboard-grid">
                                    {dashboardItems.map(item => (
                                        <div key={item.id} onClick={item.action} className={`dashboard-item ${item.active ? 'active' : ''} ${item.action ? 'clickable' : ''}`}>
                                            {item.icon}
                                            <p className="dashboard-count">{item.count}</p>
                                            <p className="dashboard-label">{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Content Sections */}
                            <div className="content-sections-container">
                                {/* Experience Section */}
                                <div className="content-section">
                                    <h3 className="content-title">Experience</h3>
                                    <div className="content-body">
                                        {alumniData.experience.map((exp, index) => (
                                            <div key={index} className="list-item">
                                                <img src={exp.logo} alt={`${exp.company} logo`} className="list-item-logo" />
                                                <div>
                                                    <h4 className="list-item-title">{exp.company}</h4>
                                                    <p className="list-item-subtitle">{exp.role}</p>
                                                    <p className="list-item-meta">{exp.period}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Education Section */}
                                <div className="content-section">
                                    <h3 className="content-title">Education</h3>
                                    <div className="content-body">
                                        {alumniData.education.map((edu, index) => (
                                            <div key={index} className="list-item">
                                                <img src={edu.logo} alt={`${edu.institution} logo`} className="list-item-logo" />
                                                <div>
                                                    <h4 className="list-item-title">{edu.institution}</h4>
                                                    <p className="list-item-subtitle">{edu.degree}</p>
                                                    <p className="list-item-meta">{edu.period}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Accomplishments Section */}
                                <div className="content-section">
                                    <h3 className="content-title">Accomplishments</h3>
                                    <div className="content-body">
                                        {alumniData.accomplishments.map((acc, index) => (
                                            <div key={index} className="list-item">
                                                <img src={acc.logo} alt="" className="list-item-logo" />
                                                <div>
                                                    <h4 className="list-item-title">{acc.title}</h4>
                                                    <p className="list-item-subtitle">{acc.organization} - {acc.year}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                {/* Donation Modal */}
                {isDonationModalOpen && (
                    <div className="modal-backdrop">
                        <div className="modal-container">
                            <div className="modal-header">
                                <h3 className="modal-title">My Donations</h3>
                                <p className="modal-subtitle">Thank you for your generous contributions!</p>
                            </div>
                            <div className="modal-body">
                                <ul className="donation-list">
                                    {alumniData.donations.map(d => (
                                        <li key={d.id} className="donation-item">
                                            <div>
                                                <p className="donation-campaign">{d.campaign}</p>
                                                <p className="donation-date">{new Date(d.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                            </div>
                                            <p className="donation-amount">{d.amount}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => setDonationModalOpen(false)} className="btn btn-secondary">Close</button>
                                <button onClick={() => alert('Redirecting to donation page...')} className="btn btn-success">Make a New Donation</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Booking Modal */}
                {isBookingModalOpen && (
                    <div className="modal-backdrop">
                        <div className="modal-container booking-modal">
                            <div className="modal-header">
                                <h3 className="modal-title">Book a 1-to-1 Call</h3>
                                <p className="modal-subtitle">Schedule a mentoring session with {alumniData.name}.</p>
                            </div>
                            <div className="modal-body form-container">
                                <div>
                                    <label htmlFor="date" className="form-label">Select a Date</label>
                                    <input type="date" id="date" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="time" className="form-label">Select a Time Slot</label>
                                    <select id="time" className="form-input">
                                        <option>09:00 AM - 09:30 AM</option>
                                        <option>11:00 AM - 11:30 AM</option>
                                        <option>02:00 PM - 02:30 PM</option>
                                        <option>04:00 PM - 04:30 PM</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="notes" className="form-label">Notes (Optional)</label>
                                    <textarea id="notes" rows="3" placeholder="What would you like to discuss?" className="form-textarea"></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => setBookingModalOpen(false)} className="btn btn-secondary">Cancel</button>
                                <button onClick={() => { alert('Your booking request has been sent!'); setBookingModalOpen(false); }} className="btn btn-primary">Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

