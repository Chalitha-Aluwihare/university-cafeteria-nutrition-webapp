import React from 'react';


function MealCart({ meal }) {
    return (
        <>
            <div className='bg-[#F8F6F7] flex-shrink-0 w-[184px] h-[410px] overflow-x-auto flex flex-col items-center justify-center text-center rounded-[21px]'>

                <div>
                    <img src={meal.img.url} alt="" className='w-[148px]' />
                    <h3 className='font-bold text-xl'>{meal.name}</h3>
                </div>
                <div className='flex gap-1 items-center justify-center'>
                    <div className='text-left'>
                        <h5>portions</h5>
                        <h5>calories</h5>
                        <h5>carbs</h5>
                        <h5>protein</h5>
                        <h5>fat</h5>
                    </div>
                    <div className='font-bold'>
                        <h5>:{meal.porthions} g</h5>
                        <h5>:{meal.calories} g</h5>
                        <h5>:{meal.carbs} g</h5>
                        <h5>:{meal.protein} g</h5>
                        <h5>:{meal.fat} g</h5>
                    </div>

                </div>
                <div className='flex items-center justify-center'>
                    <h3 className='font-bold text-[#B5B5B5] text-[16px]'>Rs.</h3>
                    <h3 className='font-bold text-[20px]'>{meal.price}</h3>
                    <h3 className='font-bold text-[#B5B5B5] text-[16px]'>.00</h3>
                </div>
                <button className='bg-[#3FC660] w-[163px] h-[30px] rounded-[6px] text-white'>Customize Meal</button>
                <button className='bg-[#6B6B6B] w-[163px] h-[30px] rounded-[6px] text-white mt-1'>Order Now</button>

            </div>
        </>
    )
}

export default MealCart;