// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <Routes>
      {/* Route for your sign-in page */}
      <Route path="/signin" element={<SignInPage />} />

      {/* When you create a sign-up page, you will add a route here */}
      {/* <Route path="/signup" element={<SignUpPage />} /> */}
      
      {/* A default route that also points to the sign-in page */}
      <Route path="/" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
