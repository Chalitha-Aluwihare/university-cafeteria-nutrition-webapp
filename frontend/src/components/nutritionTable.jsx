import React from 'react';

function NutritionTable({ meal }) {
    return (
        <>
            <div className="m-2 text-sm text-gray-800">
                <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold text-base text-[#3FC660]">{meal.name}</h3>
                    <span className="text-xs  text-[#3FC660]">{meal.portion}g</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <div>Calories <strong>{meal.calories}kcal</strong></div>
                    <div>Carbs <strong>{meal.carbs}g</strong></div>
                    <div>Protein <strong>{meal.protein}g</strong></div>
                    <div>Fat <strong>{meal.fat}g</strong></div>
                </div>
            </div>
        </>
    )
}

export default NutritionTable;