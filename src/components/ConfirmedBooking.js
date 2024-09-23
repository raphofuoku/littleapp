import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../style/ConfirmedBooking.css';
import glassescheer from "../assets/glassescheer.png";
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  const location = useLocation();
  const bookingDetails = location.state || {};

  return (
    <>
      <Header />
      <section className="confirmed-booking-container">
        <div className="booking-box">
          <h2>Congratulations! Your booking is confirmed.</h2>

          <div className="summary-section">
            <h3>Summary:</h3>
            <p><strong>Occasion:</strong> {bookingDetails.occasion}</p>
            <p><strong>Guest:</strong> {bookingDetails.guest}</p>
            <p><strong>Date:</strong> {bookingDetails.date}</p>
            <p><strong>Time:</strong> {bookingDetails.time}</p>
            <p><strong>Email:</strong> {bookingDetails.email}</p>
          </div>

          <div className="menu-prompt">
            <p>
              Explore our menu before you arrive. From the finest cooking to the best
              wine list this side of Chicago. Prepare to be even more excited.
            </p>
          </div>

          <button className="view-menu-button">
            <Link to="/menu" aria-label="Explore menu">Menu</Link>
          </button>
        </div>

        <div className="confirmedbooking-image">
          <img src={glassescheer} alt="Two glasses cheering in celebration" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ConfirmedBooking;
