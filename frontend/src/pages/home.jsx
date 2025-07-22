import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'
import { HiChatAlt, HiCog } from "react-icons/hi";
import NavBar from '../components/navBar';
import MotionImg01 from '../assets/home/motion/Motion-01.png'
import ArtBord01 from '../assets/home/ArtBord-01.png'
import ArtBord02 from '../assets/home/ArtBord-02.png'
import ArtBord03 from '../assets/home/ArtBord-03.png'
import ArtBord04 from '../assets/home/ArtBord-04.png'
import Footer from '../components/footer'
import Review from '../components/review'
import ReviewData from '../data/reviewData'
import Bg01 from '../assets/home/BG-02.png'


function Home() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  const ref7 = useRef(null)
  const isInView1 = useInView(ref1, { once: true })
  const isInView2 = useInView(ref2, { once: true })
  const isInView3 = useInView(ref3, { once: true })
  const isInView4 = useInView(ref4, { once: true })
  const isInView5 = useInView(ref5, { once: true })
  const isInView6 = useInView(ref6, { once: true })
  const isInView7 = useInView(ref7, { once: true })
  return (
    <div >

      {/* Section one */}
      <div className='bg-[#262A3B] w-full'>
        {/* Header Section */}
        <div className='relative'>
          <NavBar className='absolute z-50 w-full ' onLoginClick={() => { }} />


        </div>


      </div>
      {/* Landing Section */}



      <div className='relative z-30'>
        <div className='text-center absolute z-40 top-1/3 w-full'>
          <motion.h1 className='text-6xl font-semibold text-[#4CCF7E] '
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >Welcome to

          </motion.h1>
          <motion.h1 className='text-8xl font-extrabold text-white '
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >UniEats

          </motion.h1>

          <button className='bg-[#4CCF7E]  text-2xl rounded-full mt-6  px-15 py-3 hover:bg-white'>Get Started</button>
        </div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
        >
          <img src={Bg01} alt="" />
        </motion.div>
      </div>



      {/* Section tow */}
      <div className='text-center items-center'>
        <motion.div className='mt-15 mb-15'
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-7xl'>Why use UniEats</h1>
          <p className='mt-2 text-2xl font-light'>Our lab-analyzed nutrition data will help you</p>
        </motion.div>

        {/* Importent Point our website section */}
        <motion.div className='flex items-center justify-between px-10 pt-10 bg-[#FD683D] mx-10 rounded-3xl mt-10'
          ref={ref2}
          initial={{ opacity: 0, x: 200 }}
          animate={isInView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className='text-left'>
            <h1 className='text-7xl text-semibold w-3/4'>Custom Meal Plate Creation</h1>
            <p className='text-2xl mt-3 font-extralight w-2/3'>Users can create their own meal by selecting different food items from the canteen menu and instantly see the combined nutritional values of the selected items.</p>
          </div>
          <div>
            <img className='w-[850px] rounded-tl-4xl rounded-tr-4xl ' src={ArtBord01} alt="" />
          </div>
        </motion.div>


        <motion.div className='flex items-center justify-between px-10 p-10 bg-[#2ECAD6] mx-10 rounded-3xl mt-10'
          ref={ref3}
          initial={{ opacity: 0, x: -200 }}
          animate={isInView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className='text-left'>
            <h1 className='text-7xl text-semibold w-3/4'>Nutrition Information Display</h1>
            <p className='text-2xl mt-3 font-extralight w-2/3'>Each food item on the menu shows clear nutritional details like calories, protein, fat, and carbs to help users make healthier choices.</p>
          </div>
          <div>
            <img className='w-[850px] rounded-tl-4xl rounded-4xl ' src={ArtBord02} alt="" />
          </div>
        </motion.div>


        <motion.div className='flex items-center justify-between px-10 pt-10 bg-[#4CCF7E] mx-10 rounded-3xl mt-10'
          ref={ref4}
          initial={{ opacity: 0, x: 200 }}
          animate={isInView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className='text-left'>
            <h1 className='text-7xl text-semibold w-3/4'>Nutrition History Tracking</h1>
            <p className='text-2xl mt-3 font-extralight w-2/3'>The system saves all past orders with nutrition data, allowing users to view and track their eating habits daily, weekly, or monthly.</p>
          </div>
          <div>
            <img className='w-[850px] rounded-tl-4xl rounded-tr-4xl ' src={ArtBord04} alt="" />
          </div>
        </motion.div>

        <motion.div className='flex items-center justify-between px-10 p-10 bg-[#FDAC2A] mx-10 rounded-3xl mt-10'
          ref={ref5}
          initial={{ opacity: 0, x: -200 }}
          animate={isInView5 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className='text-left'>
            <h1 className='text-7xl text-semibold w-3/4'>Personal Nutrition Suggestions</h1>
            <p className='text-2xl mt-3 font-extralight w-2/3'>Based on users’ previous meals and nutrition goals, the app provides personalized food recommendations to help maintain a balanced diet.</p>
          </div>
          <div>
            <img className='w-[850px] rounded-tl-4xl rounded-4xl ' src={ArtBord03} alt="" />
          </div>
        </motion.div>
      </div>

      {/* Section 03 */}
      <motion.div className='grid grid-cols-3  gap-4 px-10 mt-15 mb-15'
      ref={ref6}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView6 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
      >
        {ReviewData.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </motion.div>
      <div className='flex justify-between px-10'>
        <button className='bg-[#4CCF7E] py-4 px-10 rounded-full text-xl'>Add Revie</button>
        <button className='text-xl text-[#4CCF7E]'>See More</button>
      </div>

      {/* Section 04 */}
      <motion.div className='mt-15 mb-15 text-center px-10' 
      ref={ref7}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView7 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}>
        <h1 className='text-7xl'>If you count calories, macros, or micronutrients, you can count on us</h1>
        <button className='bg-[#4CCF7E]  text-2xl rounded-full mt-6  px-15 py-3'>Get Started</button>
      </motion.div>

      <Footer />

    </div>
  );
}

export default Home;
