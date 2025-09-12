import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignUp from './Pages/signUp'
import LogIn from './Pages/Login'
import Landing from './Pages/LandingPage'
import ContactUsPage from './Pages/ContactUs';
import FaqPage from './Pages/faq';
import Dashboard from './Pages/Dashboard/Dashboard';
import { AlumniPortal } from './pages/DirectoryProfile';
const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
  <Route path='/' element={<Landing />} />
  <Route path='/dashboard' element={<Dashboard />} />
  <Route path='/faqs' element={<FaqPage />} />
  <Route path='/home' element={<Landing />} />
  <Route path='/signup' element={<SignUp />} />
  <Route path='/login' element={<LogIn />} />
  <Route path='/contactus' element={<ContactUsPage />} />
</Routes>

      </BrowserRouter> */}
      <AlumniPortal/>
    </div>
  )
}

export default App