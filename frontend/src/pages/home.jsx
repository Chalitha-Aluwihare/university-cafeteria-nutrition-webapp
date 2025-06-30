import React from 'react';
import { HiChatAlt, HiCog } from "react-icons/hi";
import Bg01 from '../assets/home/Bg-01.jpg';
import NavBar from '../components/navBar';
import IMG01 from '../assets/mealCart/CartImg.png'
import ArtBord01 from '../assets/home/ArtBord-01.png'
import ArtBord02 from '../assets/home/ArtBord-02.png'
import ArtBord03 from '../assets/home/ArtBord-03.png'
import ArtBord04 from '../assets/home/ArtBord-04.png'
import Footer from '../components/footer'
import Review from '../components/review'
import ReviewData from '../data/reviewData'

function Home() {
  return (
    <div >

      {/* Section one */}
      <div className='bg-[#262A3B] w-full'>
        {/* Header Section */}
        <div className='relative'>
          <NavBar className='absolute z-10 w-full ' />

        </div>

        
      </div>
      {/* Landing Section */}
        <div className='flex items-center justify-betweenitems-center px-6 pt-25 py-10 bg-[#262A3B] w-full'>
          <div>
            <h1 className='text-6xl font-semibold text-[#4CCF7E]'>Welcome to </h1>
            <h1 className='text-8xl font-extrabold text-white '>UniEats</h1>
            <p className='mt-4 text-2xl text-white  '>Fuel your goals with personalized meals, real-time calorie tracking, and smart nutrition advice all in one app.</p>
            <button className='bg-[#4CCF7E]  text-2xl rounded-full mt-6  px-15 py-3'>Get Started</button>
          </div>
          <div className='flex justify-end'>
            <img className='w-2/3' src={IMG01} alt="Cart" />
          </div>

        </div>

      {/* Section tow */}
      <div className='text-center items-center'>
        <div className='mt-15 mb-15' >
          <h1 className='text-7xl'>Why use UniEats</h1>
          <p className='mt-2 text-2xl font-light'>Our lab-analyzed nutrition data will help you</p>
        </div>

        {/* Importent Point our website section */}
        <div className='flex items-center justify-between px-10 pt-10 bg-[#FD683D] mx-10 rounded-3xl mt-10'>
          <div className='text-left'>
            <h1 className='text-7xl text-semibold w-3/4'>Custom Meal Plate Creation</h1>
            <p className='text-2xl mt-3 font-extralight w-2/3'>Users can create their own meal by selecting different food items from the canteen menu and instantly see the combined nutritional values of the selected items.</p>
          </div>
          <div>
            <img className='w-[850px] rounded-tl-4xl rounded-tr-4xl ' src={ArtBord01} alt="" />
          </div>
        </div>
        <div className='flex items-center justify-between px-10 pt-10 bg-[#2ECAD6] mx-10 rounded-3xl mt-10'>
          <div className='text-left'>
            <h1 className='text-7xl text-semibold w-3/4'>Nutrition Information Display</h1>
            <p className='text-2xl mt-3 font-extralight w-2/3'>Each food item on the menu shows clear nutritional details like calories, protein, fat, and carbs to help users make healthier choices.</p>
          </div>
          <div>
            <img className='w-[850px] rounded-tl-4xl rounded-tr-4xl ' src={ArtBord02} alt="" />
          </div>
        </div>
        <div className='flex items-center justify-between px-10 pt-10 bg-[#4CCF7E] mx-10 rounded-3xl mt-10'>
          <div className='text-left'>
            <h1 className='text-7xl text-semibold w-3/4'>Nutrition History Tracking</h1>
            <p className='text-2xl mt-3 font-extralight w-2/3'>The system saves all past orders with nutrition data, allowing users to view and track their eating habits daily, weekly, or monthly.</p>
          </div>
          <div>
            <img className='w-[850px] rounded-tl-4xl rounded-tr-4xl ' src={ArtBord04} alt="" />
          </div>
        </div>
        <div className='flex items-center justify-between px-10 pt-10 bg-[#FDAC2A] mx-10 rounded-3xl mt-10'>
          <div className='text-left'>
            <h1 className='text-7xl text-semibold w-3/4'>Personal Nutrition Suggestions</h1>
            <p className='text-2xl mt-3 font-extralight w-2/3'>Based on users’ previous meals and nutrition goals, the app provides personalized food recommendations to help maintain a balanced diet.</p>
          </div>
          <div>
            <img className='w-[850px] rounded-tl-4xl rounded-tr-4xl ' src={ArtBord03} alt="" />
          </div>
        </div>
      </div>

      {/* Section 03 */}
      <div className='grid grid-cols-3 gap-4 px-10 mt-15 mb-15'>
        {ReviewData.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
      <div className='flex justify-between px-10'>
        <button className='bg-[#4CCF7E] py-4 px-10 rounded-full text-xl'>Add Revie</button>
        <button className='text-xl text-[#4CCF7E]'>See More</button>
      </div>

      {/* Section 04 */}
      <div className='mt-15 mb-15 text-center px-10' >
        <h1 className='text-7xl'>If you count calories, macros, or micronutrients, you can count on us</h1>
        <button className='bg-[#4CCF7E]  text-2xl rounded-full mt-6  px-15 py-3'>Get Started</button>
      </div>

      <Footer />

    </div>
  );
}

export default Home;
