import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
   <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
    </>
  );
}

export default App;
