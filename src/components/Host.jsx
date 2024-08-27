import React from 'react';
import './Host.css';
import { Link } from 'react-router-dom';
import modestExplorerImage from '../components/images/Rectangle-156.png';
import beachBumImage from '../components/images/Rectangle-156.png';
import greenWonderImage from '../components/images/Rectangle-162.png';

const Host = () => {
  return (
    <div className="dashboard-container">
      <nav >
      <div className="nav-links" style={{display:"flex", margin:"0px"}}>
        <Link to="/Host" className="active"><h4 style={{ margin:"5px"}}>Dashboard</h4></Link>
        <Link to="/Income"><h4 style={{ margin:"5px"}}>Income</h4></Link>
        <Link to="/Vansdash"><h4 style={{ margin:"5px"}}>Vans</h4></Link>
        <Link to="/Reviews"><h4 style={{ margin:"5px"}}>Reviews</h4></Link>
      </div>
      </nav>

      <div className="income-card">
        <h1>Welcome!</h1>
        <div className="income-details">
          <div>
            <p>Income last <Link to="#last30days">30 days</Link></p>
            <p className="income-amount">$2,260</p>
          </div>
          <Link to="#details" className="details-link">Details</Link>
        </div>
      </div>

      <div className="review-card">
        <div className="review-details">
          <p>Review score</p>
          <Link to="#details" className="details-link">Details</Link>
        </div>
        <p className="review-score">★ 5.0/5</p>
      </div>

      <div className="vans-list">
        <div className="vans-header">
          <h2>Your listed vans</h2>
          <Link to="#viewall" className="viewall-link">View all</Link>
        </div>

        <div className="van-item">
          <img src={modestExplorerImage} alt="Modest Explorer" className="van-image" />
          <div>
            <h3>Modest Explorer</h3>
            <p>$60/day</p>
          </div>
          <Link to="#edit" className="edit-link">Edit</Link>
        </div>

        <div className="van-item">
          <img src={beachBumImage} alt="Beach Bum" className="van-image" />
          <div>
            <h3>Beach Bum</h3>
            <p>$80/day</p>
          </div>
          <Link to="#edit" className="edit-link">Edit</Link>
        </div>

        <div className="van-item">
          <img src={greenWonderImage} alt="Green Wonder" className="van-image" />
          <div>
            <h3>Green Wonder</h3>
            <p>$70/day</p>
          </div>
          <Link to="#edit" className="edit-link">Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default Host;