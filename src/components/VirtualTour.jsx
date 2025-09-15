import React from 'react';
import './VirtualTour.css';
import image1 from "../assets/images/image1.jpg"
const VirtualTour = () => {
  return (
    <section className="VirtualTour" id="virtual-tour">
      <h2 className="VirtualTour__title">360° Virtual Tours of Monasteries</h2>
      <p className="VirtualTour__description">
        Experience the serene beauty of Sikkim’s monasteries from the comfort of your home.
      </p>
      <div className="VirtualTour__viewer">
        {/* Placeholder for 360° image */}
        <iframe
          title="Sample 360 Virtual Tour"
          src={image1}
          frameBorder="0"
          allowFullScreen
          className="VirtualTour__iframe"
        ></iframe>
      </div>
    </section>
  );
};

export default VirtualTour;
