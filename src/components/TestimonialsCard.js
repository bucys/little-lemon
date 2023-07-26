import React from "react";

const TestimonialsCard = ({rating, image, name, comment}) => { // destructuring the testimonial prop
  return (
    <div className="testimonial-card">
      <div className="rating">
        <h3>Rating:</h3>
        <p>{rating}</p>
      </div>
      <div className="testimonial-info">
        <div className="image-name">
          <img src={image} alt={name} />
          <p>{name}</p>
        </div>
        <div className="testimonial-text">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
