import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from 'framer-motion';
import Button from "../assets/catagorieItem/expand-button.png"
import MainMeals from "../assets/catagorieItem/balanced-diet.png"
import ShortEats from "../assets/catagorieItem/street-food.png"
import Baverages from "../assets/catagorieItem/cocktail.png"

function CategoryItem({ setFood }) {

  const [active, setActive] = useState(1);
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });


  return (
    <motion.div className="ml-3 mt-2 flex gap-2"
      ref={ref1}
      initial={{ opacity: 0 }}
      animate={isInView1 ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <button onClick={() => { setActive(1); setFood("MainMeals"); }} className={`rounded-[21px] w-[113px] h-[170px] ${active === 1 ? 'bg-[#3FC660]' : 'bg-[#F8F6F7]'} hover:scale-105 transition duration-300 cusor-ponter`}>
        <img className="p-1" src={MainMeals} />
        <div className={`text-[15px] font-bold ${active === 1 ? 'text-white' : 'text-black'}`}>
          Main Meals
        </div>
        <img src={Button} alt="Expand" className={`inline-block  h-7 rounded-full p-2 ${active === 1 ? 'bg-white' : 'bg-[#3FC660]'}`} />

      </button>
      <button onClick={() => { setActive(2); setFood("ShortEats"); }} className={`rounded-[21px] w-[113px] h-[170px] ${active === 2 ? 'bg-[#3FC660]' : 'bg-[#F8F6F7]'} hover:scale-105 transition duration-300 cusor-ponter`}>
        <img className="p-1" src={ShortEats} />
        <div className={`text-[15px] font-bold ${active === 2 ? 'text-white' : 'text-black'}`}>
          ShortEats
        </div>

        <img src={Button} alt="Expand" className={`inline-block  h-7 rounded-full p-2 ${active === 2 ? 'bg-white' : 'bg-[#3FC660]'}`} />

      </button>
      <button onClick={() => { setActive(3); setFood("Beverages"); }} className={`rounded-[21px] w-[113px] h-[170px] ${active === 3 ? 'bg-[#3FC660]' : 'bg-[#F8F6F7]'} hover:scale-105 transition duration-300 cursor-pointer`}>
        <img className="p-1" src={Baverages} />
        <div className={`text-[15px] font-bold ${active === 3 ? 'text-white' : 'text-black'}`}>
          Baverages
        </div>

        <img src={Button} alt="Expand" className={`inline-block  h-7 rounded-full p-2 ${active === 3 ? 'bg-white' : 'bg-[#3FC660]'}`} />

      </button>
    </motion.div>
  );
}

export default CategoryItem;
