// src/LargeCard.jsx
import React from 'react';
import './LargeCard.css'; // Import the CSS for styling

const LargeCard = ({ title, content }) => {
  return (
    <div className="large-card">
      <h1 className="large-card-title">Why Choose Fofus Keychains?</h1>
      <p className="large-card-content">Fofus Keychains offers eco-friendly keychains made from PLA, a biodegradable and renewable material, promoting sustainability. They feature a diverse range of unique designs, regularly updated to suit various tastes and occasions. Customers can personalize their keychains with custom designs, colors, and messages. Each keychain is crafted with high-quality craftsmanship, ensuring durability and a polished finish.</p>
    </div>
  );
}

export default LargeCard;
