import React from 'react';
import { Link } from 'react-router-dom'
import LogoImg from '../assets/navBar/UniEats.png'


function NavBar({ onLoginClick = () => {} }) {
    return (
        <>
            <div className='flex items-center justify-between bg-[#262A3B] p-3 fixed w-full z-50'>
                <div>
                    <img src={LogoImg} alt="UniEats Logo" className='w-32' />
                </div>
                <div className='gap-5 flex items-center justify-center'>
                    <Link to="/" className='font-bold  text-white'>Home</Link>
                    <Link to="/mealPlan" className='font-bold  text-white'>Meal Plan</Link>
                    <Link to="" className='font-bold  text-white'>Order Food</Link>
                    <Link to="/nutritionalHistory" className='font-bold  text-white'>Nutrition History</Link>
                    <Link to="" className='font-bold  text-white'>About Us</Link>
                    <button onClick={() => {
                        console.log('Login button clicked'); // ✅ Debug log
                        onLoginClick();
                    }} className='text-white bg-[#4CCF7E] px-9 py-2 rounded-full font-bold '>Login</button>
                    <Link to="/signin" className='text-black bg-[#E2E2E2] px-8 py-2 rounded-full font-bold  '>SignUp</Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;