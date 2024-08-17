import React from 'react';
import './ServicesSection.css'; // Import the CSS file for styling

const services = [
  {
    title: "Classic Keychains",
    description: "Timeless designs that never go out of style. Perfect for everyday use and gifting."
  },
  {
    title: "3D Printing",
    description: "High-quality 3D printing services for creating prototypes and custom products."
  },
  {
    title: "PLA Keychains",
    description: "Browse our collection of durable and stylish PLA keychains. Perfect for personal use or as thoughtful gifts."
  },
  {
    title: "Custom Personal Characters",
    description: "Work with us to design characters that capture your vision and bring them to life with 3D printing."
  },
  {
    title: "Memory & Thought Keychains",
    description: "Create a keychain that holds personal significance by incorporating your unique ideas and memories"
  },
  {
    title: "Shop Name Branding",
    description: "Elevate your brand with custom keychains designed to represent your business. Ideal for promotions, giveaways, or merchandise."
  },
  {
    title: "Sculptured Pieces",
    description: "Explore our sculpturing options for detailed and artistic pieces that make a statement. Perfect for custom projects and decorative items."
    },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Explore Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
