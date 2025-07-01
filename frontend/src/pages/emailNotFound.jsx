import React, { useState } from 'react';

export default function EmailNotFound({ onClose }) {
  const [email, setEmail] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${email}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <button
          className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="mb-4 text-center">
          <h2 className="text-lg font-bold text-red-600">Email Not Found!</h2>
          <p className="mt-2 text-sm text-gray-700">
            We couldn't find an account associated with this email
          </p>
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Your Email or Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
          >
            Search Again
          </button>
        </form>

        <div className="mt-6 space-y-1 text-sm text-gray-600">
          <p>1. Please check the email you entered for any mistakes</p>
          <p>2. If you don’t have an account, please sign up</p>
          <p>3. Check your spelling and try again.</p>
        </div>
      </div>
    </div>
  );
}
