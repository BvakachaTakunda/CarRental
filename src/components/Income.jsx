import React from 'react';
import './Income.css'; // Import the CSS file
import { Link } from 'react-router-dom';   

const IncomeDashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
  <Link to="/Host" className="active">Dashboard</Link>
  <Link to="/Income">Income</Link>
  <Link to="/Vansdash">Vans</Link>
  <Link to="/Reviews">Reviews</Link>
      </nav>
      
      <div className="income-summary">
        <h1>Income</h1>
        <p>Last <a href="#last30days">30 days</a></p>
        <p className="income-amount">$2,260</p>
        
        <div className="chart">
          <div className="bar-container">
            <div className="bar" style={{height: '250px'}}></div>
            <p>Ju</p>
          </div>
          <div className="bar-container">
            <div className="bar" style={{height: '230px'}}></div>
            <p>Au</p>
          </div>
          <div className="bar-container">
            <div className="bar" style={{height: '200px'}}></div>
            <p>Se</p>
          </div>
          <div className="bar-container">
            <div className="bar" style={{height: '180px'}}></div>
            <p>Oc</p>
          </div>
          <div className="bar-container">
            <div className="bar" style={{height: '200px', backgroundColor: '#FF8C00'}}></div>
            <p>No</p>
          </div>
          <div className="bar-container">
            <div className="bar" style={{height: '130px', backgroundColor: '#FF8C00'}}></div>
            <p>De</p>
          </div>
        </div>
      </div>
      
      <div className="transactions">
        <div className="transactions-header">
          <h2>Your transactions (3)</h2>
          <a href="#last30days" className="details-link">Last 30 days</a>
        </div>

        <div className="transaction-item">
          <p className="transaction-amount">$720</p>
          <p className="transaction-date">1/12/22</p>
        </div>

        <div className="transaction-item">
          <p className="transaction-amount">$560</p>
          <p className="transaction-date">10/11/22</p>
        </div>

        <div className="transaction-item">
          <p className="transaction-amount">$980</p>
          <p className="transaction-date">23/11/22</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeDashboard;