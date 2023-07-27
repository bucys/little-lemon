import React, { useState } from 'react';
import { submitAPI } from '../api/api';

const BookingForm = ({ availableTimes, onDateChange, setBookings, onSubmit }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});

  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value); 
    setDate(newDate);
    onDateChange(newDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!time) {
      newErrors.time = "Time is required";
    }
    if (guests < 1) {
      newErrors.guests = "At least 1 guest is required";
    }
    if (!occasion) {
      newErrors.occasion = "Occasion is required";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    onSubmit({ date, time, guests, occasion });

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    const success = submitAPI(formData);
    
    if (success) {
      console.log('Reservation submitted successfully');
      setBookings(prevBookings => [...prevBookings, `${date} ${time}`]);
    } else {
      console.error('Failed to submit reservation');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="booking-form" aria-label="booking form">
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date.toISOString().split('T')[0]} onChange={handleDateChange} required aria-label="Choose date" />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required aria-label="Choose time">
          {availableTimes.map((time, index) => <option key={index}>{time}</option>)}
        </select>
        {errors.time && <div className="error">{errors.time}</div>}

        <label htmlFor="guests">Number of guests</label>
        <input type="number" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required aria-label="Number of guests" />
        {errors.guests && <div className="error">{errors.guests}</div>}

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required aria-label="Choose occasion">
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
        </select>
        {errors.occasion && <div className="error">{errors.occasion}</div>}

        <input type="submit" value="Make Your reservation" aria-label="Submit reservation" />
      </form>
    </div>
  );
};

export default BookingForm;

