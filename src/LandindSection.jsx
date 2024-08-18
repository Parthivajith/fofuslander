// src/LandingSection.jsx
import React from 'react';
import './LandingSection.css'; // Import the CSS file for styling

const LandingSection = () => {
  return (
    <div className="landing-section">
      <div className="landing-text">
        <h1 className="landing-title">Welcome to Fofus Keychains</h1>
        <p className="landing-paragraph">
          Discover Your Unique Keychain<br /><br />
          At Fofus Keychains, we specialize in crafting high-quality PLA-made keychains, designing personal characters, and bringing your thoughts and memories to life.<br /><br />
          In our fast-paced lives, keychains combine practicality with portability, providing a constant reminder of your most cherished memories. By converting your unique experiences into custom keychains, we create lasting mementos that travel with you everywhere. This makes them not just a daily essential but also a perfectly heartfelt gift for those you care about.
        </p>
        <a href="https://ecommerce.orci.in/" className="landing-button">Shop Now</a> {/* Updated to link to the shop page */}
      </div>
      <div className="landing-image">
        <img src="/manufacture.jpg" alt="Product" className="landing-img" /> {/* Use the correct image path */}
      </div>
    </div>
  );
};

export default LandingSection;
