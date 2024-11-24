import React from 'react';
import './Business.css';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

function Business() {
  return (
    <div className="business">
      <img src={business.imageSrc} alt={business.name} />
      <h2>{business.name}</h2>
      <p>{business.address}</p>
      <p>{business.city}, {business.state} {business.zipCode}</p>
      <p>{business.category}</p>
      <p>Rating: {business.rating} stars</p>
      <p>Review Count: {business.reviewCount} reviews</p>
    </div>
  );
}

export default Business;
