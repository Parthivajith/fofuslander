// src/HighlightsSection.jsx
import React from 'react';
import './HighlightsSection.css'; // Import the CSS file for styling

const HighlightsSection = () => {
  const highlights = [
    {
      title: 'Quality Craftsmanship',
      image: 'printer.webp',
      description: 'Our keychains are made with precision and care to ensure the highest quality.'
    },
    {
      title: 'Unique Designs',
      image: 'img-1.png',
      description: 'Each keychain design is unique and crafted to reflect your personal style.'
    },
    {
      title: 'Durability',
      image: 'img-2.png',
      description: 'We use only the most durable materials to ensure your keychain lasts for years.'
    },
    {
      title: 'Customizable Options',
      image: 'printer.jpg',
      description: 'Choose from various customization options to make your keychain truly yours.'
    }
  ];

  return (
    <div className="highlights-section">
      <h1 className="section-title">Our Keychain Highlights</h1>
      <div className="highlights-container">
        {highlights.map((highlight, index) => (
          <div className="highlight-item" key={index}>
            <img src={highlight.image} alt={highlight.title} className="highlight-image" />
            <div className="highlight-text">
              <h2 className="highlight-title">{highlight.title}</h2>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightsSection;
