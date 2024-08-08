
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
return  (
  <div className="van-rental-container">
    <div className='image-back'></div>
  <div className="van-text">
    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
    <p>
      Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
    </p>
    <p>
      Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
    </p>
    <div className="cta">
      <h2>Your destination is waiting. Your van is ready.</h2>
     <Link to="/Vans"><button>Explore our vans</button></Link>
    </div>
  </div>
</div>
);
};

export default About;