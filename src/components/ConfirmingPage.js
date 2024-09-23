import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cuponheart from '../assets/cuponheart.png';
import '../style/ConfirmingPage.css';
import Header from './Header';
import Footer from './Footer';

const ConfirmingPage = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || {};
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequest: '',
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formDetails.firstName) newErrors.firstName = 'First name is required';
    if (!formDetails.lastName) newErrors.lastName = 'Last name is required';
    if (!formDetails.email) newErrors.email = 'Email is required';
    if (!formDetails.phone) newErrors.phone = 'Phone number is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const completeBookingDetails = {
      ...bookingDetails,
      ...formDetails,
    };

    navigate('/ConfirmedBooking', { state: completeBookingDetails });
  };

  return (
    <>
      <Header />
      <section className="confirming-page">
        <div className="confirming-section">
          <h2>Booking Details</h2>
          <p>Date: {bookingDetails.date}</p>
          <p>Time: {bookingDetails.time}</p>
          <p>Guest: {bookingDetails.guest}</p>
          <p>Occasion: {bookingDetails.occasion}</p>

          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Personal Details</legend>

              <div className="form-group">
                <label id="firstName-label" htmlFor="firstName">First Name</label>
                <input
                  aria-labelledby="firstName-label"
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formDetails.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
              </div>

              <div className="form-group">
                <label id="lastName-label" htmlFor="lastName">Last Name</label>
                <input
                  aria-labelledby="lastName-label"
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formDetails.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formDetails.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formDetails.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="specialRequest">Special Requests</label>
                <textarea
                  name="specialRequest"
                  value={formDetails.specialRequest}
                  onChange={handleChange}
                  placeholder="Any special requests?"
                />
              </div>

              <button type="submit">Confirm Booking</button>
            </fieldset>
          </form>

        </div>
        <div className='extra-image'>
          <img src={cuponheart} alt="couple on heart" />
          </div>
      </section>
      <Footer />
    </>
  );
};

export default ConfirmingPage;
