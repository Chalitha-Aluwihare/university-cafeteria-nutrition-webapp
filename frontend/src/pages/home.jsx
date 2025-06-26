import React from 'react';
import { HiChatAlt, HiCog } from "react-icons/hi";
import Bg01 from '../assets/home/Bg-01.jpg';
import NavBar from '../components/navBar';
import IMG01 from '../assets/mealCart/CartImg.png'
import Footer from '../components/footer'

function Home() {
  return (
    <div >

      {/* Section one */}
      <div className='bg-[#262A3B] w-full'>
        {/* Header Section */}
      <div className='relative'>
        <NavBar className='absolute z-10 w-full ' />
        
      </div>

      {/* Landing Section */}
      <div className='flex items-center justify-between w-full px-6 py-10'>
        <div>
        <h1 className='text-6xl font-semibold text-[#4CCF7E]'>Welcome to </h1>
        <h1 className='text-8xl font-extrabold text-white '>UniEats</h1>
        <p className='mt-4 text-2xl text-white '>Fuel your goals with personalized meals, real-time calorie tracking, and smart nutrition advice all in one app.</p>
        <button className='bg-[#4CCF7E]  text-2xl rounded-full mt-6  px-15 py-3'>Get Started</button>
      </div>
      <div>
        <img className='w-[850px]' src={IMG01} alt="Cart" />
      </div>
      <div>
        <button className='bg-white text-white rounded-full mt-6 h-[13px] w-[13px]'></button>
        <button className='bg-white text-white rounded-full mt-6 h-[13px] w-[13px]'></button>
        <button className='bg-white text-white rounded-full mt-6 h-[13px] w-[13px]'></button>
      </div>
      </div>
      </div>

      {/* Section tow */}
      <div className='text-center items-center'>
        <div className='mt-15 mb-15' >
          <h1 className='text-7xl'>Why use UniEats</h1>
          <p className='mt-2 text-2xl font-light'>Our lab-analyzed nutrition data will help you</p>
        </div>
        
        {/* Importent Point our website section */}
        <div className='flex items-center justify-between p-10 bg-[#FD683D] mx-10 rounded-3xl mt-10'>
          <div className='text-left'>
            <h1 className='text-7xl text-semibold'>Custom Meal Plate Creation</h1>
            <p className='text-2xl mt-3 font-light'>Users can create their own meal by selecting different food items from the canteen menu and instantly see the combined nutritional values of the selected items.</p>
          </div>
          <div>
            <img className='w-[850px]' src={IMG01} alt="" />
          </div>
        </div>
        <div className='flex items-center justify-between p-10 bg-[#2ECAD6] mx-10 rounded-3xl mt-10'>
          <div className='text-left'>
            <h1 className='text-7xl text-semibold'>Nutrition Information Display</h1>
            <p className='text-2xl mt-3 font-light'>Each food item on the menu shows clear nutritional details like calories, protein, fat, and carbs to help users make healthier choices.</p>
          </div>
          <div>
            <img className='w-[850px]' src={IMG01} alt="" />
          </div>
        </div>
        <div className='flex items-center justify-between p-10 bg-[#4CCF7E] mx-10 rounded-3xl mt-10'>
          <div className='text-left'>
            <h1 className='text-7xl text-semibold'>Nutrition History Tracking</h1>
            <p className='text-2xl mt-3 font-light'>The system saves all past orders with nutrition data, allowing users to view and track their eating habits daily, weekly, or monthly.</p>
          </div>
          <div>
            <img className='w-[850px]' src={IMG01} alt="" />
          </div>
        </div>
        <div className='flex items-center justify-between p-10 bg-[#FDAC2A] mx-10 rounded-3xl mt-10'>
          <div className='text-left'>
            <h1 className='text-7xl text-semibold'>Personal Nutrition Suggestions</h1>
            <p className='text-2xl mt-3 font-light'>Based on users’ previous meals and nutrition goals, the app provides personalized food recommendations to help maintain a balanced diet.</p>
          </div>
          <div>
            <img className='w-[850px]' src={IMG01} alt="" />
          </div>
        </div>
      </div>

      {/* Section 03 */}
      <div className='mt-15 mb-15 text-center px-10' >
          <h1 className='text-7xl'>If you count calories, macros, or micronutrients, you can count on us</h1>
          <button className='bg-[#4CCF7E]  text-2xl rounded-full mt-6  px-15 py-3'>Get Started</button>
        </div>

        <Footer />
      
    </div>
  );
}

export default Home;
