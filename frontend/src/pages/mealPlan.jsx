import React, { useState } from "react";
import CategoryItem from "../components/catagorieItem";
import MainMealsCart from "../components/mainMealsCart.jsx"
import BeveragesCart from "../components/beveragesCart.jsx";
import ShortEatsCart from "../components/shortEatsCart.jsx";
import Footer from "../components/footer"
import MainMeals from '../data/mainMeals.js'
import ShortEats from '../data/shortEats.js'
import Beverages from '../data/beverages.js'
import NavBar from "../components/navBar.jsx";
import { main } from "framer-motion/client";

function MealPlan() {
    const [food, setFood] = useState("MainMeals");
    const [handel, setHandel] = useState(0); // This stores selected ID

    const handelClick = (id) => {
        setHandel(id);
    };

    return (
        <div className=''>


            <NavBar onLoginClick={() => { }} />


            <div className='w-full bg-white px-30 pt-20'>

                <h2 className="text-2xl  text-[#AEAEAE] pl-3">Whst You Eat</h2>
                <h1 className="text-5xl font-extrabold pl-3">Customize</h1>

                <div className="flex justify-between mt-5">
                    <h3 className=" text-2xl pl-3">Categories</h3>
                    <h3 className="text-[#3FC660] pr-3">view all</h3>
                </div>
                <div>
                    <CategoryItem setFood={setFood} />

                </div>
                <div className="flex justify-between mt-5">
                    <h3 className=" text-2xl pl-3">Popular Now</h3>
                    <h3 className="text-[#3FC660] pr-3">view all</h3>
                </div>
                {
                    food === "MainMeals" &&
                    <div className="flex gap-3 overflow-x-auto space-x-4 p-2">
                        {MainMeals.map(mainMeal => (
                            <MainMealsCart key={mainMeal.id}
   
                            
                                id={mainMeal.id}         
                                meal={mainMeal}
                                food={food}
                                setFood={setFood}
                                setHandel={setHandel}
                                handel={handel}
                                onClick={handelClick} />
                        ))}
                    </div>
                }
                {
                    food === "Beverages" &&
                    <div className="flex gap-3 overflow-x-auto space-x-4 p-2">
                        {Beverages.map(Beverages => (
                            <BeveragesCart key={Beverages.id} meal={Beverages} food={food} setHandel={setHandel} handel={handel} />
                        ))}
                    </div>
                }
                {
                    food === "ShortEats" &&
                    <div className="flex gap-3 overflow-x-auto space-x-4 p-2">
                        {ShortEats.map(meal => (
                            <ShortEatsCart key={meal.id} meal={meal} food={food} setFood={setFood} setHandel={setHandel} handel={handel} />
                        ))}
                    </div>
                }


            </div>
            <Footer />
        </div>
    )
}

export default MealPlan;