import React from 'react';
import LogoImg from '../assets/home/BG-UniEats-W.png'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


function Footer() {
    return (
        <>
            <div className=' bg-[#262A3B] text-white py-20  grid grid-cols-5'>
                <div className='px-10'>
                    <img className='' src={LogoImg} alt="" />
                </div>
                <div className='px-10'>
                    <h1 className='text-[20px] font-light text-[#4CCF7E] pt-2'>Popular Categories</h1>
                    <div className='mt-2'>
                        <h3 className='text-[15px] text-[#C9C9C9]'>Main Meals</h3>
                        <h3 className='text-[15px] text-[#C9C9C9]'>Beverages</h3>
                        <h3 className='text-[15px] text-[#C9C9C9]'>Short Eats</h3>
                    </div>
                </div>

                <div className='px-10'>
                    <h1 className='text-[20px] font-light text-[#4CCF7E] pt-2'>Get to Know Us</h1>
                    <div className='mt-2'>
                        <h3 className='text-[15px] text-[#C9C9C9]'>About Us</h3>
                        <h3 className='text-[15px] text-[#C9C9C9]'>Our Story</h3>
                    </div>
                </div>

                <div className='px-10'>
                    <h1 className='text-[20px] font-light text-[#4CCF7E] pt-2'>Quick Links</h1>
                    <div className='mt-2'>
                        <h3 className='text-[15px] text-[#C9C9C9]'>Home</h3>
                        <h3 className='text-[15px] text-[#C9C9C9]'>Offers & Discounts</h3>
                        <h3 className='text-[15px] text-[#C9C9C9]'>Account</h3>
                    </div>
                </div>


                <div className='px-10'>
                    <h1 className='text-[20px] font-light text-[#4CCF7E] pt-2'>Customer Support</h1>
                    <div className='mt-2'>
                        <h3 className='text-[15px] text-[#C9C9C9]'>Help Center</h3>
                        <h3 className='text-[15px] text-[#C9C9C9]'>Contact Us</h3>
                    </div>
                </div>
            </div>

            <div className=''>
                    <hr className='border-1 border-[#4CCF7E]' />
                </div>

            <div className=' bg-[#262A3B] text-white pt-20 pb-10 flex justify-between text-center items-center'>
                <div className='pl-90'>
                    <h1 className='text-[20px] font-light text-[#4CCF7E] pt-2'>Powered By</h1>
                    <div className='mt-2 pb-4'>
                        <h3 className='text-[15px] text-[#C9C9C9]'>Uva Wellassa University of Sri Lanka</h3>
                    </div>
                    <div className='px-30 flex gap-3'>
                        <FaFacebook className='' />
                        <IoLogoYoutube className='' />
                        <FaTwitter className='' />
                        <FaSquareInstagram className='' />

                    </div>
                </div>


                
                <div className='pr-90'>
                    <h1 className='text-[20px] font-light text-[#4CCF7E] pt-2'>Powered By</h1>
                    <div className=''>
                        <h3 className='text-[15px] text-[#C9C9C9]'>Uva Wellassa University of Sri Lanka</h3>
                        <h3 className='text-[15px] text-[#C9C9C9]'>Faculty of Technological Studies</h3>
                        <h3 className='text-[13px] text-[#C9C9C9]'>Information and Communication Technology</h3>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Footer;