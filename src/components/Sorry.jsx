import React from 'react';

function NotFound() {
  return (
    <div>
      <div style={styles.container}>
        <h1>Sorry, the page you were looking for was not found.</h1>
        <button style={styles.button} onClick={() => window.location.href = '/HeroSection'}>
          Return to home
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#fffbf8',
    borderRadius: '8px',
  },
  button: {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
  },
};

export default NotFound;