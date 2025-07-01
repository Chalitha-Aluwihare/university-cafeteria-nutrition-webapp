import React, { useState } from 'react';

export default function EmailConfirmed({ onClose }) {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const updated = [...code];
      updated[index] = value;
      setCode(updated);

      if (value && index < code.length - 1) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Code: ${code.join('')}`);
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

        <h2 className="mb-2 text-xl font-bold text-center text-green-600">Email Found!</h2>
        <p className="mb-2 text-sm text-center text-gray-700">
          Verify with a 4-digit code and set a new password to log in
        </p>

        <div className="mb-3 text-center">
          <p className="text-2xl font-semibold text-gray-800">Your email</p>
          <p className="text-sm text-gray-600">chalitha@example.com</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center gap-2 mb-2">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-12 h-12 text-lg text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-green-600 rounded hover:bg-green-700"
          >
            Continue
          </button>

          <button
            type="button"
            className="w-full py-2 mt-1 text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => alert('Resend Email')}
          >
            Resend Email
          </button>

          <button
            type="button"
            className="w-full py-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => alert('Change Email')}
          >
            Change Email
          </button>
        </form>

        <div className="mt-4 text-sm text-left text-gray-500 underline cursor-pointer hover:text-gray-800">
          Need Help?
        </div>
      </div>
    </div>
  );
}
