import React from 'react';
import TestimonialsCard from './TestimonialsCard';

const CustomersSay = ({ testimonials }) => {
  return (
    <article className='testimonials-container'>
      <h1>Testimonials</h1>
      <div className='testimonials'>
        {testimonials.map(testimonial => <TestimonialsCard key={testimonial.id} {...testimonial} />)}
      </div>
    </article>
  );
}

export default CustomersSay;
