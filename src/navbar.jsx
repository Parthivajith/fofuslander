import React, { useState, useEffect } from 'react';
import './App.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolling ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-brand">
        <a href="#">
          <img src="fofus-removebg-preview.png" alt="Logo" className="logo" />
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="https://ecommerce.orci.in/">Shop Now</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
