import React from "react";
import greeksalad from "../assets/greeksalad.jpg";

const MenuCard = () => {
  return (
    <>
      <div className="menu-card">
        <div className="menu-card-image">
          <img src={greeksalad} alt="Food" height={442} width={404}  />
        </div>
        <div className="menu-card-info">
          <h3>Greek Salad</h3>
          <p>$12.99</p>
        </div>
        <div className="menu-card-description">
          <p>Our Greek salad is made out of fresh salads</p>
          <p>and is served with a side of pita bread.</p>
        </div>
        <a href="/">Order Online</a>
      </div>
    </>
  );
};

export default MenuCard;
