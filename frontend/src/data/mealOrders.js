import IMG from './../assets/breakfastMeal/ChickenPlate.png'

const mealOrders = [
  {
    mealName: "Grilled Chicken Rice",
    date: "2025-06-24",
    time: "12:30 PM",
    countDown : "10.00",
    price: 450,
    orderStatus: "Pending",
    deliveredTime: "01:00 PM",
    img : IMG,
  },
  {
    mealName: "Veggie Omelette",
    date: "2025-06-24",
    time: "08:00 AM",
    countDown : "10.00",
    price: 250,
    orderStatus: "Pending",
    deliveredTime: null,
    img : IMG,
  },
  {
    mealName: "Beef Burger",
    date: "2025-06-23",
    time: "07:45 PM",
    countDown : "10.00",
    price: 550,
    orderStatus: "Delivered",
    deliveredTime: "08:10 PM",
    img : IMG,
  },

];

export default mealOrders;