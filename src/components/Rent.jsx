import React from 'react';
import { useParams } from 'react-router-dom';
import vanImage0 from './images/Rectangle-154.png';
import vanImage1 from './images/Rectangle-156.png';
import vanImage2 from './images/image-55.png';
import vanImage3 from './images/image-55.png';
import vanImage4 from './images/Rectangle-154.png';
import vanImage5 from './images/image-55.png';
import { Link } from 'react-router-dom';

const vanData = [
  {
    name: "Modest Explorer",
    price: 60,
    type: "Simple",
    image: vanImage0,
    description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
  },
  {
    name: "Beach Bum",
    price: 80,
    type: "Rugged",
    image: vanImage1,
    description: "The Beach Bum is a van designed for the adventurous type. It's equipped with a surfboard rack, a cooler, and a portable grill. Perfect for a day at the beach or a weekend camping trip.",
  },
  {
    name: "Reliable Red",
    price: 100,
    type: "Luxury",
    image: vanImage2,
    description: "The Reliable Red is a van designed for comfort and luxury. It's equipped with a queen-sized bed, a full kitchen, and a bathroom with a shower. Perfect for a romantic getaway or a family vacation.",
  },
  {
    name: "Dreamfinder",
    price: 65,
    type: "Simple",
    image: vanImage3,
    description: "The Dreamfinder is a van designed for the free spirit. It's equipped with a hammock, a portable stove, and a cooler. Perfect for a weekend in the mountains or a road trip across the country.",
  },
  {
    name: "The Cruiser",
    price: 120,
    type: "Luxury",
    image: vanImage4,
    description: "The Cruiser is a van designed for the ultimate road trip. It's equipped with a king-sized bed, a full kitchen, and a bathroom with a shower. Perfect for a family vacation or a cross-country adventure.",
},
{
  name: "Green Wonder",
  price: 70,
  type: "Rugged",
  image: vanImage5,
  description: "The Green Wonder is a van designed for the eco-friendly adventurer. It's equipped with solar panels, a composting toilet, and a water tank. Perfect for a weekend in the woods or a road trip across the country.",
},
];

const Rent = () => {
const { name } = useParams(); // Retrieve the name parameter from the URL
const van = vanData.find((van) => van.name === name); // Find the van that matches the name parameter

if (!van) {
    return <div>Van not found</div>; 
  }

  return (
    <div className="container">
      <a href="/vans" className="back-link" style={{margin:"40px", fontSize:"20px", color:"black"}}>← Back to all vans</a>
      <div className="rent-info">
        {/* <img src={van.image} alt={van.name} style={{width:"100%", height:"10%", marginTop:"35px"}}/> */}
        <div className="hero-section" style={{ backgroundImage: `url(${van.image})`, width:"100%", height:"70vh", marginTop:"35px",backgroundAttachment:"fixed" }}></div>
        <div className="content" >
          <div className="tag">{van.type}</div>
          <h1 className="title">{van.name}</h1>
          <p className="price">${van.price}/day</p>
          <p className="description">{van.description}</p>
          <Link to={`/Rent/${van.name}`}><span className={`tag ${van.type.toLowerCase()}`}>Rent this van</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Rent;