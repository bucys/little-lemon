import React from 'react'
import restaurantfood from '../assets/restauranfood.jpg'
import MenuCard from './MenuCard'
import TestimonialsCard from './TestimonialsCard'
import mainA from '../assets/MarioAdrianA.jpg'
import mainB from '../assets/MarioAdrianB.jpg'

const Main = () => {
  return (
    <>
        <main>
            <div className='about'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon is a restaurant in Chicago that serves delicious food. Our menu is available for delivery and takeout. Our restaurant is open for reservations. Order online or make a reservation today!</p>
            <button>Reserve a Table</button>
            </div>
            <div className='food-logo'>
            <img src={restaurantfood} alt='Food' height={442} width={404} />
            </div>
        </main>
        <section>
            <div className='specials'>
                <h2>Specials</h2>
                <button>Order Online</button>
            </div>
            <div className='menu'>
            <MenuCard />
            <MenuCard />
            <MenuCard />
            </div>
        </section>
        <article className='testimonials-container'>
        <h1>Testimonials</h1>
            <div className='testimonials'>
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            </div>
        </article>
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
    </>
  )
}

export default Main