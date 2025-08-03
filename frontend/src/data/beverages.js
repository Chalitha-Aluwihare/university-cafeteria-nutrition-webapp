import IcedTea from "../assets/beverages/IcedTea.png";
import WatermelonJuice from "../assets/beverages/WatermelonJuice.png";
import FreshLimeJuice from "../assets/beverages/FreshLimeJuice.png";
import BananaMango from "../assets/beverages/Banana-Mango.png";
import ChocolateDrink from "../assets/beverages/ChocolateDrink.png";

const beverages = [
  {
    id: 1,
    img: IcedTea,
    name: "Iced Tea",
    available: true,
    rating: 4.3,
    size: 250, // in ml
    totalCalories: 90,
    totalCarbs: 22,
    totalProtein: 0,
    totalFat: 0,
    price: 60
  },
  {
    id: 2,
    img: BananaMango,
    name: "Banana Milkshake",
    available: true,
    rating: 4.6,
    size: 300,
    totalCalories: 180,
    totalCarbs: 35,
    totalProtein: 4,
    totalFat: 3,
    price: 100
  },
  {
    id: 3,
    img: FreshLimeJuice ,
    name: "Fresh Lime Juice",
    available: true,
    rating: 4.2,
    size: 200,
    totalCalories: 60,
    totalCarbs: 15,
    totalProtein: 0,
    totalFat: 0,
    price: 40
  },
  {
    id: 4,
    img: ChocolateDrink,
    name: "Chocolate Drink",
    available: true,
    rating: 4.7,
    size: 250,
    totalCalories: 210,
    totalCarbs: 30,
    totalProtein: 5,
    totalFat: 6,
    price: 120
  },

];

export default beverages;