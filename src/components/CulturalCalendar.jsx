import React from 'react';
import './CulturalCalendar.css';

const events = [
  {
    date: '2025-10-15',
    title: 'Losar Festival',
    description: 'Tibetan New Year celebration with traditional dances and rituals.',
  },
  {
    date: '2025-11-01',
    title: 'Cham Dance Festival',
    description: 'Masked dance performances held at Rumtek Monastery.',
  },
  {
    date: '2025-12-10',
    title: 'Saga Dawa',
    description: 'Celebration of Buddha’s birth, enlightenment, and death.',
  },
  {
    date: '2026-01-15',
    title: 'Tsechu Festival',
    description: 'Annual religious festival with cultural programs at Pemayangtse Monastery.',
  },
];

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

const CulturalCalendar = () => {
  return (
    <section className="CulturalCalendar" id="cultural-calendar">
      <h2 className="CulturalCalendar__title">Cultural Calendar</h2>
      <p className="CulturalCalendar__description">
        Discover upcoming events, festivals, and rituals across Sikkim's monasteries.
      </p>

      <ul className="CulturalCalendar__list">
        {events.map(({ date, title, description }, index) => (
          <li className="CulturalCalendar__item" key={index}>
            <div className="CulturalCalendar__date">{formatDate(date)}</div>
            <div className="CulturalCalendar__content">
              <h3 className="CulturalCalendar__event-title">{title}</h3>
              <p className="CulturalCalendar__event-description">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CulturalCalendar;
