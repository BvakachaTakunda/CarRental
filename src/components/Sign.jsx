/*import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is in the same directory

function SignIn() {
  return (
    <div>
      <Navbar showHost={true} /> {/* Pass showHost as true to display Host link */
      /*<div style={styles.container}>
        <h1>Sign in to your account</h1>
        <form style={styles.form}>
          <input type="email" placeholder="Email address" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button style={styles.button}>Sign in</button>
        </form>
        <p>
          Don’t have an account?{' '}
          <a href="/signup" style={styles.link}>Create one now</a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  // Your existing styles here
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
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#fffbf8',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#ff914d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  link: {
    color: '#ff914d',
    textDecoration: 'none',
  },
};

export default function App() {
  return (
    <div>
      <Navbar />
      <SignIn />
    </div>
  );
};

exportdefaultSignIn;*/

import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Sign in to your account</h1>
      <form style={styles.form}>
        <input
          type="email"
          placeholder="Email address"
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />
       <Link to={`/Sorry`}><button type="submit" style={styles.button}>Sign in</button></Link> 
      </form>
      <p style={styles.text}>
        Don’t have an account?{' '}
        <a href="/signup" style={styles.link}>Create one now</a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#fffbf8',
    borderRadius: '8px',
  },
  header: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#f77f31',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
    minWidth: '400px',
  },
  text: {
    marginTop: '1rem',
    fontSize: '1rem',
  },
  link: {
    color: '#f77f31',
    textDecoration: 'none',
  },
};

export default SignIn;