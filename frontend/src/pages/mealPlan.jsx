import React from "react";
import CategoryItem from "../components/catagorieItem";
import MealCart from "../components/mealCart"
import Footer from "../components/footer"

function MealPlan() {
    return (
        <>
            <div className=' flex items-center justify-center relative bg-black'>
                <div className='w-[402px] bg-white'>

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
                        <MealCart Bportions="200" Bprice="100" />
                        <MealCart />
                        <MealCart />
                        <MealCart />
                        <MealCart />


                    </div>
                    <Footer />
                    

                </div>
            </div>
        </>
    )
}

export default MealPlan;