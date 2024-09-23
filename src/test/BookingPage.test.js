import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import BookingPage from '../components/BookingPage';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock the fetchAPI function to return test times
jest.mock('../utility/mockAPI', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00']),
}));

describe('BookingPage Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
  });

  it('renders the form correctly', () => {
    expect(screen.getByText('BOOK A TABLE')).toBeInTheDocument();
    expect(screen.getByText('AT LITTLE LEMON')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByLabelText('Guest')).toBeInTheDocument();
    expect(screen.getByLabelText('Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Time')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Continue/i })).toBeInTheDocument();
  });

  it('validates that all form fields are required', () => {
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    expect(screen.getByText(/Occasion is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Number of guests is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
  });

  it('allows valid form submission', () => {
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });
    fireEvent.change(screen.getByLabelText('Guest'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2024-09-21' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '18:00' } });

    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    // Ensure no validation errors are present
    expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();

    // Verify that navigate is called
    expect(mockNavigate).toHaveBeenCalledWith('/Confirming', {
      state: {
        bookingDetails: {
          occasion: 'Birthday',
          guest: '4',
          date: '2024-09-21',
          time: '18:00',
        },
      },
    });
  });

  it('displays validation errors when required fields are missing', () => {
    // Leave all fields empty and try to submit
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    expect(screen.getByText('Occasion is required')).toBeInTheDocument();
    expect(screen.getByText('Number of guests is required')).toBeInTheDocument();
    expect(screen.getByText('Date is required')).toBeInTheDocument();
    expect(screen.getByText('Time is required')).toBeInTheDocument();
  });

  it('updates available times when date is changed', () => {
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2024-09-21' } });
    expect(screen.getByLabelText('Time').children).toHaveLength(5); // 4 options + 1 default

    const timeOptions = screen.getByLabelText('Time').children;
    expect(timeOptions[1].value).toBe('17:00');
    expect(timeOptions[2].value).toBe('18:00');
    expect(timeOptions[3].value).toBe('19:00');
    expect(timeOptions[4].value).toBe('20:00');
  });

  it('disables the submit button when there are validation errors', () => {
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Guest'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '' } });

    expect(screen.getByRole('button', { name: /Continue/i })).toBeDisabled();
  });

  it('ensures all form elements are accessible', () => {
    expect(screen.getByLabelText('Occasion')).toHaveAccessibleName('Occasion');
    expect(screen.getByLabelText('Guest')).toHaveAccessibleName('Guest');
    expect(screen.getByLabelText('Date')).toHaveAccessibleName('Date');
    expect(screen.getByLabelText('Time')).toHaveAccessibleName('Time');
    expect(screen.getByRole('button', { name: /Continue/i })).toBeEnabled();
  });
});
