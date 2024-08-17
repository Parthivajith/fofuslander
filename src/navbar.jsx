import React from 'react';
import './App.css' 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#">
          <img src='public\fofus-removebg-preview.png' alt="Logo" className="logo" />
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#shop">Shop Now</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
