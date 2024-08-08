import React from 'react';

function Navbar({ showHost }) {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>#CarRental</div>
      <ul style={styles.navLinks}>
        {showHost && <li>Host</li>} {/* Conditionally render Host link */}
        <li>About</li>
        <li>Vans</li>
      </ul>
      <div style={styles.icon}>
        <span role="img" aria-label="profile">👤</span>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f9f4f0',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
  },
  icon: {
    fontSize: '1.5rem',
  },
};

export default Navbar;