// src/components/AuthLayout.js
import React from 'react';
import PromoSection from './PromoSection'; // This will be created next
import SignupForm from './SignupForm';   // This will be created next

function AuthLayout() {
  return (
    <div className="relative z-10 bg-white rounded-xl shadow-2xl flex flex-col lg:flex-row w-full max-w-4xl overflow-hidden">
      <PromoSection />
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <SignupForm />
      </div>
    </div>
  );
}

export default AuthLayout;