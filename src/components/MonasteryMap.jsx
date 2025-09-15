// MonasteryMap.jsx
import React from 'react';
import './MonasteryMap.css';

const MonasteryMap = () => {
  return (
    <section className="MonasteryMap" id="monasteries">
      <h2 className="MonasteryMap__title">Interactive Monastery Map</h2>
      <p className="MonasteryMap__description">
        Explore the locations of sacred monasteries across Sikkim. Click on a pin to discover more.
      </p>

      <div className="MonasteryMap__map-container">
        <iframe
          title="Monasteries of Sikkim Map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1815121.284144967!2d87.60565551936988!3d27.59902341883307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smonastery%20in%20sikkim!5e0!3m2!1sen!2sin!4v1726383600000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MonasteryMap;