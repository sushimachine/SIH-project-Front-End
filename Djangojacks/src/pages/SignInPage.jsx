// src/pages/SignInPage.js
import React from 'react';
import AuthLayout from '../components/AuthLayout';

function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Dynamic background circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-gray-200/50 rounded-full animate-float"
            style={{
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          ></div>
        ))}
      </div>
      {/* The main authentication layout component */}
      <AuthLayout />
    </div>
  );
}

export default SignInPage;