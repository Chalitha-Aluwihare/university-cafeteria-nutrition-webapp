import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/navBar/UniEats.png';
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import Noti from '../assets/navBar/Noti.png';
import Profile from '../assets/navBar/Profile.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModel, setActiveModel] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Modal controls
  const loginModelOpen = () => setActiveModel("login");
  const signupDetailsOpen = () => setActiveModel("signup details");
  const signupCodeVerificationOpen = () => setActiveModel("signup code verification");
  const closeModel = () => setActiveModel(null);
  const handleMenuOpen = () => setIsOpen(true);
  const handleMenuClose = () => setIsOpen(false);

  // Form data states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    weight: '',
    height: '',
    goal: '',
    email: '',
    password: '',
    agreeToTerms: false
  });
  
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleChangeCode = (value, index) => {
    if (/^\d?$/.test(value)) {
      const updated = [...verificationCode];
      updated[index] = value;
      setVerificationCode(updated);

      if (value && index < verificationCode.length - 1) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };
  
  // API Call Functions
  const handleSubmitUserDetailsAndSendVerification = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:4000/api/user/send-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`HTTP ${response.status}: ${text || 'Unknown error'}`);
      }
      const data = await response.json();
      if (data.success) {
        alert("Verification code sent! Please check your email.");
        signupCodeVerificationOpen();
      } else {
        alert(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error sending verification email:", error.message, error.stack);
      alert(`Error: ${error.message || "An error occurred. Please try again."}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitVerification = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const code = verificationCode.join('');
    try {
      const response = await fetch("http://localhost:4000/api/user/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, code: code }),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`HTTP ${response.status}: ${text || 'Unknown error'}`);
      }
      const data = await response.json();
      if (data.success) {
        alert("Account created successfully! You can now log in.");
        closeModel();
        loginModelOpen();
      } else {
        alert(data.message || "An error occurred during verification.");
      }
    } catch (error) {
      console.error("Verification error:", error.message, error.stack);
      alert(`Error: ${error.message || "An error occurred during verification."}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginCredentials),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`HTTP ${response.status}: ${text || 'Unknown error'}`);
      }
      const data = await response.json();
      if (data.success) {
        alert("Login successful!");
        setIsLoggedIn(true);
        closeModel();
      } else {
        alert(data.message || "An error occurred during login.");
      }
    } catch (error) {
      console.error("Login error:", error.message, error.stack);
      alert(`Error: ${error.message || "An error occurred during login."}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("You have been logged out.");
  };

  return (
    <>
      <div className='bg-[#262A3B] p-3 fixed w-full h-auto z-50'>
        <div className='flex items-center justify-between text-center'>
          <div>
            <img src={LogoImg} alt="UniEats Logo" className='w-30' />
          </div>
          <div className='flex gap-3 lg:gap-1'>
            {!isOpen && (
              <TiThMenu className='block w-8 h-8 text-white cursor-pointer lg:hidden' onClick={handleMenuOpen} />
            )}
            {isOpen && (
              <IoCloseSharp className='block w-8 h-8 text-white cursor-pointer lg:hidden' onClick={handleMenuClose} />
            )}
            <div className='hidden lg:flex items-center justify-center'>
              <div className="flex items-center space-x-2">
                <Link to="/" className='px-4 text-white font-medium'>Home</Link>
                <Link to="/mealPlan" className='px-4 text-white font-medium'>Meal Plan</Link>
                <Link to="/orderFood" className='px-4 text-white font-medium'>Order Food</Link>
                <Link to="/nutritionalHistory" className='px-4 text-white font-medium'>Nutrition History</Link>
                <Link to="/aboutUs" className='px-4 text-white font-medium'>About Us</Link>
                <Link to="/foodSuggestions" className='px-4 text-white font-medium'>Food Suggestions</Link>

                {!isLoggedIn ? (
                  <>
                    <button onClick={loginModelOpen} className='text-white bg-[#4CCF7E] px-6 py-2 rounded-full font-bold ml-4'>Login</button>
                    <button onClick={signupDetailsOpen} className='text-black bg-[#E2E2E2] px-6 py-2 rounded-full font-bold ml-4'>Sign Up</button>
                  </>
                ) : (
                  <>
                    <Link><img src={Noti} className="w-8" alt="Notifications" /></Link>
                    <Link to="/userProfile"><img src={Profile} className="w-8" alt="Profile" /></Link>
                    <button onClick={handleLogout} className='text-white bg-red-600 px-6 py-2 rounded-full font-bold ml-4'>Logout</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className='block text-center lg:hidden'>
            <h5 className='p-3'><Link to="/" className='text-white opacity-50'>Home</Link></h5>
            <hr className='border-gray-600' />
            <h5 className='p-3'><Link to="/mealPlan" className='text-white opacity-50'>Meal Plan</Link></h5>
            <hr className='border-gray-600' />
            <h5 className='p-3'><Link to="/orderFood" className='text-white opacity-50'>Order Food</Link></h5>
            <hr className='border-gray-600' />
            <h5 className='p-3'><Link to="/nutritionalHistory" className='text-white opacity-50'>Nutrition History</Link></h5>
            <hr className='border-gray-600' />
            <h5 className='p-3'><Link to="/aboutUs" className='text-white opacity-50'>About Us</Link></h5>
            <hr className='border-gray-600' />
            <h5 className='p-3'><Link to="/foodSuggestions" className='text-white opacity-50'>Food Suggestions</Link></h5>
            <hr className='border-gray-600' />
            {!isLoggedIn ? (
              <>
                <h5 className='p-3'>
                  <button onClick={loginModelOpen} className='text-white bg-[#4CCF7E] px-6 py-2 rounded-full font-bold'>Login</button>
                </h5>
                <h5 className='p-3'>
                  <button onClick={signupDetailsOpen} className='text-black bg-[#E2E2E2] px-6 py-2 rounded-full font-bold'>Sign Up</button>
                </h5>
              </>
            ) : (
              <>
                <h5 className='p-3'><Link to="/notifications" className='text-white opacity-50'>Notifications</Link></h5>
                <hr className='border-gray-600' />
                <h5 className='p-3'><Link to="/userProfile" className='text-white opacity-50'>Profile</Link></h5>
                <hr className='border-gray-600' />
                <h5 className='p-3'>
                  <button onClick={handleLogout} className='text-white bg-red-600 px-6 py-2 rounded-full font-bold'>Logout</button>
                </h5>
              </>
            )}
          </div>
        )}
      </div>

      {/* Login Modal */}
      {activeModel === "login" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-brightness-50">
          <div className="relative w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
            <button
              className="absolute text-gray-400 top-3 right-3 hover:text-gray-600"
              onClick={closeModel}
            >
              ✕
            </button>
            <h2 className="mb-2 text-xl font-semibold text-center text-gray-900">Login to Your Account</h2>
            <form onSubmit={handleSubmitLogin} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={loginCredentials.email}
                onChange={handleLoginInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginCredentials.password}
                onChange={handleLoginInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 text-white rounded ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#4CCF7E] hover:bg-[#3FC660]'}`}
              >
                {isLoading ? 'Loading...' : 'Login'}
              </button>
              <p className="text-sm text-center text-gray-600">
                Forgot your password?{' '}
                <span className="text-green-600 underline cursor-pointer">Reset it here</span>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Signup User Details Modal (new first step) */}
      {activeModel === "signup details" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-brightness-50">
          <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <button
              className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
              onClick={closeModel}
            >
              ✕
            </button>
            <h2 className="mb-2 text-xl font-semibold text-center text-green-700">Create Your Account</h2>
            <p className="mb-4 text-sm text-center text-gray-600">Just a few details to get started.</p>
            <form onSubmit={handleSubmitUserDetailsAndSendVerification} className="space-y-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password (min 8 characters)"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
                min="1"
                max="120"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                name="weight"
                placeholder="Weight (e.g., 70kg)"
                value={formData.weight}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="height"
                placeholder="Height (e.g., 170cm)"
                value={formData.height}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-500"
              >
                <option value="">Select Your Fitness Goal</option>
                <option value="Lose Weight">Lose Weight</option>
                <option value="Gain Muscle">Gain Muscle</option>
                <option value="Maintain Weight">Maintain Weight</option>
                <option value="Improve Endurance">Improve Endurance</option>
                <option value="General Fitness">General Fitness</option>
              </select>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 mt-1 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  required
                />
                <label className="text-sm text-gray-600">
                  I agree to the{' '}
                  <span className="text-green-600 underline cursor-pointer">Terms of Service</span>
                </label>
              </div>
              <button
                type="submit"
                disabled={isLoading || !formData.agreeToTerms}
                className={`w-full py-2 text-white rounded ${isLoading || !formData.agreeToTerms ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#4CCF7E] hover:bg-[#3FC660]'}`}
              >
                {isLoading ? 'Loading...' : 'Continue to Email Verification'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Signup Code Verification Modal (second step) */}
      {activeModel === "signup code verification" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-brightness-50">
          <div className="relative w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
            <button
              className="absolute text-gray-400 top-3 right-3 hover:text-gray-600"
              onClick={closeModel}
            >
              ✕
            </button>
            <h2 className="mb-2 text-xl font-semibold text-center text-gray-900">Verify Your Email</h2>
            <p className="mb-6 text-sm text-center text-gray-600">
              Enter the 4-digit code sent to <span className="text-green-600">{formData.email}</span>
            </p>
            <form onSubmit={handleSubmitVerification} className="space-y-4">
              <div className="flex justify-center gap-3 mb-4">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChangeCode(e.target.value, index)}
                    className="w-12 h-12 text-lg text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                ))}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 text-white rounded ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#4CCF7E] hover:bg-[#3FC660]'}`}
              >
                {isLoading ? 'Loading...' : 'Create My Account'}
              </button>
              <button
                type="button"
                className="w-full py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                onClick={() => handleSubmitUserDetailsAndSendVerification({ preventDefault: () => {} })}
                disabled={isLoading}
              >
                Resend Code
              </button>
              <button
                type="button"
                className="w-full py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                onClick={signupDetailsOpen}
                disabled={isLoading}
              >
                Back to Details
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;