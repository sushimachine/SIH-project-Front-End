import React from 'react';
import './index.css';
import ContactUsPage from './pages/contactUS';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FaqPage from './pages/FAQ'; // ✅ import correctly
import AlumniDirectory from './pages/AlumniDirectory';
import Landing from './pages/LandingPage';
import "yet-another-react-lightbox/styles.css";
import LandingNav from './pages/Nav/LandingNav';
import JobOpportunitiesPage from './pages/JobOppurtunity/JobOpportunitiesPage';
import JobDetailPage from './pages/JobOppurtunity/JobDetailPage'; 
function App() {
  return (
    <div className="App">
      {/* <ContactUsPage /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <FaqPage /> */}
      {/* <AlumniDirectory/> */}
      {/* <Landing/> */}
      <JobOpportunitiesPage/>
      {/* <JobDetailPage/> */}
    </div>
  );
}

export default App;
