import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import NavBar from '../components/navBar';
import ArtBord01 from '../assets/home/ArtBord-01.png'
import ArtBord02 from '../assets/home/ArtBord-02.png'
import ArtBord03 from '../assets/home/ArtBord-03.png'
import ArtBord04 from '../assets/home/ArtBord-04.png'
import Footer from '../components/footer'
import Review from '../components/review'
import ReviewData from '../data/reviewData'
import Bg01 from '../assets/home/BG-02.png'
import Bg02 from '../assets/home/BG-03.png'


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
          <NavBar className='absolute z-50 w-full ' />
        
        </div>


      </div>
      
      {/* Landing Section */}
      <div className='relative z-30'>
        <div className='text-center absolute z-40 top-1/3 w-full'>
          <motion.h1 className='lg:text-6xl text-2xl font-semibold text-[#4CCF7E] '
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >Welcome to

          </motion.h1>
          <motion.h1 className='lg:text-8xl text-5xl font-extrabold text-white '
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >UniEats

          </motion.h1>

          <div className='pt-10'>
            <Link to="/mealPlan" className='bg-[#4CCF7E] lg:text-2xl rounded-full lg:mt-6 mt-3 lg:px-15 px-6 lg:py-3 py-1 hover:bg-white transition-colors duration-300
'>Get Started</Link>
          </div>
        </div >
        <motion.div
        className=''
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
        >
          <img src={Bg01} alt="" className='w-full hidden sm:block' />
          <img src={Bg02} alt="" className='w-full h-auto block sm:hidden' />
        </motion.div>
      </div>



      {/* Section tow */}
      <div className='text-center items-center'>
        <motion.div className='lg:mt-15 lg:mb-15'
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className='lg:text-7xl text-3xl mt-2'>Why use UniEats</h1>
          <p className='lg:mt-2 lg:text-2xl font-light'>Our lab-analyzed nutrition data will help you</p>
        </motion.div>

        {/* Importent Point our website section */}
        <motion.div className='md:flex items-center justify-between lg:px-10 lg:pt-10 bg-[#FD683D] lg:mx-10 lg:rounded-3xl lg:mt-10 px-5 pt-5 mx-5 mt-5 rounded-2xl'
          ref={ref2}
          initial={{ opacity: 0, x: 200 }}
          animate={isInView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className='lg:text-left text-center'>
            <h1 className='lg:text-7xl text-semibold lg:w-3/4 text-3xl'>Custom Meal Plate Creation</h1>
            <p className='lg:text-2xl lg:mt-3 font-extralight lg:w-2/3 my-2'>Users can create their own meal by selecting different food items from the canteen menu and instantly see the combined nutritional values of the selected items.</p>
          </div>
          <div>
            <img className='lg:w-[850px] lg:rounded-tl-4xl lg:rounded-tr-4xl rounded-tl-2xl rounded-tr-2xl' src={ArtBord01} alt="" />
          </div>
        </motion.div>


        <motion.div className='bg-[#2ECAD6] md:flex items-center justify-between lg:px-10 lg:pt-10  lg:mx-10 lg:rounded-3xl lg:mt-10 px-5 pt-5 mx-5 mt-5 rounded-2xl '
          ref={ref3}
          initial={{ opacity: 0, x: -200 }}
          animate={isInView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className='lg:text-left text-center'>
            <h1 className='lg:text-7xl text-semibold lg:w-3/4 text-3xl'>Nutrition Information Display</h1>
            <p className='lg:text-2xl lg:mt-3 font-extralight lg:w-2/3 mt-2'>Each food item on the menu shows clear nutritional details like calories, protein, fat, and carbs to help users make healthier choices.</p>
          </div>
          <div className='py-3'>
            <img className='lg:w-[850px] lg:rounded-tl-4xl lg:rounded-4xl rounded-2xl ' src={ArtBord02} alt="" />
          </div>
        </motion.div>


        <motion.div className=' bg-[#4CCF7E] md:flex items-center justify-between lg:px-10 lg:pt-10  lg:mx-10 lg:rounded-3xl lg:mt-10 px-5 pt-5 mx-5 mt-5 rounded-2xl '
          ref={ref4}
          initial={{ opacity: 0, x: 200 }}
          animate={isInView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className='lg:text-left text-center'>
            <h1 className='lg:text-7xl text-semibold lg:w-3/4 text-3xl'>Nutrition History Tracking</h1>
            <p className='lg:text-2xl lg:mt-3 font-extralight lg:w-2/3 my-2'>The system saves all past orders with nutrition data, allowing users to view and track their eating habits daily, weekly, or monthly.</p>
          </div>
          <div>
            <img className='lg:w-[850px] lg:rounded-tl-4xl lg:rounded-tr-4xl rounded-tl-2xl rounded-tr-2xl' src={ArtBord04} alt="" />
          </div>
        </motion.div>

        <motion.div className=' bg-[#FDAC2A] md:flex items-center justify-between lg:px-10 lg:pt-10  lg:mx-10 lg:rounded-3xl lg:mt-10 px-5 pt-5 mx-5 mt-5 rounded-2xl'
          ref={ref5}
          initial={{ opacity: 0, x: -200 }}
          animate={isInView5 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className='lg:text-left text-center'>
            <h1 className='lg:text-7xl text-semibold lg:w-3/4 text-3xl'>Personal Nutrition Suggestions</h1>
            <p className='lg:text-2xl lg:mt-3 font-extralight lg:w-2/3 mt-2'>Based on users’ previous meals and nutrition goals, the app provides personalized food recommendations to help maintain a balanced diet.</p>
          </div>
          <div className='py-3'>
            <img className='lg:w-[850px] lg:rounded-tl-4xl lg:rounded-4xl rounded-2xl' src={ArtBord03} alt="" />
          </div>
        </motion.div>
      </div>

      {/* Section 03 */}
      <motion.div className='grid lg:grid-cols-3  lg:gap-4 lg:px-10 lg:mt-15 lg:mb-15 pt-5 mt-10 mb-5 gap-3 px-5'
      ref={ref6}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView6 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
      >
        {ReviewData.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </motion.div>
      <div className='flex justify-between lg:px-10 px-5'>
        <button className='bg-[#4CCF7E] lg:py-4 lg:px-10 lg:rounded-full lg:text-xl py-1 px-5 rounded-full'>Add Review</button>
        <button className='lg:text-xl text-[#4CCF7E]'>See More</button>
      </div>

      {/* Section 04 */}
      <motion.div className='lg:mt-15 lg:mb-15 text-center lg:px-10 mt-5 mb-10' 
      ref={ref7}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView7 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}>
        <h1 className='lg:text-7xl text-3xl p-5'>If you count calories, macros, or micronutrients, you can count on us</h1>
        <button className='bg-[#4CCF7E]  lg:text-2xl  rounded-full lg:mt-6 mt-3  lg:px-15 px-6 lg:py-3 py-1  hover:bg-white'>Get Started</button>
      </motion.div>

      <Footer />

    </div>
  );
}

export default Home;
