import React from 'react';
import mainA from '../assets/MarioAdrianA.jpg';
import mainB from '../assets/MarioAdrianB.jpg';

const Chicago = () => {
  return (
    <article className='about-owners'>
      <div className='intro'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Little Lemon is a restaurant in Chicago that serves delicious food. Our menu is available for delivery and takeout. Our restaurant is open for reservations. Order online or make a reservation today!</p>
      </div>
      <div className="images">
          <img src={mainA} alt='Food A' height={442} width={404}  />
          <img src={mainB} alt='Food B' height={442} width={404}  />
      </div>
    </article>
  );
}

export default Chicago;
