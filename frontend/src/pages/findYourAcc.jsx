import React from 'react';

export default function FindYourAcc({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <button
          className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="mb-4 text-xl font-bold text-center">Find Your Account</h2>
        <h3 className='font-semibold text-left '>If you forgotten your password,please follow these steps</h3>
        <ol className="pt-5 space-y-2 list-decimal list-inside ">
            <li>Find your UniFeast account using your email or phone.</li>
            <li>Get a 4-digit code sent to your email or phone.</li>
            <li>Enter the 4-digit code to verify.</li>
            <li>Create a new password and log in.</li>
        </ol>
        <form className="space-y-4 ">
          <div>
           
            <input
              type="text"
              id="search"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-330 "
              placeholder="Search by email or phone number"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-green-700 rounded "
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}