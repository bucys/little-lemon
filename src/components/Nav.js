import React from "react";
import burger from "../assets/Burger.svg";
import basket from "../assets/Basket.svg";
import logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <>
      <nav>
      <div className="icons burger"><img src={burger} alt="burger menu" /></div>
      <div className='logo'>
      <img src={logo} alt="Logo" />
      </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/">Order online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
        <div className="icons basket"><img src={basket} alt="cart" /></div>
      </nav>
    </>
  );
};

export default Nav;
