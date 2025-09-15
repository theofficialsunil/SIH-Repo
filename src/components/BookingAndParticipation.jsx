import React, { useState } from 'react';
import './BookingAndParticipation.css';

const monasteries = [
  'Rumtek Monastery',
  'Pemayangtse Monastery',
  'Tashiding Monastery',
  'Enchey Monastery',
];

const events = [
  'Losar Festival',
  'Cham Dance Festival',
  'Saga Dawa',
  'Tsechu Festival',
];

const BookingAndParticipation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    monastery: '',
    event: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Form Submitted:', formData);
    setSubmitted(true);
    // Clear form or keep data based on preference
  };

  return (
    <section className="BookingAndParticipation" id="booking-participation">
      <h2 className="BookingAndParticipation__title">Book Your Visit or Participate</h2>
      <p className="BookingAndParticipation__description">
        Fill in the form below to book a visit or participate in cultural events at Sikkim’s monasteries.
      </p>

      {submitted && (
        <div className="BookingAndParticipation__success">
          Thank you for your submission! We will contact you soon.
        </div>
      )}

      <form className="BookingAndParticipation__form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
        />

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="example@mail.com"
        />

        <label htmlFor="phone">Phone Number*</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+91 98765 43210"
        />

        <label htmlFor="monastery">Select Monastery*</label>
        <select
          id="monastery"
          name="monastery"
          value={formData.monastery}
          onChange={handleChange}
          required
        >
          <option value="">-- Choose Monastery --</option>
          {monasteries.map((m, i) => (
            <option key={i} value={m}>
              {m}
            </option>
          ))}
        </select>

        <label htmlFor="event">Select Event/Festival</label>
        <select
          id="event"
          name="event"
          value={formData.event}
          onChange={handleChange}
        >
          <option value="">-- Choose Event (optional) --</option>
          {events.map((ev, i) => (
            <option key={i} value={ev}>
              {ev}
            </option>
          ))}
        </select>

        <label htmlFor="message">Message / Comments</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any special requests or questions"
        />

        <button type="submit" className="BookingAndParticipation__submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default BookingAndParticipation;
