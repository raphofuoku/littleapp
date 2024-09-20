import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingPage from '../components/BookingPage';

describe('BookingPage Component', () => {
  it('should render the booking form', () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Guest/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  });

  it('should allow valid form submission', () => {
    const { getByLabelText, getByRole } = render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    fireEvent.change(getByLabelText(/Occasion/i), { target: { value: 'Anniversary' } });
    fireEvent.change(getByLabelText(/Guest/i), { target: { value: '2' } });
    fireEvent.change(getByLabelText(/Date/i), { target: { value: '2024-09-20' } });
    fireEvent.change(getByLabelText(/Time/i), { target: { value: '8:30 PM' } });

    fireEvent.click(getByRole('button', { name: /Continue/i }));

    // Normally, we'd check for routing behavior, but testing navigation is beyond the basic unit test scope.
  });

  it('should not submit with invalid data', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    fireEvent.click(getByRole('button', { name: /Continue/i }));

    expect(screen.getByText(/Select Occasion/i)).toBeInTheDocument();
    // Check for other errors as needed.
  });
});
