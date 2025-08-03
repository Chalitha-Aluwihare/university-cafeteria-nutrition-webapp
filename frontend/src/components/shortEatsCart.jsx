import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';


function ShortEatsCart({ meal }) {
    const navigate = useNavigate();
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true });

    return (
        <>
            {/* <div className='bg-[#F8F6F7] flex-shrink-0 w-[184px] h-[410px] overflow-x-auto flex flex-col items-center justify-center text-center rounded-[21px]'> */}
                <motion.div
                            className=' transition-all duration-300  bg-[#F8F6F7] flex-shrink-0 w-[184px] h-[440px] overflow-x-auto flex flex-col items-center justify-center text-center rounded-[21px] hover:scale-105 mb-10'
                            ref={ref1}
                            initial={{ opacity: 0 }}
                            animate={isInView1 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8 }}
                        >

                <div>
                    <img src={meal.img} alt="" className='w-[148px]' />
                    <h3 className='font-bold text-xl'>{meal.name}</h3>
                    <div className='flex items-center justify-center gap-2'>
                    <p>Availablety</p>
                    <button className={`w-3 h-3 rounded-xl ${meal.available ? 'bg-green-500' : 'bg-red-500'}`}></button>
                    </div>
                </div>
                <div className='flex gap-1 items-center justify-center'>
                    <div className='text-left'>
                        <h5>portions</h5>
                        <h5>calories</h5>
                        <h5>carbs</h5>
                        <h5>protein</h5>
                        <h5>fat</h5>
                    </div>
                    <div className='font-bold'>
                        <h5>:{meal.size} g</h5>
                        <h5>:{meal.totalCalories} g</h5>
                        <h5>:{meal.totalCarbs} g</h5>
                        <h5>:{meal.totalProtein} g</h5>
                        <h5>:{meal.totalFat} g</h5>
                    </div>

                </div>
                <div className='flex items-center justify-center'>
                    <h3 className='font-bold text-[#B5B5B5] text-[16px]'>Rs.</h3>
                    <h3 className='font-bold text-[20px]'>{meal.price}</h3>
                    <h3 className='font-bold text-[#B5B5B5] text-[16px]'>.00</h3>
                </div>
                
                <button onClick={
                    () => navigate("/orderFood",{
                        state : {
                            mealName : meal.name,
                            totalPrice : meal.price
                            
                        }
                    }
                        
                    )

                }
                className='bg-[#3FC660] w-[163px] h-[30px] rounded-[6px] text-white cursor-pointer flex items-center justify-center hover:bg-[#4CCF7E] transition duration-300' >Order Now</button>

            </motion.div>
        </>
    )
}

export default ShortEatsCart;