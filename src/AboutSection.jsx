// src/AboutSection.jsx
import React from 'react';
import './App.css'; // Import the single CSS file

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h2>Welcome to Fofus Keychains</h2>
        <p>
          Discover Your Unique Keychain<br/><br/>
          At Fofus Keychains, we specialize in crafting high-quality PLA-made keychains, designing personal characters, and bringing your thoughts and memories to life.<br/><br/>
          In our fast-paced lives, keychains combine practicality with portability, providing a constant reminder of your most cherished memories. By converting your unique experiences into custom keychains, we create lasting mementos that travel with you everywhere. This makes them not just a daily essential but also a perfectly heartfelt gift for those you care about.
        </p>
        <button className="about-button">Visit our store</button> {/* Added button */}
      </div>
      <div className="about-image">
        <img src="/manufacture.jpg" alt="About" className="about-img" /> {/* Fixed image path */}
      </div>
    </div>
  );
};

export default AboutSection;
