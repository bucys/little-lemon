import React from 'react';
import MenuCard from './MenuCard';

const Specials = ({ menuItems }) => {
  return (
    <section>
      <div className='specials'>
          <h2>Specials</h2>
          <button>Order Online</button>
      </div>
      <div className='menu'>
          {menuItems.map(item => <MenuCard key={item.id} {...item} />)}
      </div>
    </section>
  )
}

export default Specials;
