import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

function MealCart({ id, meal, food, setFood, setHandel, handel, onClick }) {
    const navigate = useNavigate();

    const handleInternalClick = () => {
        onClick(id); 
    };

    return (
        
        <>
            <div className='bg-[#F8F6F7] flex-shrink-0 w-[184px] h-[410px] overflow-x-auto flex flex-col items-center justify-center text-center rounded-[21px]'>

                <div>
                    <img src={meal.img} alt="" className='w-[148px]' />
                    <div className='flex items-center justify-center gap-2'>
                    <p>Availablety</p>
                    <button className={`w-3 h-3 rounded-xl ${meal.available ? 'bg-green-500' : 'bg-red-500'}`}></button>
                    </div>
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
                    <div className='font-bold text-left'>
                        <h5>:{meal.portions.small.size} g</h5>
                        <h5>:{meal.portions.small.totalCalories} g</h5>
                        <h5>:{meal.portions.small.totalCarbs} g</h5>
                        <h5>:{meal.portions.small.totalProtein} g</h5>
                        <h5>:{meal.portions.small.totalFat} g</h5>
                    </div>

                </div>
                <div className='flex items-center justify-center'>
                    <h3 className='font-bold text-[#B5B5B5] text-[16px]'>Rs.</h3>
                    <h3 className='font-bold text-[20px]'>{meal.portions.small.price}</h3>
                    <h3 className='font-bold text-[#B5B5B5] text-[16px]'>.00</h3>
                </div>
                <Link to={`/mealPlan/mealPlanCustomize/${food}/${id}`} className='bg-[#3FC660] w-[163px] h-[30px] rounded-[6px] text-white' onClick={handleInternalClick} >Customize Meal</Link>
                <button onClick={() => navigate("/orderFood")} className='bg-[#6B6B6B] w-[163px] h-[30px] rounded-[6px] text-white mt-1'>Order Now</button>

            </div>
        </>
    )
}

export default MealCart;