import React from "react";

const MenuCard = ({name, image, price, description}) => { 
  return (
    <div className="menu-card" role="contentinfo" aria-label="menu card">
      <div className="menu-card-image">
        <img src={image} alt={name} height={442} width={404} />
      </div>
      <div className="menu-card-info">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <div className="menu-card-description">
        <p>{description}</p>
      </div>
      <a href="/" aria-label={`Order ${name} online`}>Order Online</a>
    </div>
  );
};

export default MenuCard;
