import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>Discover Sikkim's Monasteries Like Never Before</h1>
        <p>
          Immerse yourself in the rich culture, history, and spirituality of Sikkim’s ancient monasteries with 360° virtual tours and interactive experiences.
        </p>
        <a href="#virtual-tour" className="cta-button">Explore Virtual Tours</a>
      </div>
    </section>
  );
};

export default HeroSection;
