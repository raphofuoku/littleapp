import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import ConfirmedBooking from '../components/ConfirmedBooking';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('ConfirmedBooking Component', () => {
  const mockBookingDetails = {
    occasion: 'Birthday',
    guest: '2',
    date: '2024-09-30',
    time: '7:00 PM',
    email: 'test@example.com',
  };

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/confirmed']}>
        <Route path="/confirmed">
          <ConfirmedBooking />
        </Route>
      </MemoryRouter>
    );
  });

  it('renders booking confirmation message', () => {
    // Simulating the state from the previous component
    window.history.replaceState({ state: mockBookingDetails }, '');

    expect(screen.getByText(/Congratulations! Your booking is confirmed/i)).toBeInTheDocument();
  });

  it('displays the booking summary correctly', () => {
    // Simulating the state from the previous component
    window.history.replaceState({ state: mockBookingDetails }, '');

    expect(screen.getByText(/Occasion:/i)).toHaveTextContent('Birthday');
    expect(screen.getByText(/Guest:/i)).toHaveTextContent('2');
    expect(screen.getByText(/Date:/i)).toHaveTextContent('2024-09-30');
    expect(screen.getByText(/Time:/i)).toHaveTextContent('7:00 PM');
    expect(screen.getByText(/Email:/i)).toHaveTextContent('test@example.com');
  });

  it('has a link to the menu', () => {
    // Simulating the state from the previous component
    window.history.replaceState({ state: mockBookingDetails }, '');

    const menuLink = screen.getByLabelText(/Explore menu/i);
    expect(menuLink).toBeInTheDocument();
    expect(menuLink).toHaveAttribute('href', '/menu');
  });

  it('passes accessibility checks', async () => {
    // Simulating the state from the previous component
    window.history.replaceState({ state: mockBookingDetails }, '');

    const results = await axe(screen.getByRole('main'));
    expect(results).toHaveNoViolations();
  });
});
