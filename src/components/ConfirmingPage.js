import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import backgroundimage from '../assets/backgroundimage.png';
import '../style/ConfirmingPage.css';

const ConfirmingPage = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || {}; // Destructure booking details
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequest: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission logic and navigate to confirmed booking page
    navigate('/ConfirmedBooking');
  };

  return (
    <section className="confirming-page">
      <div className="confirming-section">
        <h2>Booking Details</h2>
        <p>Date: {bookingDetails.date}</p>
        <p>Time: {bookingDetails.time}</p>
        <p>Guest: {bookingDetails.guest}</p>
        <p>Occasion: {bookingDetails.occasion}</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" value={formDetails.firstName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" value={formDetails.lastName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formDetails.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formDetails.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Special Request</label>
            <textarea name="specialRequest" value={formDetails.specialRequest} onChange={handleChange}></textarea>
          </div>

          <button type="submit">Confirm Booking</button>
        </form>
      </div>

      <div className="extra-image">
        <img src={backgroundimage} alt="Little Lemon Restaurant table" />
      </div>
    </section>
  );
};

export default ConfirmingPage;
