import React from 'react';
import { HiChatAlt, HiCog } from "react-icons/hi";
import Bg01 from '../assets/home/Bg-01.jpg';

function Home() {
  return (
    <div className=' flex items-center justify-center relative bg-black'>
      
      <div className='w-[402px] bg-white rounded-lg'>
        <img src={Bg01} />

        <div className='flex flex-col items-center justify-center z-10 bg-white '>
          <h2 className='text-4xl'>Welcome to</h2>
            <h1 className='text-7xl font-bold'>UniEats</h1>
            <p className='text-center font-light mt-4 ml-10 mr-10'>Fuel your goals with personalized meals, real-time calorie tracking,and smart nutrition advice all in one app.</p>
            <button className='bg-[#3FC660] text-white  rounded-lg mt-6 w-[279px] h-[53px] mb-10'>Get Started</button>
        </div>

      </div>
    </div>
  );
}

export default Home;
