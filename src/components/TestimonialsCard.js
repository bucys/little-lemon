import React from "react";

const TestimonialsCard = () => {
  return (
    <div className="testimonial-card">
      <div className="rating">
        <h3>Rating:</h3>
        <p>5/5</p>
      </div>
      <div className="testimonial-info">
        <div className="image-name">
          <img src="https://via.placeholder.com/50" alt="Logo" />
          <p>Name</p>
        </div>
        <div className="testimonial-text">
          <p>Little Lemon is a great restaurant!</p>
          <p>I love their food and their service!</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
