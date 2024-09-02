import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Host');
    } catch (error) {
      console.error(error.message);
      alert('Invalid email or password');
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#fffbf8',
      borderRadius: '8px',
    }}>
      <h1 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
      }}>Sign in to your account</h1>
      <form onSubmit={handleSignIn} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          style={{
            padding: '0.75rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{
            padding: '0.75rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
          required
        />
        <button type="submit" style={{
          padding: '0.75rem',
          fontSize: '1rem',
          backgroundColor: '#f77f31',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '1rem',
          minWidth: '350px',
        }}>Sign In</button>
      </form>
      <p style={{
        marginTop: '1rem',
        fontSize: '1rem',
      }}>
        Don’t have an account?{'./Signup'}
        <Link to="/Signup" style={{
          color: '#f77f31',
          textDecoration: 'none',
        }}>Create one now</Link>
      </p>
    </div>
  );
};

export default SignIn;