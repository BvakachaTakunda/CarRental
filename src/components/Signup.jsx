
// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from './Firebase';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert('User signed in successfully!');
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSignIn}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit">Sign In</button>
//     </form>
//   );
// };

// export default SignIn;

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/Signin');
    } catch (error) {
      console.error(error.message);
      alert('Error creating account');
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '40px auto',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333',
      }}>Create an account</h1>
      <form onSubmit={handleSignUp} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '100%',
          }}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '100%',
          }}
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '100%',
          }}
          required
        />
        <button type="submit" style={{
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#f77f31',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
        }}>Sign Up</button>
      </form>
      <p style={{
        marginTop: '20px',
        fontSize: '16px',
        color: '#666',
      }}>
        Already have an account?{' '}
        <Link to="/Signin" style={{
          color: '#f77f31',
          textDecoration: 'none',
        }}>Sign in now</Link>
      </p>
    </div>
  );
};

export default SignUp;