import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className='items-center text-center justify-center bg-black text-white pt-2'>
                <h1 className='text-[20px] font-semibold pt-2'>Popular Categories</h1>
                <div className='mt-2'>
                    <h3 className='text-[15px] text-[#C9C9C9]'>Main Meals</h3>
                    <h3 className='text-[15px] text-[#C9C9C9]'>Beverages</h3>
                    <h3 className='text-[15px] text-[#C9C9C9]'>Short Eats</h3>
                </div>

                <h1 className='text-[20px] font-semibold pt-2'>Get to Know Us</h1>
                <div className='mt-2'>
                    <h3 className='text-[15px] text-[#C9C9C9]'>About Us</h3>
                    <h3 className='text-[15px] text-[#C9C9C9]'>Our Story</h3>
                </div>

                <h1 className='text-[20px] font-semibold pt-2'>Quick Links</h1>
                <div className='mt-2'>
                    <h3 className='text-[15px] text-[#C9C9C9]'>Home</h3>
                    <h3 className='text-[15px] text-[#C9C9C9]'>Offers & Discounts</h3>
                    <h3 className='text-[15px] text-[#C9C9C9]'>Account</h3>
                </div>

                <h1 className='text-[20px] font-semibold pt-2'>Customer Support</h1>
                <div className='mt-2'>
                    <h3 className='text-[15px] text-[#C9C9C9]'>Help Center</h3>
                    <h3 className='text-[15px] text-[#C9C9C9]'>Contact Us</h3>
                </div>

                <h1 className='text-[20px] font-semibold pt-2'>Powered By</h1>
                <div className='mt-2 pb-4'>
                    <h3 className='text-[15px] text-[#C9C9C9]'>Uva Wellassa University of Sri Lanka</h3>
                    <h3 className='text-[15px] text-[#C9C9C9]'>Faculty of Technological Studies</h3>
                    <h3 className='text-[13px] text-[#C9C9C9]'>Information and Communication Technology</h3>
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <FaFacebook className='mb-5 fill-[#C9C9C9] w-[27px]' />
                    <FaYoutube className='mb-5 fill-[#C9C9C9] w-[27px]' />
                    <FaTiktok className='mb-5 fill-[#C9C9C9] w-[27px]' />
                </div>

                
            </div>
        </>
    )
}

export default Footer;