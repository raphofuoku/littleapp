import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import {Routes, Route} from 'react-router-dom';
import Reservation from './components/Reservation';
import ConfirmingPage from './components/ConfirmingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

const App = () => {
  return (
    <>
   <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
    <Routes>
      <Route path="/booking" element={<Reservation />}></Route>
    </Routes>
    <Routes>
      <Route path="/confirming" element={<ConfirmingPage />}></Route>
    </Routes>
    <Routes>
      <Route path="/ConfirmedBooking" element={<ConfirmedBooking />}></Route>
    </Routes>
    </>
  );
}

export default App;
