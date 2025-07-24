import React from "react";
import { Link } from 'react-router-dom'
import NutritionTable from "../components/nutritionTable";
import MainMeals from '../data/mainMeals.js'
import BreakfastMealCart from "../components/breakfastMealCart.jsx";
import BreakfasrMeal from '../data/BreakfastMeal.js'
import Footer from "../components/footer"
import { IoChevronBackOutline } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import NavBar from "../components/navBar.jsx";


function MealPlanCustomize() {
    const meal = MainMeals[0]
    return (
        <>
            <div className=''>
                <NavBar onLoginClick={() => { }} />

                <div className='px-30 pt-20'>
                    {/* <div className="flex justify-between px-3 pt-3">
                        <Link to="./mealPlan" className="mb-2 w-[40px] bg-[#D9D9D9] h-[40px] rounded-full items-center flex justify-center"><IoChevronBackOutline /></Link>
                        <button className="mb-2 w-[40px] bg-[#3FC660] h-[40px] rounded-full items-center flex justify-center"><MdOutlineFavorite /></button>
                    </div> */}

                    {/* Meal plate details header */}

                    <div>
                        <h1 className="text-2xl font-extrabold pl-3 xl:text-[30px]  text-[#AEAEAE]">{meal.name}</h1>
                    </div>
                    <div className="flex items-center  pl-3 font-bold ">
                        <h3 className="text-[#3FC660] text-2xl">Rs.</h3>
                        <h2 className="text-[#3FC660] text-3xl">{meal.portions.small.price}</h2>
                        <h3 className="text-[#3FC660] text-2xl">.00</h3>
                    </div>
                    

                        <div className="flex items-center justify-between bg-[#262A3B] text-white p-3 rounded-3xl py-10">

                            <div className="pl-3">
                                <div >
                                    <h3 className="font- xl:text-[30px]">Size</h3>
                                    <div className="flex gap-2">
                                        <button className="bg-[#3FC660] w-[30px] h-[30px]  rounded-[7px] text-[14px]">S</button>
                                        <button className="bg-[#3FC660] w-[30px] h-[30px]  rounded-[7px] text-[14px]">M</button>
                                    </div>

                                </div>
                                <div className="mt-2" >

                                    <h3 className="font-semibold xl:text-[30px]">Quantity</h3>
                                    <div className="flex gap-2 items-center">
                                        <button className="bg-[#3FC660] w-[30px] h-[30px]  rounded-[7px] text-[14px]">-</button>
                                        <h4>3</h4>
                                        <button className="bg-[#3FC660] w-[30px] h-[30px]  rounded-[7px] text-[14px]">+</button>
                                    </div>
                                </div>
                                <div className="mt-2" >

                                    <h3 className="font-semibold xl:text-[30px]">Total Nutrions</h3>
                                    <div className="flex gap-1">
                                        <div className=" items-center font-light text-[14px]">
                                            <h4>Portionsg</h4>
                                            <h4>Calories</h4>
                                            <h4>Carbs</h4>
                                            <h4>Protein</h4>
                                            <h4>Fat </h4>
                                        </div>

                                        <div className=" items-center font-light text-[14px]">
                                            <h4 className="font-bold text-[#3FC660]">{meal.portions.small.size} g</h4>
                                            <h4 className="font-bold text-[#3FC660]">{meal.portions.small.totalCalories} kcal</h4>
                                            <h4 className="font-bold text-[#3FC660]">{meal.portions.small.totalCarbs} g</h4>
                                            <h4 className="font-bold text-[#3FC660]">{meal.portions.small.totalProtein} g</h4>
                                            <h4 className="font-bold text-[#3FC660]">{meal.portions.small.totalFat} g</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <Link to="./orderFood" className="bg-[#3FC660] py-2 px-10 rounded-[7px] text-white text-center font-semibold text-xl">Place Order</Link>
                                </div>
                            </div>
                            <div className="pr-3">
                                <h3 className="text-xl xl:text-[30px] font-bold pl-3 pt-4">
                                    Details of Your Meal Plate
                                </h3>

                                <div className="m-1">
                                    {meal.portions.small.items.map((item, index) => (
                                        <NutritionTable key={index} meal={item} />
                                    ))}
                                </div>
                            </div>
                            {/* <div className="pr-3">
                                <img className="w-2/4" src={meal.img} alt="" />
                            </div> */}
                        </div>
                    


                    <h3 className="text-xl font-bold pl-3 mt-6">
                        Add Your Favorites & Make it Your Own
                    </h3>



                    <div className="flex gap-3 overflow-x-auto space-x-4 p-2">
                        {BreakfasrMeal.map((meal, index) => (
                            <BreakfastMealCart key={index} meal={meal} />
                        ))}
                    </div>

                </div>
                <Footer />

            </div>
        </>
    )
}

export default MealPlanCustomize;