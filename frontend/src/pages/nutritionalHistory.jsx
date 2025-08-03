import React, { useState, useMemo } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Footer from '../components/footer';


const NavBar = () => (
    <nav className="fixed w-full top-0 left-0 bg-white shadow-md z-10 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-[#3FC660]">Nutrition Tracker</div>
        </div>
    </nav>
);


const nutritionHistory = [
  { userId: "U001", date: "2025-01-01", year: 2025, month: "January", day: "Wednesday", dayNo: 1, index: "01", meals: { breakfast: { calories: 320, carbs: 45, protein: 15, fat: 10 }, lunch: { calories: 550, carbs: 70, protein: 25, fat: 20 }, dinner: { calories: 480, carbs: 65, protein: 20, fat: 15 }}},
  { userId: "U001", date: "2025-01-02", year: 2025, month: "January", day: "Thursday", dayNo: 2, index: "02", meals: { breakfast: { calories: 300, carbs: 40, protein: 12, fat: 8 }, lunch: { calories: 600, carbs: 80, protein: 30, fat: 25 }, dinner: { calories: 500, carbs: 60, protein: 22, fat: 18 }}},
  { userId: "U001", date: "2025-01-03", year: 2025, month: "January", day: "Friday", dayNo: 3, index: "03", meals: { breakfast: { calories: 350, carbs: 48, protein: 18, fat: 9 }, lunch: { calories: 580, carbs: 75, protein: 28, fat: 22 }, dinner: { calories: 520, carbs: 68, protein: 24, fat: 17 }}},
  { userId: "U001", date: "2025-01-04", year: 2025, month: "January", day: "Saturday", dayNo: 4, index: "04", meals: { breakfast: { calories: 310, carbs: 42, protein: 14, fat: 10 }, lunch: { calories: 590, carbs: 78, protein: 27, fat: 21 }, dinner: { calories: 510, carbs: 66, protein: 23, fat: 16 }}},
  { userId: "U001", date: "2025-01-05", year: 2025, month: "January", day: "Sunday", dayNo: 5, index: "05", meals: { breakfast: { calories: 330, carbs: 44, protein: 16, fat: 9 }, lunch: { calories: 620, carbs: 85, protein: 31, fat: 24 }, dinner: { calories: 495, carbs: 63, protein: 21, fat: 14 }}},
  { userId: "U001", date: "2025-01-06", year: 2025, month: "January", day: "Monday", dayNo: 6, index: "06", meals: { breakfast: { calories: 340, carbs: 46, protein: 17, fat: 11 }, lunch: { calories: 610, carbs: 82, protein: 29, fat: 23 }, dinner: { calories: 505, carbs: 67, protein: 22, fat: 15 }}},
  { userId: "U001", date: "2025-01-07", year: 2025, month: "January", day: "Tuesday", dayNo: 7, index: "07", meals: { breakfast: { calories: 315, carbs: 41, protein: 13, fat: 9 }, lunch: { calories: 580, carbs: 76, protein: 26, fat: 20 }, dinner: { calories: 490, carbs: 64, protein: 20, fat: 14 }}},
  { userId: "U001", date: "2025-01-08", year: 2025, month: "January", day: "Wednesday", dayNo: 8, index: "08", meals: { breakfast: { calories: 325, carbs: 43, protein: 15, fat: 10 }, lunch: { calories: 590, carbs: 78, protein: 28, fat: 22 }, dinner: { calories: 510, carbs: 65, protein: 23, fat: 16 }}},
  { userId: "U001", date: "2025-01-09", year: 2025, month: "January", day: "Thursday", dayNo: 9, index: "09", meals: { breakfast: { calories: 335, carbs: 47, protein: 16, fat: 10 }, lunch: { calories: 570, carbs: 74, protein: 27, fat: 21 }, dinner: { calories: 525, carbs: 69, protein: 24, fat: 17 }}},
  { userId: "U001", date: "2025-01-10", year: 2025, month: "January", day: "Friday", dayNo: 10, index: "10", meals: { breakfast: { calories: 345, carbs: 49, protein: 18, fat: 11 }, lunch: { calories: 605, carbs: 81, protein: 29, fat: 23 }, dinner: { calories: 515, carbs: 67, protein: 23, fat: 16 }}},
  { userId: "U001", date: "2025-01-11", year: 2025, month: "January", day: "Saturday", dayNo: 11, index: "11", meals: { breakfast: { calories: 305, carbs: 42, protein: 14, fat: 9 }, lunch: { calories: 585, carbs: 77, protein: 27, fat: 21 }, dinner: { calories: 495, carbs: 64, protein: 21, fat: 15 }}},
  { userId: "U001", date: "2025-01-12", year: 2025, month: "January", day: "Sunday", dayNo: 12, index: "12", meals: { breakfast: { calories: 355, carbs: 50, protein: 19, fat: 12 }, lunch: { calories: 615, carbs: 83, protein: 30, fat: 24 }, dinner: { calories: 530, carbs: 70, protein: 25, fat: 18 }}},
  { userId: "U001", date: "2025-01-13", year: 2025, month: "January", day: "Monday", dayNo: 13, index: "13", meals: { breakfast: { calories: 365, carbs: 52, protein: 20, fat: 13 }, lunch: { calories: 595, carbs: 79, protein: 28, fat: 22 }, dinner: { calories: 540, carbs: 72, protein: 26, fat: 19 }}},
  { userId: "U001", date: "2025-01-14", year: 2025, month: "January", day: "Tuesday", dayNo: 14, index: "14", meals: { breakfast: { calories: 375, carbs: 54, protein: 21, fat: 14 }, lunch: { calories: 625, carbs: 85, protein: 32, fat: 25 }, dinner: { calories: 550, carbs: 74, protein: 27, fat: 20 }}},
  { userId: "U001", date: "2025-01-15", year: 2025, month: "January", day: 15, index: "15", meals: { breakfast: { calories: 385, carbs: 56, protein: 22, fat: 15 }, lunch: { calories: 635, carbs: 87, protein: 33, fat: 26 }, dinner: { calories: 560, carbs: 76, protein: 28, fat: 21 }}},
  { userId: "U001", date: "2025-01-16", year: 2025, month: "January", day: "Thursday", dayNo: 16, index: "16", meals: { breakfast: { calories: 395, carbs: 58, protein: 23, fat: 16 }, lunch: { calories: 645, carbs: 89, protein: 34, fat: 27 }, dinner: { calories: 570, carbs: 78, protein: 29, fat: 22 }}},
  { userId: "U001", date: "2025-01-17", year: 2025, month: "January", day: "Friday", dayNo: 17, index: "17", meals: { breakfast: { calories: 405, carbs: 60, protein: 24, fat: 17 }, lunch: { calories: 655, carbs: 91, protein: 35, fat: 28 }, dinner: { calories: 580, carbs: 80, protein: 30, fat: 23 }}},
  { userId: "U001", date: "2025-01-18", year: 2025, month: "January", day: "Saturday", dayNo: 18, index: "18", meals: { breakfast: { calories: 415, carbs: 62, protein: 25, fat: 18 }, lunch: { calories: 665, carbs: 93, protein: 36, fat: 29 }, dinner: { calories: 590, carbs: 82, protein: 31, fat: 24 }}},
  { userId: "U001", date: "2025-01-19", year: 2025, month: "January", day: "Sunday", dayNo: 19, index: "19", meals: { breakfast: { calories: 425, carbs: 64, protein: 26, fat: 19 }, lunch: { calories: 675, carbs: 95, protein: 37, fat: 30 }, dinner: { calories: 600, carbs: 84, protein: 32, fat: 25 }}},
  { userId: "U001", date: "2025-01-20", year: 2025, month: "January", day: "Monday", dayNo: 20, index: "20", meals: { breakfast: { calories: 435, carbs: 66, protein: 27, fat: 20 }, lunch: { calories: 685, carbs: 97, protein: 38, fat: 31 }, dinner: { calories: 610, carbs: 86, protein: 33, fat: 26 }}},
  { userId: "U001", date: "2025-01-21", year: 2025, month: "January", day: "Tuesday", dayNo: 21, index: "21", meals: { breakfast: { calories: 445, carbs: 68, protein: 28, fat: 21 }, lunch: { calories: 695, carbs: 99, protein: 39, fat: 32 }, dinner: { calories: 620, carbs: 88, protein: 34, fat: 27 }}},
  { userId: "U001", date: "2025-01-22", year: 2025, month: "January", day: "Wednesday", dayNo: 22, index: "22", meals: { breakfast: { calories: 455, carbs: 70, protein: 29, fat: 22 }, lunch: { calories: 705, carbs: 101, protein: 40, fat: 33 }, dinner: { calories: 630, carbs: 90, protein: 35, fat: 28 }}},
  { userId: "U001", date: "2025-01-23", year: 2025, month: "January", day: "Thursday", dayNo: 23, index: "23", meals: { breakfast: { calories: 465, carbs: 72, protein: 30, fat: 23 }, lunch: { calories: 715, carbs: 103, protein: 41, fat: 34 }, dinner: { calories: 640, carbs: 92, protein: 36, fat: 29 }}},
  { userId: "U001", date: "2025-01-24", year: 2025, month: "January", day: "Friday", dayNo: 24, index: "24", meals: { breakfast: { calories: 475, carbs: 74, protein: 31, fat: 24 }, lunch: { calories: 725, carbs: 105, protein: 42, fat: 35 }, dinner: { calories: 650, carbs: 94, protein: 37, fat: 30 }}},
  { userId: "U001", date: "2025-01-25", year: 2025, month: "January", day: "Saturday", dayNo: 25, index: "25", meals: { breakfast: { calories: 485, carbs: 76, protein: 32, fat: 25 }, lunch: { calories: 735, carbs: 107, protein: 43, fat: 36 }, dinner: { calories: 660, carbs: 96, protein: 38, fat: 31 }}},
  { userId: "U001", date: "2025-01-26", year: 2025, month: "January", day: "Sunday", dayNo: 26, index: "26", meals: { breakfast: { calories: 495, carbs: 78, protein: 33, fat: 26 }, lunch: { calories: 745, carbs: 109, protein: 44, fat: 37 }, dinner: { calories: 670, carbs: 98, protein: 39, fat: 32 }}},
  { userId: "U001", date: "2025-01-27", year: 2025, month: "January", day: "Monday", dayNo: 27, index: "27", meals: { breakfast: { calories: 505, carbs: 80, protein: 34, fat: 27 }, lunch: { calories: 755, carbs: 111, protein: 45, fat: 38 }, dinner: { calories: 680, carbs: 100, protein: 40, fat: 33 }}},
  { userId: "U001", date: "2025-01-28", year: 2025, month: "January", day: "Tuesday", dayNo: 28, index: "28", meals: { breakfast: { calories: 515, carbs: 82, protein: 35, fat: 28 }, lunch: { calories: 765, carbs: 113, protein: 46, fat: 39 }, dinner: { calories: 690, carbs: 102, protein: 41, fat: 34 }}},
  { userId: "U001", date: "2025-01-29", year: 2025, month: "January", day: "Wednesday", dayNo: 29, index: "29", meals: { breakfast: { calories: 525, carbs: 84, protein: 36, fat: 29 }, lunch: { calories: 775, carbs: 115, protein: 47, fat: 40 }, dinner: { calories: 700, carbs: 104, protein: 42, fat: 35 }}},
  { userId: "U001", date: "2025-01-30", year: 2025, month: "January", day: "Thursday", dayNo: 30, index: "30", meals: { breakfast: { calories: 535, carbs: 86, protein: 37, fat: 30 }, lunch: { calories: 785, carbs: 117, protein: 48, fat: 41 }, dinner: { calories: 710, carbs: 106, protein: 43, fat: 36 }}},
  { userId: "U001", date: "2025-01-31", year: 2025, month: "January", day: "Friday", dayNo: 31, index: "31", meals: { breakfast: { calories: 545, carbs: 88, protein: 38, fat: 31 }, lunch: { calories: 795, carbs: 119, protein: 49, fat: 42 }, dinner: { calories: 720, carbs: 108, protein: 44, fat: 37 }}},
  { userId: "U001", date: "2025-02-01", year: 2025, month: "February", day: "Saturday", dayNo: 1, index: "32", meals: { breakfast: { calories: 520, carbs: 82, protein: 36, fat: 29 }, lunch: { calories: 770, carbs: 115, protein: 47, fat: 40 }, dinner: { calories: 700, carbs: 104, protein: 42, fat: 35 }}},
  { userId: "U001", date: "2025-02-02", year: 2025, month: "February", day: "Sunday", dayNo: 2, index: "33", meals: { breakfast: { calories: 530, carbs: 85, protein: 37, fat: 30 }, lunch: { calories: 780, carbs: 116, protein: 48, fat: 41 }, dinner: { calories: 705, carbs: 105, protein: 43, fat: 36 }}},
  { userId: "U001", date: "2025-02-03", year: 2025, month: "February", day: "Monday", dayNo: 3, index: "34", meals: { breakfast: { calories: 540, carbs: 87, protein: 38, fat: 31 }, lunch: { calories: 790, carbs: 118, protein: 49, fat: 42 }, dinner: { calories: 715, carbs: 107, protein: 44, fat: 37 }}},
  { userId: "U001", date: "2025-02-04", year: 2025, month: "February", day: "Tuesday", dayNo: 4, index: "35", meals: { breakfast: { calories: 525, carbs: 83, protein: 36, fat: 30 }, lunch: { calories: 775, carbs: 115, protein: 48, fat: 41 }, dinner: { calories: 710, carbs: 106, protein: 43, fat: 36 }}},
  { userId: "U001", date: "2025-02-05", year: 2025, month: "February", day: "Wednesday", dayNo: 5, index: "36", meals: { breakfast: { calories: 535, carbs: 86, protein: 37, fat: 31 }, lunch: { calories: 785, carbs: 117, protein: 49, fat: 42 }, dinner: { calories: 720, carbs: 108, protein: 44, fat: 37 }}},
  { userId: "U001", date: "2025-02-06", year: 2025, month: "February", day: "Thursday", dayNo: 6, index: "37", meals: { breakfast: { calories: 545, carbs: 88, protein: 38, fat: 32 }, lunch: { calories: 795, carbs: 119, protein: 50, fat: 43 }, dinner: { calories: 725, carbs: 109, protein: 45, fat: 38 }}},
  { userId: "U001", date: "2025-02-07", year: 2025, month: "February", day: "Friday", dayNo: 7, index: "38", meals: { breakfast: { calories: 550, carbs: 89, protein: 39, fat: 33 }, lunch: { calories: 800, carbs: 120, protein: 51, fat: 44 }, dinner: { calories: 730, carbs: 110, protein: 46, fat: 39 }}},
  { userId: "U001", date: "2025-02-08", year: 2025, month: "February", day: "Saturday", dayNo: 8, index: "39", meals: { breakfast: { calories: 535, carbs: 86, protein: 37, fat: 32 }, lunch: { calories: 790, carbs: 118, protein: 50, fat: 43 }, dinner: { calories: 720, carbs: 108, protein: 45, fat: 38 }}},
  { userId: "U001", date: "2025-02-09", year: 2025, month: "February", day: "Sunday", dayNo: 9, index: "40", meals: { breakfast: { calories: 525, carbs: 85, protein: 36, fat: 31 }, lunch: { calories: 780, carbs: 116, protein: 49, fat: 42 }, dinner: { calories: 710, carbs: 106, protein: 44, fat: 37 }}},
  { userId: "U001", date: "2025-02-10", year: 2025, month: "February", day: "Monday", dayNo: 10, index: "41", meals: { breakfast: { calories: 515, carbs: 83, protein: 35, fat: 30 }, lunch: { calories: 770, carbs: 115, protein: 48, fat: 41 }, dinner: { calories: 700, carbs: 105, protein: 43, fat: 36 }}},
  { userId: "U001", date: "2025-02-28", year: 2025, month: "February", day: "Friday", dayNo: 28, index: "59", meals: { breakfast: { calories: 530, carbs: 85, protein: 37, fat: 31 }, lunch: { calories: 780, carbs: 117, protein: 49, fat: 42 }, dinner: { calories: 710, carbs: 106, protein: 44, fat: 37 }}},
  { userId: "U001", date: "2025-03-01", year: 2025, month: "March", day: "Saturday", dayNo: 1, index: "60", meals: { breakfast: { calories: 550, carbs: 90, protein: 39, fat: 32 }, lunch: { calories: 810, carbs: 122, protein: 50, fat: 43 }, dinner: { calories: 735, carbs: 111, protein: 45, fat: 38 }}},
  { userId: "U001", date: "2025-03-02", year: 2025, month: "March", day: "Sunday", dayNo: 2, index: "61", meals: { breakfast: { calories: 560, carbs: 92, protein: 40, fat: 33 }, lunch: { calories: 820, carbs: 124, protein: 51, fat: 44 }, dinner: { calories: 745, carbs: 113, protein: 46, fat: 39 }}},
  { userId: "U001", date: "2025-03-03", year: 2025, month: "March", day: "Monday", dayNo: 3, index: "62", meals: { breakfast: { calories: 570, carbs: 94, protein: 41, fat: 34 }, lunch: { calories: 830, carbs: 126, protein: 52, fat: 45 }, dinner: { calories: 755, carbs: 115, protein: 47, fat: 40 }}},
  { userId: "U001", date: "2025-03-31", year: 2025, month: "March", day: "Monday", dayNo: 31, index: "90", meals: { breakfast: { calories: 650, carbs: 110, protein: 50, fat: 40 }, lunch: { calories: 950, carbs: 150, protein: 65, fat: 55 }, dinner: { calories: 850, carbs: 135, protein: 58, fat: 50 }}},
  { userId: "U001", date: "2025-04-01", year: 2025, month: "April", day: "Tuesday", dayNo: 1, index: "91", meals: { breakfast: { calories: 660, carbs: 112, protein: 51, fat: 41 }, lunch: { calories: 960, carbs: 152, protein: 66, fat: 56 }, dinner: { calories: 860, carbs: 137, protein: 59, fat: 51 }}},
  { userId: "U001", date: "2025-04-02", year: 2025, month: "April", day: "Wednesday", dayNo: 2, index: "92", meals: { breakfast: { calories: 670, carbs: 114, protein: 52, fat: 42 }, lunch: { calories: 970, carbs: 154, protein: 67, fat: 57 }, dinner: { calories: 870, carbs: 139, protein: 60, fat: 52 }}},
  { userId: "U001", date: "2025-04-03", year: 2025, month: "April", day: "Thursday", dayNo: 3, index: "93", meals: { breakfast: { calories: 680, carbs: 116, protein: 53, fat: 43 }, lunch: { calories: 980, carbs: 156, protein: 68, fat: 58 }, dinner: { calories: 880, carbs: 141, protein: 61, fat: 53 }}},
  { userId: "U001", date: "2025-04-30", year: 2025, month: "April", day: "Wednesday", dayNo: 30, index: "120", meals: { breakfast: { calories: 750, carbs: 130, protein: 60, fat: 50 }, lunch: { calories: 1050, carbs: 170, protein: 75, fat: 65 }, dinner: { calories: 950, carbs: 155, protein: 68, fat: 60 }}}
];

function NutritionalHistory() {
    const [active, setActive] = useState(1);
    const [index, setIndex] = useState(nutritionHistory.length - 1); 
    const COLORS = ['#3FC660', '#FFBB28', '#FF8042', '#8884d8'];

    // Function to handle moving to the next time period
    const nextDate = () => {
        if (active === 1) { // Daily
            setIndex(prev => Math.min(prev + 1, nutritionHistory.length - 1));
        } else if (active === 2) { // Weekly
            setIndex(prev => Math.min(prev + 7, nutritionHistory.length - 1));
        } else { // Monthly
            setIndex(prev => Math.min(prev + 30, nutritionHistory.length - 1));
        }
    };

    // Function to handle moving to the previous time period
    const prevDate = () => {
        if (active === 1) { // Daily
            setIndex(prev => Math.max(prev - 1, 0));
        } else if (active === 2) { // Weekly
            setIndex(prev => Math.max(prev - 7, 0));
        } else { // Monthly
            setIndex(prev => Math.max(prev - 30, 0));
        }
    };

    // Calculate the nutritional data for the selected timeframe using useMemo for performance
    const { totalCalories, totalProtein, totalCarbs, totalFat, displayDate } = useMemo(() => {
        let calories = 0;
        let protein = 0;
        let carbs = 0;
        let fat = 0;
        let displayDate = '';
        let start, end;

        // Define the range based on the active view
        if (active === 1) { // Daily
            start = index;
            end = index + 1;
            displayDate = nutritionHistory[index].month + ' ' + nutritionHistory[index].dayNo + ', ' + nutritionHistory[index].year;
        } else if (active === 2) { // Weekly
            start = Math.max(0, index - 6);
            end = index + 1;
            const startDate = nutritionHistory[start];
            const endDate = nutritionHistory[end - 1];
            displayDate = `${startDate.month} ${startDate.dayNo} - ${endDate.month} ${endDate.dayNo}, ${endDate.year}`;
        } else { // Monthly
            start = Math.max(0, index - 29);
            end = index + 1;
            const startDate = nutritionHistory[start];
            const endDate = nutritionHistory[end - 1];
            displayDate = `${startDate.month} ${startDate.dayNo} - ${endDate.month} ${endDate.dayNo}, ${endDate.year}`;
        }

        // Loop through the selected range to sum up nutritional values
        for (let i = start; i < end; i++) {
            const m = nutritionHistory[i];
            if (!m || !m.meals) continue;

            calories += m.meals.breakfast.calories + m.meals.lunch.calories + m.meals.dinner.calories;
            protein += m.meals.breakfast.protein + m.meals.lunch.protein + m.meals.dinner.protein;
            carbs += m.meals.breakfast.carbs + m.meals.lunch.carbs + m.meals.dinner.carbs;
            fat += m.meals.breakfast.fat + m.meals.lunch.fat + m.meals.dinner.fat;
        }

        return {
            totalCalories: calories,
            totalProtein: protein,
            totalCarbs: carbs,
            totalFat: fat,
            displayDate: displayDate
        };
    }, [index, active, nutritionHistory]);

    // The data for the PieChart
    const pieData = [
        { name: 'Calories', value: totalCalories },
        { name: 'Protein', value: totalProtein },
        { name: 'Carbs', value: totalCarbs },
        { name: 'Fat', value: totalFat }
    ];

    const mealHistory = ['', 'Day', 'Week', 'Month'];
    const currentMeal = nutritionHistory[index];

    return (
        <div className="bg-white min-h-screen font-sans antialiased text-gray-800">
            <NavBar />

            <div className='max-w-4xl mx-auto px-4 pt-24 pb-8'>
                <div className="pl-3">
                    <h1 className="font-bold text-3xl">Nutritional History</h1>
                    <h1 className="font-semibold text-2xl text-gray-400">Choose Timeframe</h1>
                </div>

                <div className="flex gap-2 mt-3 pl-3">
                    <button onClick={() => setActive(1)} className={`w-[80px] h-[30px] rounded-full text-sm font-semibold transition-colors duration-200 ${active === 1 ? "bg-[#3FC660]" : "bg-gray-200 text-gray-700"}`}>
                        Daily
                    </button>
                    <button onClick={() => setActive(2)} className={`w-[80px] h-[30px] rounded-full text-sm font-semibold transition-colors duration-200 ${active === 2 ? "bg-[#3FC660]" : "bg-gray-200 text-gray-700"}`}>
                        Weekly
                    </button>
                    <button onClick={() => setActive(3)} className={`w-[80px] h-[30px] rounded-full text-sm font-semibold transition-colors duration-200 ${active === 3 ? "bg-[#3FC660]" : "bg-gray-200 text-gray-700"}`}>
                        Monthly
                    </button>
                </div>

                <div className="pt-6 flex items-center justify-center">
                    <div className="bg-gray-100 flex justify-between items-center w-full rounded-2xl p-4 ">
                        {/* Left Button */}
                        <div className="flex items-center">
                            <button onClick={prevDate} className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                                <IoChevronBackOutline className="text-4xl text-[#3FC660]" />
                            </button>
                        </div>

                        {/* Center Date Display */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-bold text-gray-700">{displayDate}</h3>
                            <h3 className="text-sm font-semibold text-gray-500">{mealHistory[active]} View</h3>
                        </div>

                        {/* Right Button */}
                        <div className="flex items-center">
                            <button onClick={nextDate} className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                                <IoChevronBackOutline className="text-4xl text-[#3FC660] rotate-180" />
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Main Content Pie Chart and Data Side-by-Side */}
                <div className="pt-6 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
                    {/* Pie Chart Section */}
                    <div className="w-full md:w-1/2">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    dataKey="value"
                                    data={pieData}
                                    innerRadius={80}
                                    outerRadius={120}
                                    paddingAngle={5}
                                    fill="#8884d8"
                                    cornerRadius={10}
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Nutritional Summary Section */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4">
                        <div className="space-y-4 w-full px-4 md:px-0">
                            <div className="flex items-center gap-3 text-lg font-semibold text-gray-700">
                                <div className="bg-[#3FC660] w-5 h-5 rounded-sm "></div>
                                <div className="flex justify-between items-center w-full gap-2">
                                    <h3 className="text-sm">Calories</h3>
                                    <h3>{totalCalories} <span className="text-xs font-normal">kcal</span></h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-lg font-semibold text-gray-700">
                                <div className="bg-[#FFBB28] w-5 h-5 rounded-sm "></div>
                                <div className="flex justify-between items-center w-full gap-2">
                                    <h3 className="text-sm">Protein</h3>
                                    <h3>{totalProtein} <span className="text-xs font-normal">g</span></h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-lg font-semibold text-gray-700">
                                <div className="bg-[#FF8042] w-5 h-5 rounded-sm "></div>
                                <div className="flex justify-between items-center w-full gap-2">
                                    <h3 className="text-sm">Carbs</h3>
                                    <h3>{totalCarbs} <span className="text-xs font-normal">g</span></h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-lg font-semibold text-gray-700">
                                <div className="bg-[#8884d8] w-5 h-5 rounded-sm"></div>
                                <div className="flex justify-between items-center w-full gap-2">
                                    <h3 className="text-sm">Fat</h3>
                                    <h3>{totalFat} <span className="text-xs font-normal">g</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Meal Details (Daily view only) */}
                {active === 1 && currentMeal && (
                    <div className="mt-8 bg-gray-50 rounded-xl  p-4">
                        <h2 className="text-xl font-bold mb-4">Meal Breakdown ({currentMeal.day})</h2>
                        <div className="grid gap-4">
                            {['breakfast', 'lunch', 'dinner'].map(mealKey => (
                                <div key={mealKey} className="bg-white rounded-lg p-3 ">
                                    <h3 className="font-semibold text-lg text-[#3FC660] mb-1 capitalize">{mealKey}</h3>
                                    <div className="flex justify-between items-center text-sm text-gray-600">
                                        <div>
                                            Calories <strong>{currentMeal.meals[mealKey].calories}</strong> kcal
                                        </div>
                                        <div>
                                            Carbs <strong>{currentMeal.meals[mealKey].carbs}</strong> g
                                        </div>
                                        <div>
                                            Protein <strong>{currentMeal.meals[mealKey].protein}</strong> g
                                        </div>
                                        <div>
                                            Fat <strong>{currentMeal.meals[mealKey].fat}</strong> g
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default NutritionalHistory;
