import BreakfastMeal from './../assets/mainMeals/BreakfastMeal.png';

const mainMeals = [
  {
    id: 1,
    img: BreakfastMeal,
    name: "Breakfast Meal",
    available: true,
    rating: 4.6,
    portions: {
      small: {
        size: 150,
        totalCalories: 280,
        totalCarbs: 50,
        totalProtein: 5,
        totalFat: 6,
        price: 80,
        items: [
          {
            name: "String Hoppers (5 pcs)",
            portion: 200,
            calories: 160,
            carbs: 35,
            protein: 3,
            fat: 1
          },
          {
            name: "Kiri Hodi",
            portion: 100,
            calories: 80,
            carbs: 8,
            protein: 1,
            fat: 4
          },
          {
            name: "Pol Sambol",
            portion: 50,
            calories: 40,
            carbs: 7,
            protein: 1,
            fat: 1
          },
          {
            name: "Pol Sambol",
            portion: 50,
            calories: 40,
            carbs: 7,
            protein: 1,
            fat: 1
          },{
            name: "Pol Sambol",
            portion: 50,
            calories: 40,
            carbs: 7,
            protein: 1,
            fat: 1
          },{
            name: "Pol Sambol",
            portion: 50,
            calories: 40,
            carbs: 7,
            protein: 1,
            fat: 1
          }
        ]
      },
      large: {
        size: 250,
        totalCalories: 450,
        totalCarbs: 80,
        totalProtein: 8,
        totalFat: 10,
        price: 250,
        items: [
          {
            name: "String Hoppers (8 pcs)",
            portion: 320,    // increased portion to match pcs count
            calories: 250,
            carbs: 50,
            protein: 4,
            fat: 2
          },
          {
            name: "Kiri Hodi",
            portion: 200,
            calories: 120,
            carbs: 10,
            protein: 1.5,
            fat: 5
          },
          {
            name: "Pol Sambol",
            portion: 200,
            calories: 50,
            carbs: 10,
            protein: 1,
            fat: 1.5
          },
          {
            name: "Dhal Curry",
            portion: 200,
            calories: 30,
            carbs: 10,
            protein: 1.5,
            fat: 1.5
          }
        ]
      }
    }
  },
  {
    id: 2,
    img: BreakfastMeal,
    name: "Lunch Meal",
    available: true,
    rating: 4.8,
    portions: {
      small: {
        size: 200,
        totalCalories: 600,
        totalCarbs: 85,
        totalProtein: 22,
        totalFat: 18,
        price: 300,
        items: [
          {
            name: "White Rice",
            portion: 180,
            calories: 200,
            carbs: 45,
            protein: 4,
            fat: 1
          },
          {
            name: "Chicken Curry",
            portion: 150,
            calories: 220,
            carbs: 5,
            protein: 15,
            fat: 12
          },
          {
            name: "Dhal Curry",
            portion: 100,
            calories: 100,
            carbs: 20,
            protein: 2,
            fat: 3
          },
          {
            name: "Mallum",
            portion: 80,
            calories: 80,
            carbs: 15,
            protein: 1,
            fat: 2
          }
        ]
      },
      large: {
        size: 300,
        totalCalories: 850,
        totalCarbs: 120,
        totalProtein: 30,
        totalFat: 25,
        price: 450,
        items: [
          {
            name: "White Rice (extra)",
            portion: 280,
            calories: 300,
            carbs: 65,
            protein: 5,
            fat: 2
          },
          {
            name: "Chicken Curry",
            portion: 180,
            calories: 300,
            carbs: 7,
            protein: 20,
            fat: 15
          },
          {
            name: "Dhal Curry",
            portion: 120,
            calories: 120,
            carbs: 25,
            protein: 3,
            fat: 4
          },
          {
            name: "Mallum",
            portion: 90,
            calories: 90,
            carbs: 15,
            protein: 1,
            fat: 2
          },
          {
            name: "Papadam",
            portion: 40,
            calories: 40,
            carbs: 5,
            protein: 1,
            fat: 2
          },
          {
            name: "Cucumber Salad",
            portion: 50,
            calories: 20,
            carbs: 3,
            protein: 0.5,
            fat: 0.5
          }
        ]
      }
    }
  },
  {
    id: 3,
    img: BreakfastMeal,
    name: "Dinner Meal",
    available: true,
    rating: 4.7,
    portions: {
      small: {
        size: 180,
        totalCalories: 500,
        totalCarbs: 60,
        totalProtein: 20,
        totalFat: 15,
        price: 280,
        items: [
          {
            name: "Pittu",
            portion: 180,
            calories: 200,
            carbs: 30,
            protein: 4,
            fat: 3
          },
          {
            name: "Coconut Sambol",
            portion: 100,
            calories: 100,
            carbs: 10,
            protein: 2,
            fat: 6
          },
          {
            name: "Fish Curry",
            portion: 150,
            calories: 200,
            carbs: 5,
            protein: 14,
            fat: 6
          }
        ]
      },
      large: {
        size: 280,
        totalCalories: 700,
        totalCarbs: 90,
        totalProtein: 28,
        totalFat: 22,
        price: 400,
        items: [
          {
            name: "Pittu (extra)",
            portion: 280,
            calories: 300,
            carbs: 45,
            protein: 5,
            fat: 4
          },
          {
            name: "Coconut Sambol",
            portion: 150,
            calories: 150,
            carbs: 15,
            protein: 2,
            fat: 8
          },
          {
            name: "Fish Curry",
            portion: 200,
            calories: 250,
            carbs: 7,
            protein: 18,
            fat: 7
          },
          {
            name: "Dhal Curry",
            portion: 130,
            calories: 80,
            carbs: 20,
            protein: 3,
            fat: 3
          }
        ]
      }
    }
  },
  {
    id: 4,
    img: BreakfastMeal,
    name: "Dinner Meal",
    available: true,
    rating: 4.7,
    portions: {
      small: {
        size: 180,
        totalCalories: 500,
        totalCarbs: 60,
        totalProtein: 20,
        totalFat: 15,
        price: 280,
        items: [
          {
            name: "Pittu",
            portion: 180,
            calories: 200,
            carbs: 30,
            protein: 4,
            fat: 3
          },
          {
            name: "Coconut Sambol",
            portion: 100,
            calories: 100,
            carbs: 10,
            protein: 2,
            fat: 6
          },
          {
            name: "Fish Curry",
            portion: 150,
            calories: 200,
            carbs: 5,
            protein: 14,
            fat: 6
          }
        ]
      },
      large: {
        size: 280,
        totalCalories: 700,
        totalCarbs: 90,
        totalProtein: 28,
        totalFat: 22,
        price: 400,
        items: [
          {
            name: "Pittu (extra)",
            portion: 280,
            calories: 300,
            carbs: 45,
            protein: 5,
            fat: 4
          },
          {
            name: "Coconut Sambol",
            portion: 150,
            calories: 150,
            carbs: 15,
            protein: 2,
            fat: 8
          },
          {
            name: "Fish Curry",
            portion: 200,
            calories: 250,
            carbs: 7,
            protein: 18,
            fat: 7
          },
          {
            name: "Dhal Curry",
            portion: 130,
            calories: 80,
            carbs: 20,
            protein: 3,
            fat: 3
          }
        ]
      }
    }
  },
  {
    id: 5,
    img: BreakfastMeal,
    name: "Dinner Meal",
    available: true,
    rating: 4.7,
    portions: {
      small: {
        size: 180,
        totalCalories: 500,
        totalCarbs: 60,
        totalProtein: 20,
        totalFat: 15,
        price: 280,
        items: [
          {
            name: "Pittu",
            portion: 180,
            calories: 200,
            carbs: 30,
            protein: 4,
            fat: 3
          },
          {
            name: "Coconut Sambol",
            portion: 100,
            calories: 100,
            carbs: 10,
            protein: 2,
            fat: 6
          },
          {
            name: "Fish Curry",
            portion: 150,
            calories: 200,
            carbs: 5,
            protein: 14,
            fat: 6
          }
        ]
      },
      large: {
        size: 280,
        totalCalories: 700,
        totalCarbs: 90,
        totalProtein: 28,
        totalFat: 22,
        price: 400,
        items: [
          {
            name: "Pittu (extra)",
            portion: 280,
            calories: 300,
            carbs: 45,
            protein: 5,
            fat: 4
          },
          {
            name: "Coconut Sambol",
            portion: 150,
            calories: 150,
            carbs: 15,
            protein: 2,
            fat: 8
          },
          {
            name: "Fish Curry",
            portion: 200,
            calories: 250,
            carbs: 7,
            protein: 18,
            fat: 7
          },
          {
            name: "Dhal Curry",
            portion: 130,
            calories: 80,
            carbs: 20,
            protein: 3,
            fat: 3
          }
        ]
      }
    }
  },
  {
    id: 6,
    img: BreakfastMeal,
    name: "Dinner Meal",
    available: true,
    rating: 4.7,
    portions: {
      small: {
        size: 180,
        totalCalories: 500,
        totalCarbs: 60,
        totalProtein: 20,
        totalFat: 15,
        price: 280,
        items: [
          {
            name: "Pittu",
            portion: 180,
            calories: 200,
            carbs: 30,
            protein: 4,
            fat: 3
          },
          {
            name: "Coconut Sambol",
            portion: 100,
            calories: 100,
            carbs: 10,
            protein: 2,
            fat: 6
          },
          {
            name: "Fish Curry",
            portion: 150,
            calories: 200,
            carbs: 5,
            protein: 14,
            fat: 6
          }
        ]
      },
      large: {
        size: 280,
        totalCalories: 700,
        totalCarbs: 90,
        totalProtein: 28,
        totalFat: 22,
        price: 400,
        items: [
          {
            name: "Pittu (extra)",
            portion: 280,
            calories: 300,
            carbs: 45,
            protein: 5,
            fat: 4
          },
          {
            name: "Coconut Sambol",
            portion: 150,
            calories: 150,
            carbs: 15,
            protein: 2,
            fat: 8
          },
          {
            name: "Fish Curry",
            portion: 200,
            calories: 250,
            carbs: 7,
            protein: 18,
            fat: 7
          },
          {
            name: "Dhal Curry",
            portion: 130,
            calories: 80,
            carbs: 20,
            protein: 3,
            fat: 3
          }
        ]
      }
    }
  }
  
];

export default mainMeals;
