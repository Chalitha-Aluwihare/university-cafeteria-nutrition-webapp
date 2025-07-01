import React from 'react';

export default function Login({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <button
          className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="mb-4 text-xl font-semibold text-center">Log in to unieats</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">
              What's your phone number or email?
            </label>
            <input
              type="text"
              id="emailOrPhone"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your Email or Phone Number"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Your Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your Password"
            />
          </div>

          <div className="mt-1 text-sm text-right">
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-green-600 rounded hover:bg-green-700"
          >
            Continue
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex flex-col space-y-2">
            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
              onClick={() => alert('Continue with Google')}
            >
              <img
                src="https://img.icons8.com/fluency/48/google-logo.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
              onClick={() => alert('Continue with Facebook')}
            >
              <img
                src="https://img.icons8.com/color/48/facebook-new.png"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Continue with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
