import React from 'react';
import Main from './Main';
import Specials from './Specials';
import CustomerSay from './CustomerSay';
import Chicago from './Chicago';
import GreekSalad from '../assets/greeksalad.jpg';

const HomePage = () => {
    const menuItems = [
        {
          id: 1,
          name: 'Greek Salad',
          price: '$12.99',
          description: 'This is a Greek salad',
          image: GreekSalad,
        },
        {
            id: 2,
            name: 'Greek Salad',
            price: '$12.99',
            description: 'This is a Greek salad',
            image: GreekSalad,
          },
          {
            id: 3,
            name: 'Greek Salad',
            price: '$12.99',
            description: 'This is a Greek salad',
            image: GreekSalad,
          }
      ];
    
      const testimonials = [
        {
          id: 1,
          name: 'John Doe',
          comment: 'This is a great restaurant!',
          rating: 4,
          image: 'https://via.placeholder.com/50',
        },
        {
            id: 2,
            name: 'John Doe',
            comment: 'This is a great restaurant!',
            rating: 5,
            image: 'https://via.placeholder.com/50',
          },
          {
            id: 3,
            name: 'John Doe',
            comment: 'This is a great restaurant!',
            rating: 4,
            image: 'https://via.placeholder.com/50',
          },
          {
            id: 4,
            name: 'John Doe',
            comment: 'This is a great restaurant!',
            rating: 5,
            image: 'https://via.placeholder.com/50',
          }
      ];
  return (
    <>
      <Main />
      <Specials menuItems={menuItems} />
      <CustomerSay testimonials={testimonials} />
      <Chicago />
    </>
  )
}

export default HomePage;
