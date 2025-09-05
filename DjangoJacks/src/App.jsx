import React from 'react';
import './App.css';
import ContactUsPage from './pages/contactUS';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FaqPage from './pages/FAQ'; // ✅ import correctly

function App() {
  return (
    <div className="App">
      {/* <ContactUsPage /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      <FaqPage />
    </div>
  );
}

export default App;
