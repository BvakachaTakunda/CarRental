import React from 'react';
import './Vans.css';
import { Link } from 'react-router-dom';   
import modestExplorerImage from '../components/images/Rectangle-153.png';
import modestExplorer from '../components/images/Rectangle-154.png';
import modest from '../components/images/Rectangle-156.png';

const Vans = () => {
  const vans = [
    {
      name: 'Modest Explorer',
      price: '$60/day',
      imageUrl: modestExplorerImage,
    },
    {
      name: 'Beach Bum',
      price: '$80/day',
      imageUrl: modestExplorer,
    },
    {
      name: 'Green Wonder',
      price: '$70/day',
      imageUrl: modest,
    },
  ];

  return (
    <div className="container">
      <div className="header">
      <nav className="navbar">
  <Link to="/Host" className="active">Dashboard</Link>
  <Link to="/Income">Income</Link>
  <Link to="/Vansdash">Vans</Link>
  <Link to="/Reviews">Reviews</Link>
</nav>
      </div>

      <h1>Your listed vans</h1>

      <div className="vans-list">
        {vans.map((van, index) => (
          <div className="van-card" key={index}>
            <img src={modestExplorerImage} alt={van.name} className="van-image" />
            <div className="van-details">
              <p className="van-name">{van.name}</p>
              <p className="van-price">{van.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vans;