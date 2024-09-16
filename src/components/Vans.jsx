import React, { useState } from 'react';
import vanImage0 from './images/Rectangle-154.png';
import vanImage1 from './images/Rectangle-156.png';
import vanImage2 from './images/image-55.png';
import vanImage3 from './images/image-55.png';
import vanImage4 from './images/Rectangle-154.png';
import vanImage5 from './images/image-55.png';
import { Link } from 'react-router-dom';
import './Vans.css';

const vanData = [
  { name: "Modest Explorer", price: 60, type: "Simple", image: vanImage0, description: "modest-explorer.jpg" },
  { name: "Beach Bum", price: 80, type: "Rugged", image: vanImage1, description: "beach-bum.jpg" },
  { name: "Reliable Red", price: 100, type: "Luxury", image: vanImage2, description: "reliable-red.jpg" },
  { name: "Dreamfinder", price: 65, type: "Simple", image: vanImage3, description: "dreamfinder.jpg" },
  { name: "The Cruiser", price: 120, type: "Luxury", image: vanImage4, description: "the-cruiser.jpg" },
  { name: "Green Wonder", price: 70, type: "Rugged", image: vanImage5, description: "green-wonder.jpg" },
];

const Vans = () => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const clearFilters = () => {
    setFilter("");
  };

  const filteredVans = vanData.filter((van) => filter === "" || van.type === filter);

  return (
    <div className="van-options">
      <h1>Explore our van options</h1>
      <div className="filters">
        <button onClick={() => handleFilterChange("Simple")} className={filter === "Simple" ? "active" : ""}>
          Simple
        </button>
        <button onClick={() => handleFilterChange("Luxury")} className={filter === "Luxury" ? "active" : ""}>
          Luxury
        </button>
        <button onClick={() => handleFilterChange("Rugged")} className={filter === "Rugged" ? "active" : ""}>
          Rugged
        </button>
        <button className="allvans" style={{backgroundColor:"white", width:"120px", margin:"0px", height:"35px"}} onClick={clearFilters}>
          <a href="/vans" className="back-link" style={{fontSize:"10px", color:"black"}}>← Clear filters</a>
        </button>
      </div>
      <div className="van-list">
        {filteredVans.map((van) => (
          <Link to={`/Vans/${van.name}`} key={van.name} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="van-card">
              <img src={van.image} alt={van.name} />
              <h2>{van.name}</h2>
              <p>${van.price}/day</p>
              <span className={`tag ${van.type.toLowerCase()}`}>{van.type}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Vans;
