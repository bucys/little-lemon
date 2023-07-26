import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <footer>
  <div className="footer-logo">
    <img src={logo} alt='Logo' />
  </div>
  <div className="doormat-nav">
    <h3>Doormat Navigation</h3>
    <ul className='footer-list'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">About</Link></li>
        <li><Link href="/">Menu</Link></li>
        <li><Link href="/">Reservations</Link></li>
        <li><Link href="/">Order online</Link></li>
        <li><Link href="/">Login</Link></li>
    </ul>
  </div>
  <div className="contact-info">
    <h3>Contact</h3>
    <ul className='footer-list'>
        <li><Link href="/">Phone: 123-456-7890</Link></li>
        <li><Link href="/">Email: email@email.com</Link></li>
        <li><Link href="/">Address: 1234 Street Rd, City, State 12345</Link></li>
    </ul>
  </div>
  <div className="social-links">
    <h3>Social Media Links</h3>
    <ul className='footer-list'>
        <li><Link href="/">Facebook</Link></li>
        <li><Link href="/">Instagram</Link></li>
        <li><Link href="/">Twitter</Link></li>
    </ul>
  </div>
</footer>

  )
}

export default Footer