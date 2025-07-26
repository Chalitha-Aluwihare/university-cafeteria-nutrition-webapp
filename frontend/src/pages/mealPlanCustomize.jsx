import React,{useState} from "react";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import NutritionTable from "../components/nutritionTable";
import MainMeals from '../data/mainMeals.js'
import Beverages from "../data/beverages.js";
import ShortEats from "../data/shortEats.js";
import BreakfastMealCart from "../components/breakfastMealCart.jsx";
import BreakfasrMeal from '../data/BreakfastMeal.js'
import Footer from "../components/footer"
import NavBar from "../components/navBar.jsx";
import mainMeals from "../data/mainMeals.js";
import { IoCaretBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


function MealPlanCustomize({ }) {

    const { food, handel } = useParams();
    let meal;

    if (food === "MainMeals") {
        meal = MainMeals[Number(handel - 1)];
    }
    if (food === "Beverages") {
        meal = Beverages[Number(handel - 1)];
    }
    if (food === "ShortEats") {
        meal = ShortEats[Number(handel - 1)];
    }

     const navigate = useNavigate();
     const [sizeActive , setSizeActive] = useState('S');

     const [itemCount, setItemCount] = useState(1);



    return (
        <>
            <div className=''>
                <NavBar onLoginClick={() => { }} />


                <div className='px-30 pt-20'>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 bg-[#F8F6F7] py-1 px-5 rounded-full">
                             <IoCaretBack  />
                            <button onClick={() => navigate(-1)} className='lg:text-xl' >Back</button>
                           
                        </div>
                        <div >
                            <div>
                                <h1 className="text-2xl font-extrabold pl-3 xl:text-[30px]  text-[#AEAEAE]">{meal.name}</h1>
                            </div>
                            <div className="flex items-center justify-end pl-3 font-bold">
                                <h3 className="text-[#3FC660] text-2xl">Rs.</h3>
                                {/* <h1>{food}</h1>
                        <h1>{handel}</h1> */}
                                <h2 className="text-[#3FC660] text-3xl">{meal.portions.small.price * itemCount}</h2>
                                <h3 className="text-[#3FC660] text-2xl">.00</h3>
                            </div>
                        </div>

                    </div>


                    <div className="flex items-center justify-between bg-[#262A3B] text-white p-3 rounded-3xl py-10">

                        <div className="pl-3">
                            <div >
                                <h3 className="font- xl:text-[30px]">Size</h3>
                                <div className="flex gap-2">
                                    <button className={`w-[30px] h-[30px]  rounded-[7px] text-[14px] ${sizeActive === 'S' ? 'bg-[#3FC660] text-white' : 'bg-[#F8F6F7] text-black'}`} onClick={() => setSizeActive('S')}>S</button>
                                    <button className={`w-[30px] h-[30px]  rounded-[7px] text-[14px] ${sizeActive === 'M' ? 'bg-[#3FC660] text-white' : 'bg-[#F8F6F7] text-black'}`} onClick={() => setSizeActive('M')}>M</button>
                                </div>

                            </div>
                            <div className="mt-2" >

                                <h3 className="font-semibold xl:text-[30px]">Quantity</h3>
                                <div className="flex gap-2 items-center">
                                    <button className=" w-[30px] h-[30px]  rounded-[7px] text-[14px] text-black bg-[#F8F6F7]" onClick={() => {if (itemCount > 1) setItemCount(itemCount - 1) }}>-</button>
                                    <h4>{itemCount}</h4>
                                    <button className="bg-[#3FC660] w-[30px] h-[30px]  rounded-[7px] text-[14px] text-white" onClick={() => setItemCount(itemCount + 1)}>+</button>
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
                                        <h4 className="font-bold text-[#3FC660]">{sizeActive === 'S' ? meal.portions.small.size : meal.portions.large.size} g</h4>
                                        <h4 className="font-bold text-[#3FC660]">{sizeActive === 'S' ? meal.portions.small.totalCalories : meal.portions.large.totalCalories} kcal</h4>
                                        <h4 className="font-bold text-[#3FC660]">{sizeActive === 'S' ? meal.portions.small.totalCarbs : meal.portions.large.totalCarbs} g</h4>
                                        <h4 className="font-bold text-[#3FC660]">{sizeActive === 'S' ? meal.portions.small.totalProtein : meal.portions.large.totalProtein} g</h4>
                                        <h4 className="font-bold text-[#3FC660]">{sizeActive === 'S' ? meal.portions.small.totalFat : meal.portions.large.totalFat} g</h4>
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
                    </div>



                    <h3 className="text-xl font-bold pl-3 mt-6">
                        Add Your Favorites & Make it Your Own
                    </h3>



                    {
                        food === "MainMeals" &&
                        <div className="flex gap-3 overflow-x-auto space-x-4 p-2">
                            {BreakfasrMeal.map(meal => (
                                <BreakfastMealCart key={meal.id} meal={meal} food={food} />
                            ))}
                        </div>
                    }

                </div>
                <Footer />

            </div>
        </>
    )
}

export default MealPlanCustomize;