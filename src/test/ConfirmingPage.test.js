import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ConfirmingPage from '../components/ConfirmingPage';

const mockBookingDetails = {
  date: '2024-10-01',
  time: '19:00',
  guest: '2',
  occasion: 'Birthday',
};

describe('ConfirmingPage', () => {
  beforeEach(() => {
    render(
      <Router>
        <ConfirmingPage />
      </Router>
    );
  });

  it('renders booking details correctly', () => {
    // Set initial state
    const { container } = render(
      <Router>
        <ConfirmingPage />
      </Router>
    );

    // Simulate passing bookingDetails through state
    screen.getByText(/Booking Details/i);
    screen.getByText(/Date: 2024-10-01/i);
    screen.getByText(/Time: 19:00/i);
    screen.getByText(/Guest: 2/i);
    screen.getByText(/Occasion: Birthday/i);
  });

  it('displays error messages for empty fields on submit', () => {
    fireEvent.click(screen.getByText(/Confirm Booking/i));

    expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Last name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
  });

  it('allows form submission with valid data', () => {
    // Fill out the form
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByPlaceholderText(/Any special requests?/i), { target: { value: 'Window seat' } });

    fireEvent.click(screen.getByText(/Confirm Booking/i));

    // Verify that the form data is processed (in real usage, we'd check if the navigate function was called with correct data)
    expect(screen.queryByText(/First name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Last name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Email is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Phone number is required/i)).not.toBeInTheDocument();
  });

  it('has accessibility attributes', () => {
    const firstNameInput = screen.getByLabelText(/First Name/i);
    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput).toHaveAttribute('aria-labelledby', 'firstName-label');

    const lastNameInput = screen.getByLabelText(/Last Name/i);
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput).toHaveAttribute('aria-labelledby', 'lastName-label');

    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toBeInTheDocument();

    const phoneInput = screen.getByLabelText(/Phone Number/i);
    expect(phoneInput).toBeInTheDocument();
  });
});
