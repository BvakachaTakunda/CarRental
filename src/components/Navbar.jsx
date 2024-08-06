import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/HeroSection">#CarRental</Link></div>
      <div className="nav-links">
        <Link to="/About">About</Link>
        <Link to="/Vans">Vans</Link>
      </div>
    </nav>
  );
}

export default Navbar;



