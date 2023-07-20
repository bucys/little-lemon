import React from 'react'
import logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <>
        <img src={logo} alt='Logo' />
        <h3>Doormat Navigation</h3>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order online</a></li>
            <li><a href="/">Login</a></li>
        </ul>
        <h3>Contact</h3>
        <ul>
            <li><a href="/">Phone: 123-456-7890</a></li>
            <li><a href="/">Email: email@email.com</a></li>
            <li><a href="/">Address: 1234 Street Rd, City, State 12345</a></li>
        </ul>
        <h3>Social Media Links</h3>
        <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Twitter</a></li>
        </ul>

    </>
  )
}

export default Footer