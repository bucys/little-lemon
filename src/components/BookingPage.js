import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI } from '../api/api';

export async function updateTimes(state, action) {
  switch(action.type) {
    case 'init':
        return action.payload;
    case 'update':
        try {
            const times = await window.fetchAPI(action.payload);
            return times;
        } catch (error) {
            console.error("Failed to update times: ", error);
            return state;  
        }
    default:
        return state;
  }
}


export async function initializeTimes() {
  
  const date = new Date();
  const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  try {
      const times = await window.fetchAPI(dateString);
      return times;
  } catch (error) {
      console.error("Failed to initialize times: ", error);
      
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
}


const BookingPage = () => {
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

  return (
    <BookingForm availableTimes={availableTimes} onDateChange={setDate} setBookings={setBookings}/>
  );
};



export default BookingPage;
