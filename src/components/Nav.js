import React from "react";
import burger from "../assets/Burger.svg";
import basket from "../assets/Basket.svg";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";


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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/">Reservations</Link>
          </li>
          <li>
            <Link to="/">Order online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
        <div className="icons basket"><img src={basket} alt="cart" /></div>
      </nav>
    </>
  );
};

export default Nav;
