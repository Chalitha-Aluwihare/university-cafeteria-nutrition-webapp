import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import LogoImg from '../assets/navBar/UniEats.png'
import { TiThMenu } from "react-icons/ti";
import { IoIosNotifications } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";


function NavBar({ }) {

    const [isOpen, setIsOpen] = useState(false);
    const [activeModel, setActiveModel] = useState(null);

    const loginModelOpen = () => {
        setActiveModel("login");
    }
    const signinModelOpen = () => {
        setActiveModel("signin");
    }

    const signinUserDetaislOpen = () => {
        setActiveModel("signin user Details")
    }

    const signinEmailConfirmedOpen = () => {
        setActiveModel("sigin email confirmed")
    }

    const findAccOpen = () => {
        setActiveModel("find account")
    }

    const emailNotFoundOpen = () => {
        setActiveModel("email not found")
    }

    const emailFound = () => {
        setActiveModel("email found")
    }

    const closeModel = () => {
        setActiveModel(null);
    }

    const handelMenuOpen = () => {
        setIsOpen(true)
    }

    const handelMenuClose = () => {
        setIsOpen(false)
    }

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        weight: '',
        height: '',
        goal: '',
        phoneOrEmail: '',
        agreeToTerms: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmitSignInConfirmed = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };
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

    const [email, setEmail] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${email}`);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted Code: ${code.join('')}`);
    };

    const [newCode, setNewCode] = useState(["", "", "", ""]);

    const handleChangeNewCode = (value, index) => {
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

    const handleSubmitNewCode = (e) => {
        e.preventDefault();
        alert(`Submitted Code: ${code.join('')}`);
    };
    return (
        <>
            <div className=' bg-[#262A3B] p-3 fixed w-full h-auto z-50'>
                <div className='flex items-center justify-between text-center '>
                    <div>
                        <img src={LogoImg} alt="UniEats Logo" className='w-30' />
                    </div>
                    <div className='flex gap-3 lg:gap-1'>
                        <IoIosNotifications className='w-8 h-8 text-white' />
                        {!isOpen && (
                            <TiThMenu className='block w-8 h-8 text-white cursor-pointer lg:hidden' onClick={handelMenuOpen} />
                        )}


                        {isOpen && (
                            <IoCloseSharp className='block w-8 h-8 text-white cursor-pointer lg:hidden' onClick={handelMenuClose} />
                        )}
                        <div className='flex items-center justify-center hidden lg:block'>

                            <Link to="/" className='pl-4 text-white font-2'>Home</Link>
                            <Link to="/mealPlan" className='pl-4 text-white font-2'>Meal Plan</Link>
                            <Link to="" className='pl-4 text-white font-2'>Order Food</Link>
                            <Link to="/nutritionalHistory" className='pl-4 text-white font-2'>Nutrition History</Link>
                            <Link to="/aboutUs" className='pl-4 text-white font-2'>About Us</Link>
                            <Link to="/foodSuggestions" className='pl-4 text-white font-2'>Food Suggestions</Link>
                            <button onClick={loginModelOpen} className='text-white bg-[#4CCF7E] px-9 py-2 rounded-full font-bold ml-4'>Login</button>
                            <button onClick={signinModelOpen} className='text-black bg-[#E2E2E2] px-8 py-2 rounded-full font-bold ml-4 '>SignUp</button>
                        </div>

                    </div>


                </div>
                {isOpen && (
                    <div className='block text-center lg:hidden '>
                        <h5 className='p-3'><Link to="/" className='text-white opacity-50'>Home</Link></h5>
                        <hr className='border-[0.2px] border-[#4CCF7E] opacity-50' />
                        <h5 className='p-3'><Link to="/mealPlan" className='text-white opacity-50'>Meal Plan</Link></h5>
                        <hr className='border-[0.2px] border-[#4CCF7E] opacity-50' />
                        <h5 className='p-3'><Link to="" className='text-white opacity-50'>Order Food</Link></h5>
                        <hr className='border-[0.2px] border-[#4CCF7E] opacity-50' />
                        <h5 className='p-3'><Link to="/nutritionalHistory" className='text-white opacity-50'>Nutrition History</Link></h5>
                        <hr className='border-[0.2px] border-[#4CCF7E] opacity-50' />
                        <h5 className='p-3'><Link to="" className='text-white opacity-50'>About Us</Link></h5>
                        <hr className='border-[0.2px] border-[#4CCF7E] opacity-50' />
                        <h5 className='p-3'><Link to="/foodSuggestions" className='text-white opacity-50'>Food Suggestions</Link></h5>
                        <hr className='border-[0.2px] border-[#4CCF7E] opacity-50' />
                        <h5 className='p-3 my-2'><button onClick={loginModelOpen} className='text-white bg-[#4CCF7E] px-9 py-2 rounded-full '>Login</button></h5>
                        <hr className='border-[0.2px] border-[#4CCF7E] opacity-50' />
                        <h5 className='p-3 my-2'><button onClick={signinModelOpen} className='text-black bg-[#E2E2E2] px-8 py-2 rounded-full  '>SignUp</button></h5>
                    </div>
                )}
            </div>



            {/* login form */}
            {activeModel === 'login' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-brightness-80"
                >
                    <div className="relative w-full max-w-md p-6 bg-white rounded-lg ">
                        <button
                            className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
                            onClick={closeModel}
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
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"

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
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200
"
                                    placeholder="Enter your Password"
                                />
                            </div>

                            <div className="mt-1 text-sm text-right">
                                <a href="#" className="text-green-500 hover:underline" onClick={findAccOpen}>Forgot password?</a>
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
            )}

            {/* Find You Account */}
            {activeModel === "find account" &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-brightness-80">
                    <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                        <button
                            className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
                            onClick={closeModel}
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
                                onClick={emailNotFoundOpen}
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>

            }

            {/* email not found */}

            {activeModel === "email not found" &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-brightness-80">
                    <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                        <button
                            className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
                            onClick={closeModel}
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
                                onClick={emailFound}
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
            }

            {/* email found */}
            {activeModel === "email found" &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-brightness-80">
                    <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                        <button
                            className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
                            onClick={closeModel}
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

                        <form onSubmit={handleSubmitNewCode} className="space-y-4">
                            <div className="flex justify-center gap-2 mb-2">
                                {code.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`code-${index}`}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleChangeNewCode(e.target.value, index)}
                                        className="w-12 h-12 text-lg text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                ))}
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 text-white bg-green-600 rounded hover:bg-green-700"
                                onClick={loginModelOpen}
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
            }



            {/* signin email Confirmed */}
            {activeModel === "sigin email confirmed" &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-brightness-80">
                    <div className="relative w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
                        <button
                            className="absolute text-gray-400 top-3 right-3 hover:text-gray-600"
                            onClick={closeModel}

                        >
                            ✕
                        </button>

                        <h2 className="mb-2 text-xl font-semibold text-center text-gray-900">Sign In to Unieats</h2>
                        <p className="mb-6 text-sm text-center text-gray-600">
                            Enter the 4-digit code sent to <span className="text-green-600">healthysample.com</span>
                        </p>

                        <form onSubmit={handleSubmitSignInConfirmed} className="space-y-4">
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
                                onClick={signinUserDetaislOpen}
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

            }






            {/* sign in  */}
            {activeModel == "signin" &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-brightness-80"
                >
                    <div className="relative w-full max-w-md p-6 bg-white rounded-lg ">
                        <button
                            className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
                            onClick={closeModel}
                        >
                            ✕
                        </button>

                        <h2 className="mb-4 text-xl font-semibold text-center">Sign In to unieats</h2>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">
                                    What's your phone number or email?
                                </label>
                                <input
                                    type="text"
                                    id="emailOrPhone"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"

                                    placeholder="Enter your Email or Phone Number"
                                />
                            </div>


                            <button
                                type="submit"
                                className="w-full py-3 text-white bg-[#4CCF7E] rounded hover:bg-[#3FC660]"
                                onClick={signinEmailConfirmedOpen}
                            >
                                Continue
                            </button>

                            <div className="flex items-center my-2">
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
            }
            {/* signin form */}
            {activeModel === "signin user Details" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-brightness-80"
                >
                    <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                        {/* Close Button */}
                        <button
                            className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
                            onClick={closeModel}
                        >
                            ✕
                        </button>

                        <h2 className="mb-2 text-xl font-semibold text-center text-green-700">
                            Create Your Account
                        </h2>
                        <p className="mb-4 text-sm text-center text-gray-600">
                            Fill in the details below to join unieats.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                            />
                            <input
                                type="number"
                                name="age"
                                placeholder="Age"
                                value={formData.age}
                                onChange={handleInputChange}
                                min="1"
                                max="120"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                            />
                            <input
                                type="text"
                                name="weight"
                                placeholder="Weight"
                                value={formData.weight}
                                onChange={handleInputChange}
                                min="1"

                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                            />
                            <input
                                type="text"
                                name="height"
                                placeholder="Height"
                                value={formData.height}
                                onChange={handleInputChange}
                                min="1"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                            />
                            <select
                                name="goal"
                                value={formData.goal}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200 text-gray-500 appearance-none">
                                <option value="">Select Your Fitness Goal</option>
                                <option value="Lose Weight">Lose Weight</option>
                                <option value="Gain Muscle">Gain Muscle</option>
                                <option value="Maintain Weight">Maintain Weight</option>
                                <option value="Improve Endurance">Improve Endurance</option>
                                <option value="General Fitness">General Fitness</option>
                            </select>

                            <input
                                type="text"
                                name="phoneOrEmail"
                                placeholder="Phone number or email"
                                value={formData.phoneOrEmail}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                            />

                            {/* Terms Checkbox */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 mt-1 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                />
                                <label className="text-sm text-gray-600">
                                    I agree to the{' '}
                                    <span className="text-green-600 underline cursor-pointer">
                                        Terms of Service
                                    </span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={!formData.agreeToTerms}
                                className={`w-full py-2 text-white rounded ${formData.agreeToTerms
                                    ? 'bg-green-600 hover:bg-green-700'
                                    : 'bg-gray-300 cursor-not-allowed'
                                    }`}
                            >
                                Create My Account
                            </button>

                            <div className="mt-2 text-sm text-center">
                                Already have an account?{' '}
                                <span
                                    className="text-blue-600 cursor-pointer hover:underline"
                                    onClick={() => alert('Open Login')}
                                >
                                    Log in
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            )}


        </>
    )
}

export default NavBar;