import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo" ><Link to="/HeroSection"><h3 style={{margin:"0px", color:"black"}}>#CarRental</h3></Link></div>
      <div className="nav-links" style={{display:"flex", margin:"0px"}}>
        <Link to="/Host"><h5 style={{ margin:"3px"}}>Host</h5></Link>
        <Link to="/About"><h5 style={{ margin:"3px"}}>About</h5></Link>
        <Link to="/Vans"><h5 style={{ margin:"3px",marginRight:"10px"}}>Vans</h5></Link>
      </div>
    </nav>
  );
}

export default Navbar;



