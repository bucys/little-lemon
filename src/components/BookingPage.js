import React, { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: ''
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to your server
    console.log(formData);
  };

  return (
    <div>
      <h1>Book a Table</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleInputChange} value={formData.name} />
        </label>
        <label>
          Date:
          <input type="date" name="date" onChange={handleInputChange} value={formData.date} />
        </label>
        <label>
          Time:
          <input type="time" name="time" onChange={handleInputChange} value={formData.time} />
        </label>
        <label>
          Number of Guests:
          <input type="number" name="guests" onChange={handleInputChange} value={formData.guests} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default BookingPage;
