import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import Img01 from '../assets/home/ArtBord-01.png'
import Img02 from '../assets/home/ArtBord-02.png'
import Img03 from '../assets/home/ArtBord-03.png'
import Img04 from '../assets/home/ArtBord-04.png'

function AboutUs() {
    return (
        <>
            <NavBar />
            <div className='px-30 pt-20'>
                <h1 className="text-4xl font-extrabold">About Us</h1>
                <h2 className="text-2xl text-[#AEAEAE]">Where Sports Meets Smart Meal Planning</h2>
                <p className= 'pb-0'>
                    Welcome to our web-based cafeteria system developed especially for the sports students of Uva Wellassa University. This platform is designed to make your meal planning smarter and healthier.
                    We understand that every athlete has different needs. That’s why our system offers
                </p>
                <div className='flex w-1/4  pt-5 gap-5'>
                    <img src={Img01} alt="ArtBoard 1" className='rounded-2xl'/>
                    <img src={Img02} alt="ArtBoard 2" className='rounded-2xl'/>
                    <img src={Img03} alt="ArtBoard 3" className='rounded-2xl'/>
                    <img src={Img04} alt="ArtBoard 4" className='rounded-2xl'/>
                </div>
                <p className= 'pt-5 pb-20'>
                    This system is built using React, Tailwind CSS, Node.js, and MongoDB to give you a fast, modern, and secure experience.
                </p>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs;