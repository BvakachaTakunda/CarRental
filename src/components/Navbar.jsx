import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo" ><Link to="/HeroSection"><h4 style={{margin:"0px", color:"black"}}>#CarRental</h4></Link></div>
      <div className="nav-links" style={{display:"flex", margin:"0px"}}>
        <Link to="/Rent/:name"><h4 style={{ margin:"1px"}}>Host</h4></Link>
        <Link to="/About"><h4 style={{ margin:"1px"}}>About</h4></Link>
        <Link to="/Vans"><h4 style={{ margin:"1px"}}>Vans</h4></Link>
      </div>
    </nav>
  );
}

export default Navbar;



