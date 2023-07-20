import React from 'react'
import greeksalad from '../assets/greeksalad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import lemondessert from '../assets/lemondessert.jpg'
import restaurantfood from '../assets/restauranfood.jpg'
import logo from '../assets/Logo.svg'



const Main = () => {
  return (
    <>
        <main>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon is a restaurant in Chicago that serves delicious food.</p>
            <p>Our menu is available for delivery and takeout.</p>
            <p>Our restaurant is open for reservations.</p>
            <p>Order online or make a reservation today!</p>
            <button>Reserve a Table</button>
            <img src={restaurantfood} alt='Food' height={442} width={404} />
        </main>
        <section>
            <h2>Specials</h2>
            <button>Order Online</button>

            <div>
                <div>
                    <img src={greeksalad} alt='Food' width={265} height={185} />
                </div>
                <div>
                    <h3>Greek Salad</h3>
                    <p>$12.99</p>
                </div>
                <div>
                    <p>Our Greek salad is made out of fresh salads</p>
                    <p>and is served with a side of pita bread.</p>
                    <a href="/">Order Online</a>
                </div>
            </div>
            <div>
                <div>
                    <img src={bruchetta} alt='Food' width={265} height={185} />
                </div>
                <div>
                    <h3>Bruchetta</h3>
                    <p>$5.99</p>
                </div>
                <div>
                    <p>Our bruchetta is made out of fresh bread</p>
                    <a href="/">Order Online</a>
                </div>
            </div>
            <div>
                <div>
                    <img src={lemondessert} alt='Food' width={265} height={185} />
                </div>
                <div>
                    <h3>Lemon Desert</h3>
                    <p>$12.99</p>
                </div>
                <div>
                    <p>Our Greek salad is made out of fresh salads</p>
                    <p>and is served with a side of pita bread.</p>
                    <a href="/">Order Online</a>
                </div>
            </div>
        </section>
        <article>
            <h1>Testimonials</h1>
            <div>
                <div>
                    <h3>Raiting:</h3>
                    <p>5/5</p>
                </div>
                <div>
                    <img src={logo} alt='Logo' width={50} height={50} />
                </div>
                <div>
                    <p>Little Lemon is a great restaurant!</p>
                    <p>I love their food and their service!</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>Raiting:</h3>
                    <p>5/5</p>
                </div>
                <div>
                    <img src={logo} alt='Logo' width={50} height={50} />
                </div>
                <div>
                    <p>Little Lemon is a great restaurant!</p>
                    <p>I love their food and their service!</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>Raiting:</h3>
                    <p>5/5</p>
                </div>
                <div>
                    <img src={logo} alt='Logo' width={50} height={50} />
                </div>
                <div>
                    <p>Little Lemon is a great restaurant!</p>
                    <p>I love their food and their service!</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>Raiting:</h3>
                    <p>5/5</p>
                </div>
                <div>
                    <img src={logo} alt='Logo' width={50} height={50} />
                </div>
                <div>
                    <p>Little Lemon is a great restaurant!</p>
                    <p>I love their food and their service!</p>
                </div>
            </div>
        </article>
        <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon is a restaurant in Chicago that serves delicious food.</p>
            <p>Our menu is available for delivery and takeout.</p>
            <p>Our restaurant is open for reservations.</p>
            <p>Order online or make a reservation today!</p>
        </article>
    </>
  )
}

export default Main