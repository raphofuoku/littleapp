import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ConfirmedBooking from '../components/ConfirmedBooking';

describe('ConfirmedBooking Component', () => {
  it('should render confirmed booking details', () => {
    const state = {
      occasion: 'Anniversary',
      guest: '2',
      date: '2024-09-20',
      time: '8:30 PM',
      email: 'test@example.com',
    };

    render(
      <MemoryRouter initialEntries={[{ state }]}>
        <ConfirmedBooking />
      </MemoryRouter>
    );

    expect(screen.getByText(/Your booking is confirmed/i)).toBeInTheDocument();
    expect(screen.getByText(/Occasion: Anniversary/i)).toBeInTheDocument();
    expect(screen.getByText(/Guest: 2/i)).toBeInTheDocument();
  });

  it('should display menu prompt', () => {
    const state = {
      occasion: 'Anniversary',
      guest: '2',
      date: '2024-09-20',
      time: '8:30 PM',
      email: 'test@example.com',
    };

    render(
      <MemoryRouter initialEntries={[{ state }]}>
        <ConfirmedBooking />
      </MemoryRouter>
    );

    expect(screen.getByText(/Explore our menu/i)).toBeInTheDocument();
  });
});
