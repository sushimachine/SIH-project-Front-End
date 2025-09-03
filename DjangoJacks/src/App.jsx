import React from 'react';
import './App.css'; // This file is now created to resolve the error.
import ContactUsPage from './pages/contactUS';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
 
  return (
    <div className="App">
      
      {/* <ContactUsPage /> */}
      <Login />
    </div>
  );
}

export default App;
