import React from 'react';

function NutritionTable({ meal, }) {

    return (
        <>
            <div className="m-2 text-sm text-gray-800">
                <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold text-base text-[#3FC660]">{meal.name}</h3>
                    <span className="text-xs  text-[#3FC660]">{meal.portion}g</span>
                </div>
                <div className="flex justify-between items-center mb-1 text-right gap-10 text-white">
                    <div className='flex items-center justify-start'>
                        <div>
                            Calories
                        </div>
                        <div className='text-yellow-500 font-bold flex justify-end'>
                            {meal.calories}kcal
                        </div>
                    </div>
                    <div className='flex items-center justify-start'>
                        <div>
                            Carbs
                        </div>
                        <div className='text-yellow-500 font-bold flex justify-end'>
                            {meal.carbs}g
                        </div>
                    </div>

                    <div className='flex items-center justify-start'>
                        <div>
                            Protein
                        </div>
                        <div className='text-yellow-500 font-bold flex justify-end'>
                            {meal.protein}g
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            Fat
                        </div>
                        <div className='text-yellow-500 font-bold flex justify-end'>
                            {meal.fat}g
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            Quantity
                        </div>
                        <div className='text-yellow-500 font-bold flex justify-end'>
                            {meal.quantity}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NutritionTable;