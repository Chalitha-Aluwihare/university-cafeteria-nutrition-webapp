import React from 'react';
import MealImg from '../assets/mealCart/CartImg.png'

function MealCart ({Bportions, Bprice}) {
    return(
        <>
        <div className='bg-[#F8F6F7] flex-shrink-0 w-[184px] h-[410px] overflow-x-auto flex flex-col items-center justify-center text-center rounded-[21px]'>
            <img src={MealImg}  alt="" className='w-[148px]' />
            <div className=''>
            <h3 className='font-bold text-xl'>Breakfast Meal</h3>  
            </div>
            <div className='flex gap-1'>
                <div className='text-left'>
                    <h5>portions</h5>
                    <h5>calories</h5>
                    <h5>carbs</h5>
                    <h5>protein</h5>
                    <h5>fat</h5>
                </div>
                <div className='font-bold'>
                    <h5>:{Bportions}</h5>
                    <h5>:{Bportions}</h5>
                    <h5>:{Bportions}</h5>
                    <h5>:{Bportions}</h5>
                    <h5>:{Bportions}</h5>
                </div>
                
            </div>
            <div className='flex items-end'>
                    <h3 className='font-bold text-[#B5B5B5] text-[16px]'>Rs.</h3>
                    <h3 className='font-bold text-[20px]'>{Bprice}</h3>
                    <h3 className='font-bold text-[#B5B5B5] text-[16px]'>.00</h3>
                </div>
            <button className='bg-[#3FC660] w-[163px] h-[30px] rounded-[6px] text-white'>Customize Meal</button>
            <button className='bg-[#6B6B6B] w-[163px] h-[30px] rounded-[6px] text-white mt-1'>Order Now</button>
        </div>
        </>
    )
}

export default MealCart;