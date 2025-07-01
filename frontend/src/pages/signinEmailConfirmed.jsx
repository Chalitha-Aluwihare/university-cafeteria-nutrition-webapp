import React, { useState } from 'react';

export default function SigninEmailConfirmed({ onClose }) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <button
          className="absolute text-gray-400 top-3 right-3 hover:text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="mb-2 text-xl font-semibold text-center text-gray-900">Sign In to Unieats</h2>
        <p className="mb-6 text-sm text-center text-gray-600">
          Enter the 4-digit code sent to <span className="text-green-600">healthysample.com</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center gap-3 mb-4">
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
            className="w-full py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
            onClick={() => alert('Resend Email')}
          >
            Resend Email
          </button>

          <button
            type="button"
            className="w-full py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
            onClick={() => alert('Change Email')}
          >
            Change Email
          </button>
        </form>

        <div className="mt-4 text-center">
          <button className="text-sm text-gray-500 hover:text-gray-700 hover:underline">
            Need Help?
          </button>
        </div>
      </div>
    </div>
  );
}

