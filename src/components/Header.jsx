import React from 'react';
import './Header.css';

const Header = ({ scrollToSection }) => {
  return (
    <header className="Header">
      <div className="Header__logo">Monastery360</div>
      <nav className="Header__nav">
        <button onClick={() => scrollToSection('narrated-walkthrough')}>Walkthrough</button>
        <button onClick={() => scrollToSection('monastery-map')}>Map</button>
        <button onClick={() => scrollToSection('digital-archive')}>Archives</button>
        <button onClick={() => scrollToSection('cultural-calendar')}>Events</button>
        <button onClick={() => scrollToSection('booking-participation')}>Booking</button>
      </nav>
    </header>
  );
};

export default Header;
