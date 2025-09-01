// src/components/SignupForm.js
import React, { useState } from 'react';
import InputGroup from './InputGroup';

// SVG Icons
const MailIcon = () => (
  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const LockIcon = () => (
  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);
const SaarthiLogo = () => (
  <img src="https://saarthi-media.s3.ap-south-1.amazonaws.com/logo.png" alt="Saarthi Logo" className="h-8 mb-6" />
);

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending to backend:', { email, password });
    alert('This is where you would call the backend API!');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
      <div>
        <div className="text-center lg:text-left"><SaarthiLogo /></div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back to Saarthi!</h1>
        <p className="text-gray-600 mb-6">Sign in to your account to continue your journey</p>

        <div className="flex gap-2 mb-6 flex-wrap">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium flex items-center gap-1"><span className="h-2 w-2 bg-orange-500 rounded-full"></span> Alumni Network</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1"><span className="h-2 w-2 bg-green-500 rounded-full"></span> Job Opportunities</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium flex items-center gap-1"><span className="h-2 w-2 bg-blue-500 rounded-full"></span> Mentorship</span>
        </div>

        <InputGroup label="Email address" type="email" icon={<MailIcon />} placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputGroup label="Password" type="password" icon={<LockIcon />} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className="flex items-center justify-between mb-6 text-sm">
          <label htmlFor="remember-me" className="flex items-center cursor-pointer"><input id="remember-me" type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" /><span className="ml-2 text-gray-700">Remember me</span></label>
          <a href="#" className="font-medium text-orange-600 hover:text-orange-500">Forgot password?</a>
        </div>

        <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 flex items-center justify-center gap-2">Sign in<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></button>
      </div>

      <div className="text-center text-sm mt-8">
        <p className="text-gray-600">New to Saarthi? <a href="/signup" className="font-medium text-orange-600 hover:text-orange-500">Create an account →</a></p>
      </div>
    </form>
  );
}

export default SignupForm;