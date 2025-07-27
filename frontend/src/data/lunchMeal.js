import ChickenCurry from './../assets/dinnerMeal/ChickenCurry.png'
import DhalCurry from './../assets/dinnerMeal/DhalCurry.png'
import CoconutSambol from './../assets/dinnerMeal/CoconutSambol.png'

const lunchMeal = [
  {
    id: 1,
    name: "Chicken Curry",
    image: { uri: ChickenCurry },
    available: true,
    rating: 4.7,
    portion: "100g",
    calories: 180,
    carbs: 5,
    protein: 20,
    fat: 10,
    price: 250,
  },
  {
    id: 2,
    name: "Dhal Curry",
    image: { uri: DhalCurry },
    available: true,
    rating: 4.6,
    portion: "100g",
    calories: 120,
    carbs: 15,
    protein: 8,
    fat: 5,
    price: 100,
  },
  {
    id: 3,
    name: "Coconut Sambol",
    image: { uri: CoconutSambol },
    available: true,
    rating: 4.3,
    portion: "50g",
    calories: 90,
    carbs: 4,
    protein: 2,
    fat: 8,
    price: 80,
  },

]

export default lunchMeal;
