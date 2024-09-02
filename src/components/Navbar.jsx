import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo" ><Link to="/HeroSection"><h3 style={{margin:"0px", color:"black"}}>#CarRental</h3></Link></div>
      <div className="nav-links" style={{display:"flex", margin:"0px"}}>
        <Link to="/Host"><h4 style={{ margin:"2px"}}>Host</h4></Link>
        <Link to="/About"><h4 style={{ margin:"2px"}}>About</h4></Link>
        <Link to="/Vans"><h4 style={{ margin:"2px",marginRight:"5px"}}>Vans</h4></Link>
      </div>
    </nav>
  );
}

export default Navbar;



