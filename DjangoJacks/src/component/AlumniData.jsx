function AlumniCard({ alumni }) {
  return (
    <div style={styles.alumniCard}>
      <img
        src={alumni.avatar || DEFAULT_AVATAR}
        alt={alumni.name}
        style={styles.alumniAvatar}
      />
      <h3>{alumni.name} <span>✔</span></h3>
      <p style={styles.alumniMeta}>{alumni.year}</p>
      <p style={styles.alumniMeta}>{alumni.degree}</p>
      <p style={styles.alumniMeta}>{alumni.department}</p>
      <p style={styles.alumniRole}>{alumni.role} @ {alumni.company}</p>
      <p style={styles.alumniLocation}>{alumni.location}</p>
      <div style={styles.alumniActions}>
        <button style={styles.profileBtn}>View Profile</button>
        <button style={styles.contactBtn}>Contact</button>
      </div>
    </div>
  );
}
