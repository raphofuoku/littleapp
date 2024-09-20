import React, { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/BookingPage.css';
import table from '../assets/table.jpg';
import coupleondate from '../assets/coupleondate.png';
import { fetchAPI,} from '../utility/mockAPI';

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
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value); // Convert string to Date object
    setDate(e.target.value);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate }); // Use Date object for fetching times
  };

  const submitForm = (e) => {
    e.preventDefault();
    const bookingDetails = { occasion, guest, date, time };

    // Navigate to ConfirmingPage with booking details
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
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label>Occasion</label>
              <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Celebration">Celebration</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>

            <div className="form-group">
              <label>Guest</label>
              <select value={guest} onChange={(e) => setGuest(e.target.value)} required>
                <option value="">Select number of guest</option>
                {Array.from({ length: 20 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={handleDateChange}
                placeholder="Select date"
                required
              />
            </div>

            <div className="form-group">
              <label>Time</label>
              <select value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Select time</option>
                {availableTimes.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <button type="submit">Continue</button>
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
