import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
        <div className=' bg-[#262A3B] p-3 fixed w-full h-auto text-white flex  items-center justify-center gap-4 text-xl'>  
            <Link to="/" className='cusur-ponter hover:text-[#4CCF7E] transition-transform transform hover:scale-105 '>Main Meals</Link>
            <Link to="/shortEats" className='cusur-ponter hover:text-[#4CCF7E] transition-transform transform hover:scale-105 '>Short Eats</Link>
            <Link to="/bevarages" className='cusur-ponter hover:text-[#4CCF7E] transition-transform transform hover:scale-105 '>Beverages</Link>
            <Link to="/order" className='cusur-ponter hover:text-[#4CCF7E] transition-transform transform hover:scale-105 '>Orders</Link>
        </div>
    </>
        
      
    
  );
}

export default NavBar;
