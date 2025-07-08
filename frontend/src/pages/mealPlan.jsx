import React from "react";
import CategoryItem from "../components/catagorieItem";
import MainMealsCart from "../components/mainMealsCart.jsx"
import Footer from "../components/footer"
import MainMeals from '../data/mainMeals.js'
import NavBar from "../components/navBar.jsx";

function MealPlan() {
    return (
        <>
            <div className=''>


                <NavBar onLoginClick={() => {}} />


                <div className='w-full bg-white px-30 pt-20'>

                    <h2 className="text-2xl text-[#AEAEAE] pl-3">Whst You Eat</h2>
                    <h1 className="text-4xl font-extrabold pl-3">Customize</h1>

                    <div className="flex justify-between mt-5">
                        <h3 className=" text-2xl pl-3">Categories</h3>
                        <h3 className="text-[#3FC660] pr-3">view all</h3>
                    </div>
                    <div>
                        <CategoryItem />

                    </div>
                    <div className="flex justify-between mt-5">
                        <h3 className=" text-2xl pl-3">Popular Now</h3>
                        <h3 className="text-[#3FC660] pr-3">view all</h3>
                    </div>
                    <div className="flex gap-3 overflow-x-auto space-x-4 p-2">
                        {MainMeals.map(meal => (
                            <MainMealsCart key={meal.id} meal={meal} />
                        ))}
                    </div>
                    


                </div>
                <Footer />
            </div>
        </>
    )
}

export default MealPlan;