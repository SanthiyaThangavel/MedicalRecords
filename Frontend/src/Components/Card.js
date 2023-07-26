import React from 'react';
import './Card.css'; // Make sure to create this file and add the CSS styles
import { Link } from 'react-router-dom';

const Card = ({ userData }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>Personal Profile</h2>
        <p>Name: {userData.name}</p>
        <p>Gender: {userData.gender}</p>
        <p>Age: {userData.age}</p>
        <p>Contact: {userData.contact}</p>
        <p>Address: {userData.address}</p>
        <p>Insurance: {userData.insurance}</p>
      </div>
      <div>
        <h5>
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            Return to Home
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Card;
