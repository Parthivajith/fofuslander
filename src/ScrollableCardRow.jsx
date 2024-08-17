import React from 'react';
import './ScrollableCardRow.css'; // Import the CSS for styling

const ScrollableCardRow = () => {
  const cardImages = [
    { src: '/deadpool.webp', name: 'Deadpool Keychain' },
    { src: '/rusty.webp', name: 'Rusty Keychain' },
    { src: '/buddha.webp', name: 'Buddha Keychain' },
    { src: '/compass.webp', name: 'Compass Keychain' },
    { src: '/cups.webp', name: 'Cups Keychain' },
    { src: '/cups.webp', name: 'Cups Keychain' },
    { src: '/compass.webp', name: 'Compass Keychain' }

  ];

  return (
    <div className="scrollable-card-row">
      {cardImages.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.src} alt={`Card ${index + 1}`} className="card-image" />
          <div className="card-name">{card.name}</div> {/* Card Name */}
          <button className="shop-now-button">Shop Now</button> {/* Shop Now Button */}
        </div>
      ))}
    </div>
  );
};

export default ScrollableCardRow;
