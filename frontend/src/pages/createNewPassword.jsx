import React, { useState } from 'react';

export default function CreateNewPassword ({ onClose }){
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }

    // Add password validation logic here if needed
    alert('Password successfully set!');
  };

    return(
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <button
          className="absolute text-xl text-gray-600 top-2 right-2 hover:text-black"
          onClick={onClose}
        >
           ✕
        </button>

        <h2 className="mb-2 text-xl font-bold text-center">Create New Password</h2>

        <p className="mb-4 text-sm text-center text-gray-700">
          Please create a new password following the guidelines below
        </p>

        <ul className="pl-5 mb-4 text-sm text-gray-600 list-disc">
          <li>Enter and confirm your new password to complete the account verification.</li>
          <li>Your password must include:
            <ul className="pl-4 mt-1 list-disc">
              <li>At least 8 characters</li>
              <li>At least one uppercase letter</li>
              <li>At least one number</li>
              <li>At least one special character</li>
            </ul>
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 text-white bg-green-600 rounded hover:bg-green-700"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
    )
}

