import React from 'react';
import './Navbar2.css';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links" style={{display:"flex", margin:"0px"}}>
        <Link to="/Host" className="active">Dashboard</Link>
        <Link to="/Income"><h4 style={{ margin:"5px"}}>Income</h4></Link>
        <Link to="/Vansdash"><h4 style={{ margin:"5px"}}>Vans</h4></Link>
        <Link to="/Reviews"><h4 style={{ margin:"5px"}}>Reviews</h4></Link>
      </div>
    </nav>
  );
}

export default Navbar;