import React, { useState } from "react";
import nutritionHistory from "../data/nutritionHistory";
import { IoChevronBackOutline } from "react-icons/io5";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Footer from "../components/footer";
import { useMemo } from "react";
import NavBar from "../components/navBar";

function NutritionalHistory() {

    const [active, setActive] = useState(1);
    const COLORS = ['#3FC660', '#FFBB28', '#FF8042', '#8884d8'];


    const [index, setIndex] = useState(0);
    const meal = nutritionHistory[index];

    const nextDate = () => {
        if (active === 1) {
            setIndex(prev => (prev < nutritionHistory.length - 1 ? prev + 1 : prev));
        }
        if (active === 2) {
            setIndex(prev => (prev < nutritionHistory.length - 7 ? prev + 7 : prev));

        } else {
            setIndex(prev => (prev < nutritionHistory.length - 29 ? prev + 29 : prev));
        }
    }

    const prevDate = () => {
        if (active === 1) {
            setIndex(prev => (prev > 0 ? prev - 1 : prev));
        }
        if (active === 2) {
            setIndex(prev => (prev > 0 ? prev - 6 : prev));

        } else {
            setIndex(prev => (prev > 0 ? prev - 29 : prev));
        }

    }

    const data = useMemo(() => {
        let calories = 0;
        let protein = 0;
        let carbs = 0;
        let fat = 0;

        let range = 1;
        if (active === 2) {
            range = 6;
        }
        else if (active === 3) {
            range = 30;
        }

        const start = Math.max(0, index - range);
        const end = Math.min(nutritionHistory.length, index + 1);

        for (let i = start; i < end; i++) {
            const m = nutritionHistory[i];
            if (!m || !m.meals) continue;

            calories += m.meals.breakfast.calories + m.meals.lunch.calories + m.meals.dinner.calories;
            protein += m.meals.breakfast.protein + m.meals.lunch.protein + m.meals.dinner.protein;
            carbs += m.meals.breakfast.carbs + m.meals.lunch.carbs + m.meals.dinner.carbs;
            fat += m.meals.breakfast.fat + m.meals.lunch.fat + m.meals.dinner.fat;
        }

        return [
            { name: 'Calories', value: calories },
            { name: 'Protein', value: protein },
            { name: 'Carbs', value: carbs },
            { name: 'Fat', value: fat }
        ];
    }, [index, active, nutritionHistory]);




    const mealHistory = ['', 'Day', 'Week', 'Month']

    return (
        <>
            <div className=''>
                <NavBar onLoginClick={() => {}} />

                <div className='px-30 pt-20'>
                    <div className="pl-3">
                        <h1 className="font-bold text-3xl">Nutritional History</h1>
                        <h1 className="font-semibold text-2xl text-[#D9D9D9]">Choose Timeframe</h1>
                    </div>

                    <div className="pl-3 flex gap-2 mt-3">
                        <button onClick={() => setActive(1)} className={`w-[67px] h-[23px] rounded-[6px] ${active === 1 ? "bg-[#3FC660]" : "bg-[#D9D9D9]"}`}>
                            <div className={`${active === 1 ? "text-[#FFFFFF]" : "text-[#232323]"}`}>Daliy</div>
                        </button>
                        <button onClick={() => setActive(2)} className={`w-[67px] h-[23px] rounded-[6px] ${active === 2 ? "bg-[#3FC660]" : "bg-[#D9D9D9]"}`}>
                            <div className={`${active === 2 ? "text-[#FFFFFF]" : "text-[#232323]"}`}>Weekly</div>
                        </button>
                        <button onClick={() => setActive(3)} className={`w-[67px] h-[23px] rounded-[6px] ${active === 3 ? "bg-[#3FC660]" : "bg-[#D9D9D9]"}`}>
                            <div className={`${active === 3 ? "text-[#FFFFFF]" : "text-[#232323]"}`}>Monthly</div>
                        </button>
                    </div>

                    <div className="pt-3 flex px-3 items-center justify-center">
                        <div className="bg-[#E2E2E2] flex justify-between items-center w-full rounded-[6px] px-4 py-2">
                            {/* Left Button */}
                            <div className="flex items-center">
                                <button onClick={prevDate}>
                                    <IoChevronBackOutline className="text-[40px]" />

                                </button>
                            </div>

                            {/* Center Date Display */}
                            <div className="flex items-center space-x-3">
                                {/* Left side year/month */}
                                <div className="text-right leading-tight text-sm">
                                    <h3>{meal.year}</h3>
                                    <h3>{meal.month}</h3>
                                </div>

                                {/* Big day */}
                                <div>
                                    <h3 className="text-5xl font-bold">{meal.dayNo}</h3>
                                </div>

                                {/* Right side year/month */}
                                <div className="leading-tight text-sm">
                                    <h3>{mealHistory[active]}</h3>
                                    <h3>{meal.day}</h3>
                                </div>
                            </div>

                            {/* Right Button */}
                            <div className="flex items-center">
                                <button onClick={nextDate}>
                                    <IoChevronBackOutline className="text-[40px] rotate-180" />

                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=" pt-3">
                        <ResponsiveContainer width="100%" height={350} className="w-full h-full">
                            <PieChart>
                                <Pie
                                    dataKey="value"
                                    data={data}
                                    outerRadius={150}
                                    fill="#3FC660"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="flex justify-between items-center px-4 pt-3">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-[20px] font-semibold">
                                <div className="bg-[#3FC660] w-[20px] h-[20px]"></div>
                                <div className="flex justify-between items-center w-full gap-2">
                                    <h3>calories</h3>
                                    <h3>{meal.meals.breakfast.calories + meal.meals.lunch.calories + meal.meals.dinner.calories} kcal</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-[20px] font-semibold">
                                <div className="bg-[#FFBB28] w-[20px] h-[20px]"></div>
                                <div className="flex justify-between items-center w-full gap-2">
                                    <h3>protein</h3>
                                    <h3>{meal.meals.breakfast.protein + meal.meals.lunch.protein + meal.meals.dinner.protein} g</h3>
                                </div>
                            </div>

                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-[20px] font-semibold">
                                <div className="bg-[#FF8042] w-[20px] h-[20px]"></div>
                                <div className="flex justify-between items-center w-full gap-2">
                                    <h3>carbs</h3>
                                    <h3>{meal.meals.breakfast.carbs + meal.meals.lunch.carbs + meal.meals.dinner.carbs} g</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-[20px] font-semibold">
                                <div className="bg-[#8884d8] w-[20px] h-[20px]"></div>
                                <div className="flex justify-between items-center w-full gap-2">
                                    <h3>fat</h3>
                                    <h3>{meal.meals.breakfast.fat + meal.meals.lunch.fat + meal.meals.dinner.fat}g</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <div className="m-2 text-sm text-gray-800 px-3">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="font-semibold text-base text-[#3FC660]">Breakfat</h3>
                                <span className="text-xs  text-[#3FC660]">g</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <div>Calories <strong>{meal.meals.breakfast.calories}kcal</strong></div>
                                <div>Carbs <strong>{meal.meals.breakfast.carbs}g</strong></div>
                                <div>Protein <strong>{meal.meals.breakfast.protein}g</strong></div>
                                <div>Fat <strong>{meal.meals.breakfast.fat}g</strong></div>
                            </div>

                        </div>
                        <div className="m-2 text-sm text-gray-800 px-3">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="font-semibold text-base text-[#3FC660]">Lunch</h3>
                                <span className="text-xs  text-[#3FC660]">g</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <div>Calories <strong>{meal.meals.lunch.calories}kcal</strong></div>
                                <div>Carbs <strong>{meal.meals.lunch.carbs}g</strong></div>
                                <div>Protein <strong>{meal.meals.lunch.protein}g</strong></div>
                                <div>Fat <strong>{meal.meals.lunch.fat}g</strong></div>
                            </div>

                        </div>
                        <div className="m-2 text-sm text-gray-800 px-3">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="font-semibold text-base text-[#3FC660]">Dinner</h3>
                                <span className="text-xs  text-[#3FC660]">g</span>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <div>Calories <strong>{meal.meals.dinner.calories}kcal</strong></div>
                                <div>Carbs <strong>{meal.meals.dinner.carbs}g</strong></div>
                                <div>Protein <strong>{meal.meals.dinner.protein}g</strong></div>
                                <div>Fat <strong>{meal.meals.dinner.fat}g</strong></div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-5">
                        
                    </div>
                </div>
                <Footer />


            </div>
        </>
    )
}

export default NutritionalHistory;