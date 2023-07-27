import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../api/api';
import { useNavigate } from 'react-router-dom';

export function updateTimes(state, action) {
  switch(action.type) {
    case 'init':
        return action.payload;
    case 'update':
        return action.payload;
    default:
        return state;
  }
}

export async function initializeTimes() {
  const date = new Date();
  const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  try {
    const times = await fetchAPI(dateString);
    return times;
  } catch (error) {
    console.error("Failed to initialize times: ", error);
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
}


const BookingPage = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date()); 
  const [availableTimes, setAvailableTimes] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchTimes = async () => {
      const times = await fetchAPI(date);
      const unbookedTimes = times.filter(time => !bookings.includes(`${date} ${time}`));
      setAvailableTimes(unbookedTimes);
    };

    fetchTimes();
  }, [date, bookings]);

  const submitForm = (formData) => {
      if (submitAPI(formData)) {
          navigate('/confirmed');
      }
  }

  return (
    <BookingForm availableTimes={availableTimes} onDateChange={setDate} setBookings={setBookings} onSubmit={submitForm}/>
  );
};

export default BookingPage;
