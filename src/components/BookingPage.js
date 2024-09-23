import React, { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/BookingPage.css';
import table from '../assets/table.jpg';
import coupleondate from '../assets/coupleondate.png';
import { fetchAPI } from '../utility/mockAPI';

// Reducer to handle available times
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

// Initial times for today
const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0];
  return fetchAPI(today);
};

const BookingPage = () => {
  const [occasion, setOccasion] = useState('');
  const [guest, setGuest] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState({});
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setDate(e.target.value);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!occasion) newErrors.occasion = 'Occasion is required';
    if (!guest) newErrors.guest = 'Number of guests is required';
    if (!date) newErrors.date = 'Date is required';
    if (!time) newErrors.time = 'Time is required';
    return newErrors;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const bookingDetails = { occasion, guest, date, time };
    navigate('/Confirming', { state: { bookingDetails } });
  };

  return (
    <section className="booking-page">
      <div className='booking-section'>
        <div className="booking-content">
          <div className="booking-header">
            <img src={table} alt='restaurant table' />
            <div className="booking-text">
              <h1>BOOK A TABLE</h1>
              <h2>AT LITTLE LEMON</h2>
            </div>
          </div>
        </div>

        <div className="booking-form">
          <form onSubmit={submitForm} aria-live="polite">
            <fieldset>
              <legend>Booking Details</legend>

              <div className="form-group">
                <label id="occasion-label" htmlFor="occasion">Occasion</label>
                <select
                  id="occasion"
                  aria-labelledby="occasion-label"
                  name="occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  required>
                  <option value="">Select Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Celebration">Celebration</option>
                  <option value="Dinner">Dinner</option>
                </select>
                {errors.occasion && <span className="error">{errors.occasion}</span>}
              </div>

              <div className="form-group">
                <label id="guest-label" htmlFor="guest">Guest</label>
                <select 
                  id="guest" 
                  aria-labelledby="guest-label" 
                  value={guest} 
                  onChange={(e) => setGuest(e.target.value)} 
                  required>
                  <option value="">Select number of guests</option>
                  {Array.from({ length: 20 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                {errors.guest && <span className="error">{errors.guest}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                  placeholder="Select date"
                  required
                />
                {errors.date && <span className="error">{errors.date}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="time">Time</label>
                <select 
                  id="time"
                  value={time} 
                  onChange={(e) => setTime(e.target.value)} 
                  required>
                  <option value="">Select time</option>
                  {availableTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
                {errors.time && <span className="error">{errors.time}</span>}
              </div>

              <button 
                type="submit" 
                aria-label="Continue booking process"
                disabled={Object.keys(errors).length > 0}>
                Continue
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="booking-image">
        <img src={coupleondate} alt="couple on date" />
      </div>
    </section>
  );
};

export default BookingPage;
