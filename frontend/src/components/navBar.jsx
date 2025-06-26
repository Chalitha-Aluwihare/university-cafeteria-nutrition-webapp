import React from 'react';
import LogoImg from '../assets/home/BG-UniEats.png'


function NavBar() {
    return (
        <>
            <div className='flex items-center justify-between bg-white p-3'>
                <div>
                    <img src={LogoImg} alt="UniEats Logo" className='w-32' />
                </div>
                <div className='gap-5 flex items-center justify-center'>
                    <button className='font-bold '>Home</button>
                    <button className='font-bold '>Meal Plan</button>
                    <button className='font-bold '>Order Food</button>
                    <button className='font-bold '>Nutrition History</button>
                    <button className='font-bold '>About Us</button>
                    <button className='text-white bg-[#4CCF7E] px-9 py-2 rounded-full font-bold '>Login</button>
                    <button className='text-black bg-[#E2E2E2] px-8 py-2 rounded-full font-bold '>SignUp</button>
                </div>
            </div>
        </>
    )
}

export default NavBar;