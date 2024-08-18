// src/Footer.jsx
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="fofus-removebg-preview.png" alt="Logo" className="footer-logo-img" /> {/* Replace with your logo path */}
        </div>

        {/* Text and Social Media Links Section */}
        <div className="footer-content">
          <div className="footer-text">
            <p>© 2024 Fofus Keychains. All Rights Reserved.</p>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="facebook-app-symbol.png" alt="Facebook" /> {/* Replace with your icon paths */}
            </a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/fofus.keychains/?igsh=aDA4YzU3cnBuZzU5" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="instagram.png" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://mail.google.com/mail/u/0/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="email.png" alt="Mail" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
