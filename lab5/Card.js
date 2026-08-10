import React from 'react';
import './card1.css';

const Card = ({ title, price, description }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <p className="card-price">₹{price}</p>
    </div>
  );
};

export default Card;
