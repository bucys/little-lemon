import React, { useState } from 'react';
import { submitAPI } from '../api/api';

const BookingForm = ({ availableTimes, onDateChange, setBookings }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value); 
    setDate(newDate);
    onDateChange(newDate);
};


const handleSubmit = (event) => {
  event.preventDefault();

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
      <form onSubmit={handleSubmit} className="booking-form">
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" value={date.toISOString().split('T')[0]} onChange={handleDateChange} />

          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
              {availableTimes.map((time, index) => <option key={index}>{time}</option>)}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input type="number" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />

          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Anniversary</option>
          </select>

          <input type="submit" value="Make Your reservation" />
      </form>
    </div>
    );
};

export default BookingForm;
