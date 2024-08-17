// src/ProductCards.jsx
import React from 'react';
import './ProductCards.css'; // Import the CSS for styling

const products = [
  { id: 1, name: 'Deadpool Keychain', image: 'deadpool.webp' },
  { id: 2, name: 'Rusty Keychain', image: 'rusty.webp' },
  { id: 3, name: 'Buddha Keychain', image: 'buddha.webp' },
  { id: 4, name: 'Compass Keychain', image: 'compass.webp' },
  { id: 5, name: 'Cups Keychain', image: 'cups.webp' },
  { id: 6, name: 'Tiger Paw Keychain', image: 'tiger.webp' },
  { id: 7, name: 'Brawl Keychain', image: 'braw.webp' }
  // Add more products as needed
];

const ProductCards = () => {
  return (
    <div className="product-cards-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-name">{product.name}</div>
          <button className="buy-now-button">Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
