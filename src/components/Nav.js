import React from 'react'
import logo from '../assets/Logo.svg'

const Nav = () => {
  return (
    <>
        <img src={logo} alt='Logo' />
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order online</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    </>
  )
}

export default Nav