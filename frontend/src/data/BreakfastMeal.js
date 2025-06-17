import ChickenPlate from './../assets/breakfastMeal/ChickenPlate.png'
import FishPlate from './../assets/breakfastMeal/FishPlate.png'
import EggPlate from './../assets/breakfastMeal/EggPlate.png'

const breakfastMeal = [
  {
    id: 1,
    name: "Grilled Chicken",
    image: { uri: ChickenPlate },
    available: true,
    rating: 4.5,
    portion: "200g",
    calories: 350,
    carbs: 15,
    protein: 40,
    fat: 10,
    price: 500,
  },
  {
    id: 2,
    name: "Grilled Fish",
    image: { uri: FishPlate },
    available: true,
    rating: 4.8,
    portion: "200g",
    calories: 350,
    carbs: 15,
    protein: 40,
    fat: 10,
    price: 500,
  },
  {
    id: 3,
    name: "Grilled Egg",
    image: { uri: EggPlate },
    available: true,
    rating: 4.2,
    portion: "200g",
    calories: 350,
    carbs: 15,
    protein: 40,
    fat: 10,
    price: 500,
  }
]

export default breakfastMeal;
