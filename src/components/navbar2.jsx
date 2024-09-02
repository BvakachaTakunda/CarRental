import React from 'react';
import './Navbar2.css';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links" style={{display:"flex", margin:"0px"}}>
        <Link to="/Host" className="active"><h6 style={{ margin:"0"}}>Dashboard</h6></Link>
        <Link to="/Income"><h6 style={{ margin:"1px"}}>Income</h6></Link>
        <Link to="/Vansdash"><h6 style={{ margin:"1px"}}>Vans</h6></Link>
        <Link to="/Reviews"><h6 style={{ margin:"1px"}}>Reviews</h6></Link>
      </div>
    </nav>
  );
}

export default Navbar;