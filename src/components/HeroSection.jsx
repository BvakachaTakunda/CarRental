
import React from 'react';
import vanImage from './images/image-53.png';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${vanImage})` }}>
      <div className="hero-content">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement.
          Rent the perfect van to make your perfect road trip.
        </p>
        <Link to="/Vans"><button className="hero-button">Find your van</button></Link>
      </div>
    </div>
  );
}

export default HeroSection;