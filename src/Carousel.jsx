import React, { useState, useEffect } from 'react';
import './Carousel.css'; 

const Carousel = ({ images, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {/* <button className="prev" onClick={prevSlide}>❮</button> */}
      <div className="carousel-slides">
        {images.map((image, index) => (
          <div
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      {/* <button className="next" onClick={nextSlide}>❯</button> */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
