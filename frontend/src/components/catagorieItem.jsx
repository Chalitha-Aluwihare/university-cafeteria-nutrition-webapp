import React, { useState, useEffect } from "react";
import Button from "../assets/catagorieItem/expand-button.png"
import MainMeals from "../assets/catagorieItem/balanced-diet.png"
import ShortEats from "../assets/catagorieItem/street-food.png"
import Baverages from "../assets/catagorieItem/cocktail.png"

function CategoryItem({ food, setFood }) {

  const [active, setActive] = useState(1);


  return (
    <div className="ml-3 mt-2 flex gap-2">
      <button onClick={() => {setActive(1); setFood("MainMeals");}} className={`rounded-[21px] w-[113px] h-[170px] ${active === 1 ? 'bg-[#3FC660]' : 'bg-[#F8F6F7]'}`}>
        <img className="p-1" src={MainMeals} />
        <div className={`text-[15px] font-bold ${active === 1 ? 'text-white' : 'text-black'}`}>
          Main Meals
        </div>
        <img src={Button} alt="Expand" className={`inline-block  h-7 rounded-full p-2 ${active === 1 ? 'bg-white' : 'bg-[#3FC660]'}`} />

      </button>
      <button onClick={() => { setActive(2); setFood("ShortEats");  }} className={`rounded-[21px] w-[113px] h-[170px] ${active === 2 ? 'bg-[#3FC660]' : 'bg-[#F8F6F7]'}`}>
        <img className="p-1" src={ShortEats} />
        <div className={`text-[15px] font-bold ${active === 2 ? 'text-white' : 'text-black'}`}>
          ShortEats
        </div>

        <img src={Button} alt="Expand" className={`inline-block  h-7 rounded-full p-2 ${active === 2 ? 'bg-white' : 'bg-[#3FC660]'}`} />

      </button>
      <button onClick={() => { setActive(3); setFood("Beverages");  }} className={`rounded-[21px] w-[113px] h-[170px] ${active === 3 ? 'bg-[#3FC660]' : 'bg-[#F8F6F7]'}`}>
        <img className="p-1" src={Baverages} />
        <div className={`text-[15px] font-bold ${active === 3 ? 'text-white' : 'text-black'}`}>
          Baverages
        </div>

        <img src={Button} alt="Expand" className={`inline-block  h-7 rounded-full p-2 ${active === 3 ? 'bg-white' : 'bg-[#3FC660]'}`} />

      </button>
    </div>
  );
}

export default CategoryItem;
