// src/components/PromoSection.js
import React from 'react';
// Replace with the path to your actual image in src/assets/
import promoIllustration from '../assets/promo-illustration.png'; 

function PromoSection() {
  return (
    <div className="w-full lg:w-1/2 bg-yellow-400 p-8 flex flex-col items-center justify-center text-center text-gray-800 rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl">
      <img 
        src={promoIllustration} 
        alt="Students collaborating illustration" 
        className="max-w-[80%] lg:max-w-xs mx-auto mb-6 border-4 border-white rounded-lg shadow-lg" 
      />
      <h2 className="text-3xl font-bold mb-3">Connect with Alumni</h2>
      <p className="text-lg opacity-90 max-w-sm">
        Join a vibrant community of graduates and expand your professional network.
      </p>
    </div>
  );
}

export default PromoSection;