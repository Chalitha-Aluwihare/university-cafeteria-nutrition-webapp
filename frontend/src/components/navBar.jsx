import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import LogoImg from '../assets/navBar/UniEats.png'
import { TiThMenu } from "react-icons/ti";
import { IoIosNotifications } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";


function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const handelMenuOpen = () => {
        setIsOpen(true)
    }

    const handelMenuClose = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div className=' bg-[#262A3B] p-3 fixed w-full h-auto z-50'>
                <div className='flex justify-between items-center text-center '>
                    <div>
                        <img src={LogoImg} alt="UniEats Logo" className='w-30' />
                    </div>
                    <div className='flex gap-3 lg:gap-1'>
                        <IoIosNotifications className='text-white w-8 h-8' />
                        {!isOpen && (
                            <TiThMenu className='text-white w-8 h-8 cursor-pointer block lg:hidden' onClick={handelMenuOpen} />
                        )}


                        {isOpen && (
                            <IoCloseSharp className='text-white w-8 h-8 cursor-pointer block lg:hidden' onClick={handelMenuClose} />
                        )}
                        <div className='flex items-center justify-center hidden lg:block'>

                        <Link to="/" className='font-2 text-white pl-4'>Home</Link>
                        <Link to="/mealPlan" className='font-2 text-white pl-4'>Meal Plan</Link>
                        <Link to="" className='font-2 text-white pl-4'>Order Food</Link>
                        <Link to="/nutritionalHistory" className='font-2 text-white pl-4'>Nutrition History</Link>
                        <Link to="" className='font-2 text-white pl-4'>About Us</Link>
                        <Link to="/signup" className='text-white bg-[#4CCF7E] px-9 py-2 rounded-full font-bold ml-4 '>Login</Link>
                        <Link to="/signin" className='text-black bg-[#E2E2E2] px-8 py-2 rounded-full font-bold ml-4  '>SignUp</Link>
                    </div>

                    </div>

                    
                </div>
                {isOpen && (
                    <div className='text-center block lg:hidden  '>
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
                        <h5 className='p-3 my-2'><Link to="/signup" className='text-white bg-[#4CCF7E] px-9 py-2 rounded-full '>Login</Link></h5>
                        <hr className='border-[0.2px] border-[#4CCF7E] opacity-50' />
                        <h5 className='p-3 my-2'><Link to="/signin" className='text-black bg-[#E2E2E2] px-8 py-2 rounded-full  '>SignUp</Link></h5>
                    </div>
                )}
            </div>


        </>
    )
}

export default NavBar;