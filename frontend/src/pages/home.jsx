import React from 'react';
import { HiChatAlt } from "react-icons/hi";
import { HiCog } from "react-icons/hi";

function Home() {
  return (
    <div>
      <h1 className='text-[30px] text-center font-inter font-bold'>Test React</h1>
      <p className='text-[16px] text-center font-inter'>This is a simple Home component built using React. <br>
      </br>You can modify and expand it as needed.</p>
      <div className='flex flex-row items-center justify-center gap-4 mt-4'>
        <HiChatAlt className='text-5xl' />    
        <HiCog className=' text-5xl' />
      </div>
    </div>
  );
}

export default Home;
