import React, { useState, useEffect } from "react";

// Generate a unique avatar URL using DiceBear API
const getRandomAvatar = (seed) => {
  const style = 'avataaars'; // Choose your preferred style
  const encodedSeed = encodeURIComponent(seed);
  return `https://api.dicebear.com/9.x/${style}/svg?seed=${encodedSeed}`;
};

export default function AlumniDirectory() {
  const [alumniList, setAlumniList] = useState([]);

  // Example: Later replace this with Django API call
  useEffect(() => {
    const dummyData = [
      { name: "John Doe", year: "Class of 2022", degree: "Bachelor of Engineering", department: "Computer Engineering", role: "Software Engineer", company: "Google", location: "San Francisco, CA" },
      { name: "Jane Smith", year: "Class of 2021", degree: "MBA", department: "Business Administration", role: "Product Manager", company: "Apple", location: "Cupertino, CA" },
      { name: "Rahul Kumar", year: "Class of 2020", degree: "Bachelor of Technology", department: "Mechanical Engineering", role: "Design Engineer", company: "Tesla", location: "Austin, TX" },
      { name: "Emily Johnson", year: "Class of 2019", degree: "Master of Science", department: "Data Science", role: "Data Scientist", company: "Microsoft", location: "Seattle, WA" },
      { name: "Amit Sharma", year: "Class of 2018", degree: "Bachelor of Commerce", department: "Finance", role: "Financial Analyst", company: "Goldman Sachs", location: "New York, NY" },
      { name: "Sophia Lee", year: "Class of 2023", degree: "Bachelor of Arts", department: "Psychology", role: "Research Assistant", company: "Stanford University", location: "Palo Alto, CA" },
    ];

// import { useEffect, useState } from "react";
// const [alumniList, setAlumniList] = useState([]);
// useEffect(() => {
//   fetch("http://localhost:8000/api/alumni/")  // Django REST endpoint
//     .then(res => res.json())
//     .then(data => setAlumniList(data));
// }, []);


{/* <section style={styles.alumniGrid}>
  {alumniList.map((alumni, idx) => (
    <AlumniCard key={idx} alumni={alumni} />
  ))}
</section> */}


    const alumniWithAvatars = dummyData.map(alumni => ({
      ...alumni,
      avatar: getRandomAvatar(alumni.name + Math.random()),
    }));

    setAlumniList(alumniWithAvatars);
  }, []);

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
    },
    bannerWrapper: {
      height: "450px",
      position: "relative", // Needed for overlay positioning
      color: "white",
      borderRadius: "15px",
      margin: "20px auto",
      maxWidth: "1200px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
      overflow: "hidden", // Ensures image stays within rounded corners
    },
    bannerImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover", // Stretches image to cover the container
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
    },
    bannerOverlay: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        background: "rgba(26, 31, 54, 0.85)", // Dark semi-transparent overlay
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        zIndex: 2, // Place overlay above the image
    },
    bannerTitle: {
      fontSize: "3rem",
      marginBottom: "10px",
    },
    bannerText: {
      fontSize: "1.2rem",
      marginBottom: "20px",
    },
    viewInsightsBtn: {
      padding: "10px 25px",
      marginBottom: "30px",
      fontSize: "1rem",
      fontWeight: "600",
      color: "white",
      background: "rgba(255, 255, 255, 0.15)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "25px",
      cursor: "pointer",
    },
    // --- Inside your styles object ---

   stats: {
     display: "flex",
     justifyContent: "center",
     gap: "60px", 
     margin: "20px 0",
   },

   // DELETE the old "statsBox" style and REPLACE it with these two:
   statsNumber: {
     fontSize: "4rem",      // Much larger font size
     fontWeight: "700",   // Bolder font
     margin: "0 0 5px 0", // Reset margin
     lineHeight: 1,         // Tighter line height
   },
   statsLabel: {
     fontSize: "1rem",
     textTransform: "uppercase",
     letterSpacing: "1px",
     opacity: 0.8,
   },

// ... continue with the rest of your styles (searchBar, etc.)
    // --- END MODIFIED STYLES ---
    searchBar: {
      marginTop: "30px",
      display: "flex",
      justifyContent: "center",
      width: "70%",
      maxWidth: "600px",
    },
    searchInput: {
      padding: "12px 20px",
      width: "100%",
      border: "1px solid #555",
      borderRadius: "25px 0 0 25px",
      background: "rgba(255, 255, 255, 0.9)",
      color: "#333",
      outline: "none",
      fontSize: "1rem",
    },
    searchButton: {
      padding: "12px 25px",
      border: "none",
      background: "#007bff",
      color: "white",
      borderRadius: "0 25px 25px 0",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "600",
    },
    // ... (rest of the styles are unchanged)
    filters: {
      padding: "20px 0",
      background: "#f8f9fa",
      borderBottom: "1px solid #e0e0e0",
    },
    filtersHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
    },
    filterOptions: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      alignItems: "center",
    },
    select: {
      appearance: "none", // Essential for custom styling
      border: "1px solid #ced4da",
      borderRadius: "20px", // Pill shape
      padding: "8px 32px 8px 16px", // Right padding for arrow space
      background: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e") no-repeat right 0.75rem center/16px 12px`,
      backgroundColor: "#ffffff",
      cursor: "pointer",
      height: "40px",
    },
    clearFiltersBtn: {
      padding: "8px 15px",
      border: "1px solid #dc3545",
      borderRadius: "6px",
      cursor: "pointer",
      background: "white",
      color: "#dc3545",
      fontWeight: "600",
    },
    alumniGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "24px",
      marginTop: "40px",
      paddingBottom: "40px",
    },
    alumniCard: {
      background: "white",
      borderRadius: "12px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
    },
    alumniAvatar: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      marginBottom: "15px",
      border: "3px solid #007bff",
      display: "block",
      margin: "0 auto 15px auto",
    },
    alumniMeta: {
      color: "#6c757d",
      fontSize: "0.9rem",
      margin: "5px 0",
    },
    alumniRole: {
      marginTop: "15px",
      fontWeight: "bold",
      color: "#343a40",
      fontSize: "1.1rem",
    },
    alumniLocation: {
      fontSize: "0.9rem",
      color: "#495057",
      marginBottom: "15px",
    },
    alumniActions: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-around",
      gap: "10px",
    },
    profileBtn: {
      padding: "10px 15px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      background: "#007bff",
      color: "white",
      fontWeight: "600",
    },
    contactBtn: {
      padding: "10px 15px",
      border: "1px solid #ced4da",
      borderRadius: "8px",
      cursor: "pointer",
      background: "#f1f3f5",
      color: "#495057",
      fontWeight: "600",
    },
    footer: {
      background: "#212529",
      color: "white",
      padding: "30px 0",
      textAlign: "center",
      marginTop: "60px",
    },
    footerLinks: {
      marginTop: "15px",
    },
  };

  return (
    <div>
      {/* Banner Section */}
      <div style={styles.bannerWrapper}>
        {/* Replace this src with the actual path to your image */}
        <img 
            src="./public/Images/1567666.jpg" 
            alt="Banner Background" 
            style={styles.bannerImg}
        />
        <div style={styles.bannerOverlay}>
            <button style={styles.viewInsightsBtn}>View Insights</button>
            <h1 style={styles.bannerTitle}>Alumni Directory</h1>
            <p style={styles.bannerText}>
                Connect with our growing community of <b>29+ alumni</b> across <b>13 cities</b>.
            </p>
            <div style={styles.stats}>
                <div style={styles.statsBox}>
                    <h2>29</h2>
                    <span>Total Alumni</span>
                </div>
                <div style={styles.statsBox}>
                    <h2>6</h2>
                    <span>Companies</span>
                </div>
                <div style={styles.statsBox}>
                    <h2>13</h2>
                    <span>Cities</span>
                </div>
            </div>
            <div style={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search alumni by name, skills, company…"
                    style={styles.searchInput}
                />
                <button style={styles.searchButton}>Search</button>
            </div>
        </div>
      </div>

      {/* Filters Section and Alumni Cards... */}
      <section style={styles.filters}>
        <div style={styles.container}>
          <div style={styles.filtersHeader}>
            <h3>Filters</h3>
            <button style={styles.clearFiltersBtn}>Clear all filters</button>
          </div>
          <div style={styles.filterOptions}>
            <select style={styles.select}><option>All Departments</option></select>
            <select style={styles.select}><option>All Batches</option></select>
            <select style={styles.select}><option>All Companies</option></select>
            <select style={styles.select}><option>All Locations</option></select>
            <select style={styles.select}><option>All Statuses</option></select>
            <select style={styles.select}><option>All Degrees</option></select>
          </div>
        </div>
      </section>

      <section style={styles.container}>
        <div style={styles.alumniGrid}>
          {alumniList.map((alumni, idx) => (
            <AlumniCard key={idx} alumni={alumni} styles={styles} />
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>© 2025 YourBrand. All rights reserved.</p>
          <nav style={styles.footerLinks}>
            <a href="#" style={{...styles.footerLink, ...styles.footerLinks["& a"]}}>Home  </a>
            <a href="#" style={{...styles.footerLink, ...styles.footerLinks["& a"]}}>About  </a>
            <a href="#" style={{...styles.footerLink, ...styles.footerLinks["& a"]}}>Contact  </a>
            <a href="#" style={{...styles.footerLink, ...styles.footerLinks["& a"]}}>Privacy Policy  </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function AlumniCard({ alumni, styles }) {
  return (
    <div style={styles.alumniCard}>
      <img src={alumni.avatar} alt={alumni.name} style={styles.alumniAvatar} />
      <h3>{alumni.name}</h3>
      <p style={styles.alumniMeta}>{alumni.year}</p>
      <p style={styles.alumniMeta}>{alumni.degree} — {alumni.department}</p>
      <p style={styles.alumniRole}>{alumni.role} @ {alumni.company}</p>
      <p style={styles.alumniLocation}>{alumni.location}</p>
      <div style={styles.alumniActions}>
        <button style={styles.profileBtn}>View Profile</button>
        <button style={styles.contactBtn}>Contact</button>
      </div>
    </div>
  );
}