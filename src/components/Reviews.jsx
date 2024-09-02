import React from 'react';
import './Reviews.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">

      <div className="sub-navbar">
      <Link to="/Host" className="active"><h4 style={{ margin:"5px"}}>Dashboard</h4></Link>
        <Link to="/Income"><h4 style={{ margin:"5px"}}>Income</h4></Link>
        <Link to="/Vansdash"><h4 style={{ margin:"5px"}}>Vans</h4></Link>
        <Link to="/Reviews"><h4 style={{ margin:"5px"}}>Reviews</h4></Link>
      </div>
      <div className="reviews-section">
        <h2>Your reviews <span className="small-text">last 30 days</span></h2>
        <div className="rating-overview">
          <div className="overall-rating">
            <span className="rating-value">5.0</span>
            {/* <AiFillStar color="#F2A900" /> */}
            <span className="rating-label">overall rating</span>
          </div>
          <div className="rating-bars">
            <div className="rating-bar">
              <span>5 stars</span>
              <div className="bar">
                <div className="fill" style={{ width: '100%' }}></div>
              </div>
              <span>100%</span>
            </div>
            <div className="rating-bar">
              <span>4 stars</span>
              <div className="bar">
                <div className="fill" style={{ width: '0%' }}></div>
              </div>
              <span>0%</span>
            </div>
            <div className="rating-bar">
              <span>3 stars</span>
              <div className="bar">
                <div className="fill" style={{ width: '0%' }}></div>
              </div>
              <span>0%</span>
            </div>
            <div className="rating-bar">
              <span>2 stars</span>
              <div className="bar">
                <div className="fill" style={{ width: '0%' }}></div>
              </div>
              <span>0%</span>
            </div>
            <div className="rating-bar">
              <span>1 star</span>
              <div className="bar">
                <div className="fill" style={{ width: '0%' }}></div>
              </div>
              <span>0%</span>
            </div>
          </div>
        </div>
        <div className="review-list">
          <h3>Reviews (2)</h3>
          <div className="review-item">
            <div className="review-header">
              {/* <AiFillStar color="#F2A900" />
              <AiFillStar color="#F2A900" />
              <AiFillStar color="#F2A900" />
              <AiFillStar color="#F2A900" />
              <AiFillStar color="#F2A900" /> */}
              <span className="review-author">Elliot</span>
              <span className="review-date">December 1, 2022</span>
            </div>
            <p>The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
          </div>
          <div className="review-item">
            <div className="review-header">
              {/* <AiFillStar color="#F2A900" />
              <AiFillStar color="#F2A900" />
              <AiFillStar color="#F2A900" />
              <AiFillStar color="#F2A900" />
              <AiFillStar color="#F2A900" /> */}
              <span className="review-author">Sandy</span>
              <span className="review-date">November 23, 2022</span>
            </div>
            <p>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;