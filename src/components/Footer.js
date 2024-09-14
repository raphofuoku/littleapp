import React from 'react';
import '../style/Footer.css';
import footerlogo from '../assets/footerlogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={footerlogo} alt="Little Lemon Logo" className="footer-logo-image" />
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservation">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Social Media Links</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;