/*import React, { useState } from 'react';
import vanImage0 from './images/Rectangle-154.png';
import vanImage1 from './images/Rectangle-156.png';
import vanImage2 from './images/image-55.png';
import vanImage3 from './images/image-55.png';
import vanImage4 from './images/Rectangle-154.png';
import vanImage5 from './images/image-55.png';
import './Vansdash.css';

const vanData = [
  { name: "Modest Explorer", price: 60, type: "Simple", image: vanImage0 },
  { name: "Beach Bum", price: 80, type: "Rugged", image: vanImage1 },
  { name: "Reliable Red", price: 100, type: "Luxury", image: vanImage2 },
  { name: "Dreamfinder", price: 65, type: "Simple", image: vanImage3 },
  { name: "The Cruiser", price: 120, type: "Luxury", image: vanImage4 },
  { name: "Green Wonder", price: 70, type: "Rugged", image: vanImage5 },
];

const VansDashboard = () => {
  const [selectedVan, setSelectedVan] = useState(vanData[0]);

  const handleVanClick = (van) => {
    setSelectedVan(van);
  };

  return (
    <div className="vans-dashboard-container">
      <header className="vans-dashboard-header">
        <h1>#CarRental</h1>
        <nav>
          <a href="#" className="nav-link">Host</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Vans</a>
        </nav>
      </header>

      <nav className="vans-sub-nav">
        <a href="#" className="sub-nav-link">Dashboard</a>
        <a href="#" className="sub-nav-link">Income</a>
        <a href="#" className="sub-nav-link active">Vans</a>
        <a href="#" className="sub-nav-link">Reviews</a>
      </nav>

      <main className="vans-dashboard-main">
        <h2>Your listed vans</h2>
        <div className="van-list">
          {vanData.map((van) => (
            <div
              key={van.name}
              className="van-card"
              onClick={() => handleVanClick(van)}
              style={{
                cursor: 'pointer',
                border: van.name === selectedVan.name ? '2px solid black' : '1px solid #ccc',
              }}
            >
              <img src={van.image} alt={van.name} />
              <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
                <span className={`tag ${van.type.toLowerCase()}`}>{van.type}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="selected-van-info">
          <h2>Selected Van</h2>
          <img src={selectedVan.image} alt={selectedVan.name} />
          <h3>{selectedVan.name}</h3>
          <p>Price: ${selectedVan.price}/day</p>
          <span className={`tag ${selectedVan.type.toLowerCase()}`}>{selectedVan.type}</span>
        </div>
      </main>
    </div>
  );
};

export default VansDashboard;*/