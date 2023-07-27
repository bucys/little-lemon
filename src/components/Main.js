import React from 'react';
import restaurantfood from '../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main>
        <div className='about'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Little Lemon is a restaurant in Chicago that serves delicious food. Our menu is available for delivery and takeout. Our restaurant is open for reservations. Order online or make a reservation today!</p>
        <Link to='/booking'>
         <button>Reserve a Table</button>
        </Link>
        </div>
        <div className='food-logo'>
        <img src={restaurantfood} alt='Food' height={442} width={404} />
        </div>
    </main>
  );
}

export default Main;
