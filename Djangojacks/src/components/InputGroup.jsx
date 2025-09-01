// src/components/InputGroup.js
import React, { useId } from 'react';

function InputGroup({ label, type = 'text', icon, placeholder, value, onChange }) {
  const inputId = useId();
  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="block text-gray-700 text-sm font-semibold mb-2">{label}</label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">{icon}</span>
        <input type={type} id={inputId} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder={placeholder} value={value} onChange={onChange} required />
      </div>
    </div>
  );
}

export default InputGroup;