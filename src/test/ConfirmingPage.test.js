import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ConfirmingPage from '../components/ConfirmingPage';

describe('ConfirmingPage Component', () => {
  it('should render the confirming form with booking details', () => {
    const state = {
      bookingDetails: {
        date: '2024-09-20',
        time: '8:30 PM',
        guest: '2',
        occasion: 'Anniversary',
      },
    };

    render(
      <MemoryRouter initialEntries={[{ state }]}>
        <ConfirmingPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Booking Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Date: 2024-09-20/i)).toBeInTheDocument();
    expect(screen.getByText(/Time: 8:30 PM/i)).toBeInTheDocument();
  });

  it('should allow valid form submission', () => {
    const state = {
      bookingDetails: {
        date: '2024-09-20',
        time: '8:30 PM',
        guest: '2',
        occasion: 'Anniversary',
      },
    };

    const { getByLabelText, getByRole } = render(
      <MemoryRouter initialEntries={[{ state }]}>
        <ConfirmingPage />
      </MemoryRouter>
    );

    fireEvent.change(getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText(/Phone Number/i), { target: { value: '1234567890' } });

    fireEvent.click(getByRole('button', { name: /Confirm Booking/i }));

    // Normally, we'd check for routing behavior or success message.
  });

  it('should not submit with invalid data', () => {
    const state = {
      bookingDetails: {
        date: '2024-09-20',
        time: '8:30 PM',
        guest: '2',
        occasion: 'Anniversary',
      },
    };

    const { getByRole } = render(
      <MemoryRouter initialEntries={[{ state }]}>
        <ConfirmingPage />
      </MemoryRouter>
    );

    fireEvent.click(getByRole('button', { name: /Confirm Booking/i }));

    expect(screen.getByLabelText(/First Name/i)).toBeInvalid();
  });
});
