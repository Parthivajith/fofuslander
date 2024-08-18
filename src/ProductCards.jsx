// src/ProductCards.jsx
import React from 'react';
import './ProductCards.css'; // Import the CSS for styling

const products = [
  { id: 1, name: 'Deadpool Keychain', image: 'deadpool.webp', link:"https://ecommerce.orci.in/product-page/deadpool-face" },
  { id: 2, name: 'Rusty Keychain', image: 'rusty.webp', link:"https://ecommerce.orci.in/product-page/rusty-keychain" },
  { id: 3, name: 'Buddha Keychain', image: 'buddha.webp', link:"https://ecommerce.orci.in/product-page/buddha-keychain" },
  { id: 4, name: 'Compass Keychain', image: 'compass.webp', link:"https://ecommerce.orci.in/product-page/compass-keychain" },
  { id: 5, name: 'Cups Keychain', image: 'cups.webp', link:"https://ecommerce.orci.in/product-page/cup-keychain" },
  { id: 6, name: 'Tiger Paw Keychain', image: 'tiger.webp', link:"https://ecommerce.orci.in/product-page/tiger-paw-keychain" },
  { id: 7, name: 'Brawl Keychain', image: 'braw.webp', link:"https://ecommerce.orci.in/product-page/brawlstar-keychain" },
  // Add more products as needed
];

const ProductCards = () => {
  return (
    <div className="product-cards-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-name">{product.name}</div>
          <a className="buy-now-button" href={product.link} target='_blank'>Buy Now</a>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
