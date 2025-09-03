import React from 'react';
import './App.css'; // This file is now created to resolve the error.
import ContactUsPage from './pages/contactUS';

// I've commented out the other page and the state for navigation
// import AuthPage from './pages/signUpLogin';
// import { useState } from 'react';

function App() {
  // The navigation state and logic have been temporarily removed.
  // const [currentPage, setCurrentPage] = useState('auth');

  return (
    <div className="App">
      {/* Now, we are directly rendering only the ContactUsPage component.
        This allows you to see and work on it by itself.
      */}
      <ContactUsPage />
    </div>
  );
}

export default App;
