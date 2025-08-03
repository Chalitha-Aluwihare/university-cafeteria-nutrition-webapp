import EggRoll from './../assets/shortEats/EggRoll.png';
import VegSamosa from './../assets/shortEats/VegSamosa.png';
import ChickenPatties from'./../assets/shortEats/ChickenPatties.png'
import FishBun from'./../assets/shortEats/FishBun.png'


const shortEats = [
  {
    id: 1,
    img: EggRoll,
    name: "Egg Roll",
    available: true,
    rating: 4.4,
    size: 100,
    totalCalories: 220,
    totalCarbs: 25,
    totalProtein: 6,
    totalFat: 10,
    price: 80
  },
  {
    id: 2,
    img: VegSamosa,
    name: "Veg Samosa",
    available: true,
    rating: 4.2,
    size: 80,
    totalCalories: 180,
    totalCarbs: 20,
    totalProtein: 4,
    totalFat: 9,
    price: 50
  },
  {
    id: 3,
    img: ChickenPatties,
    name: "Chicken Patties",
    available: true,
    rating: 4.5,
    size: 90,
    totalCalories: 250,
    totalCarbs: 22,
    totalProtein: 10,
    totalFat: 12,
    price: 90
  },
  {
    id: 4,
    img: FishBun,
    name: "Fish Bun",
    available: true,
    rating: 4.3,
    size: 110,
    totalCalories: 270,
    totalCarbs: 28,
    totalProtein: 7,
    totalFat: 11,
    price: 70
  },
];

export default shortEats;