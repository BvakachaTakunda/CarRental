import React from 'react';
import { Link } from 'react-router-dom';
import image0 from './images/Rectangle-154.png';
import image1 from './images/Rectangle-156.png';
import image2 from './images/image-55.png';
import './Vansdash.css';

const vans = [
  { id: 1, name: 'Modest Explorer', price: 60, image: image0, Description: "modest-explorer.jpg" },
  { id: 2, name: 'Beach Bum', price: 80, image: image1, Description: "beach-bum.jpg" },
  { id: 3, name: 'Green Wonder', price: 70, image: image2, Description: "reliable-red.jpg" },
];

function VanList() {
  return (
    <div className="container">

<nav >
      <div className="nav-links" style={{display:"flex", margin:"0px"}}>
        <Link to="/Host" className="active"><h4 style={{ margin:"5px"}}>Dashboard</h4></Link>
        <Link to="/Income"><h4 style={{ margin:"5px"}}>Income</h4></Link>
        <Link to="/Vansdash"><h4 style={{ margin:"5px"}}>Vans</h4></Link>
        <Link to="/Reviews"><h4 style={{ margin:"5px"}}>Reviews</h4></Link>
      </div>
      </nav>

      <h2>Your listed vans</h2>
      <div className="van-list">
        {vans.map((van) => (
          <Link key={van.id} to={`/vans/${van.id}`} className="van-item">
            <img  src={van.image} alt={van.name} />
            <div className="van-info">
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default VanList;