import React from 'react';
import Footer from '../components/footer';
import SuggesionsImg01 from '../assets/suggesions/FoodSuggesions01.png'
import SuggesionsImg02 from '../assets/suggesions/FoodSuggesions02.png'
import SuggesionsImg03 from '../assets/suggesions/FoodSuggesions03.png'
import SuggesionsImg04 from '../assets/suggesions/FoodSuggesions04.png'
import { FcApproval } from "react-icons/fc";
import { motion } from "framer-motion";

function FoodSuggesions() {
    
    return (
        <>
            <div className='pt-20 px-30'>
                <div>
                    <h2 className="text-2xl  text-[#AEAEAE]">Whst You Eat</h2>
                    <h1 className="text-5xl font-extrabold">Suggesions</h1>
                </div>

                <div className='grid grid-cols-4 gap-5'>
                    <div className="relative py-10 overflow-hidden rounded-2xl">
                        <motion.img
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="w-full h-auto"
                            src={SuggesionsImg01}
                            alt="Breakfast Meal"
                        />

                        <div className="absolute bottom-15 inset-x-0">
                            <div className="text-center">
                                <div className="inline-flex items-center gap-1 justify-center">
                                    <FcApproval />
                                    <h1 className="text-sm font-semibold text-white">AI Suggested</h1>
                                </div>
                                <h1 className="text-xl font-bold text-white mt-1">Breakfast Meal</h1>
                            </div>
                        </div>
                    </div>
                    <div className="relative py-10 overflow-hidden rounded-2xl">
                        <motion.img
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="w-full h-auto"
                            src={SuggesionsImg02}
                            alt="Breakfast Meal"
                        />

                        <div className="absolute bottom-15 inset-x-0">
                            <div className="text-center">
                                <div className="inline-flex items-center gap-1 justify-center">
                                    <FcApproval />
                                    <h1 className="text-sm font-semibold text-white">AI Suggested</h1>
                                </div>
                                <h1 className="text-xl font-bold text-white mt-1">Lunch Meal</h1>
                            </div>
                        </div>
                    </div>
                    <div className="relative py-10 overflow-hidden rounded-2xl">
                        <motion.img
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="w-full h-auto"
                            src={SuggesionsImg03}
                            alt="Breakfast Meal"
                        />

                        <div className="absolute bottom-15 inset-x-0">
                            <div className="text-center">
                                <div className="inline-flex items-center gap-1 justify-center">
                                    <FcApproval />
                                    <h1 className="text-sm font-semibold text-white">AI Suggested</h1>
                                </div>
                                <h1 className="text-xl font-bold text-white mt-1">Dinner Meal</h1>
                            </div>
                        </div>
                    </div>
                    <div className="relative py-10 overflow-hidden rounded-2xl">
                        <motion.img
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="w-full h-auto"
                            src={SuggesionsImg04}
                            alt="Breakfast Meal"
                        />

                        <div className="absolute bottom-15 inset-x-0">
                            <div className="text-center">
                                <div className="inline-flex items-center gap-1 justify-center">
                                    <FcApproval />
                                    <h1 className="text-sm font-semibold text-white">AI Suggested</h1>
                                </div>
                                <h1 className="text-xl font-bold text-white mt-1">ShortEats Meal</h1>
                            </div>
                        </div>
                    </div>
                </div>







            </div>
            <Footer />
        </>
    )
}

export default FoodSuggesions;