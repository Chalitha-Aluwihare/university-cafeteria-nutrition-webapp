import { useState } from "react";
import React from 'react';

function MainMeals() {
    const [active, setActive] = useState('Breakfast');
    const [available, setAvailable] = useState(true); // true = Available
    const [data, setData] = useState([
        { id: 1, col1: 'String Hoppers (5 pcs)', col2: 200, col3: 160, col4: 50, col5: 5, col6: 3, col7: 70, col8: 90, col9: 5 },
        { id: 2, col1: 'Kiri Hodi', col2: 150, col3: 120, col4: 30, col5: 5, col6: 1, col7: 50, col8: 12, col9: 2 },
    ]);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    return (
        <div className="pt-20">
            <div className="flex gap-3 px-30">
                {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
                    <button
                        key={meal}
                        className={`py-2 px-4 rounded-full text-xl font-bold ${active === meal
                            ? 'bg-[#4CCF7E] text-white'
                            : 'bg-[#F8F6F7] text-black'
                            }`}
                        onClick={() => setActive(meal)}
                    >
                        {meal}
                    </button>
                ))}
            </div>
            {active === 'Breakfast' && (
                <div className="mt-5">
                    <h2 className="text-3xl font-bold px-30">Breakfast Menu</h2>
                    <p className="text-2xl text-gray-500 px-30 mb-2">Add and Manage Breakfast Items from Here </p>

                    <div className="bg-gray-100 pt-1 mx-20 rounded-4xl">
                        <form className="flex flex-col gap-4 mt-5 px-30">
                            <div>
                                <label className="text-2xl font-semibold">Set Today’s Breakfast Availability</label>
                                <div className="flex gap-2 mt-1">
                                    <button
                                        type="button"
                                        className={`py-2 px-4 rounded-full ${available ? 'bg-[#4CCF7E] text-white' : 'bg-[#F8F6F7] text-black'
                                            }`}
                                        onClick={() => setAvailable(true)}
                                    >
                                        Available
                                    </button>
                                    <button
                                        type="button"
                                        className={`py-2 px-4 rounded-full ${!available ? 'bg-[#4CCF7E] text-white' : 'bg-[#F8F6F7] text-black'
                                            }`}
                                        onClick={() => setAvailable(false)}
                                    >
                                        Not Available
                                    </button>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#4CCF7E] text-white px-4 py-2 rounded mb-2"
                            >
                                Confirm Availability
                            </button>




                            <div className='flex flex-col gap-2'>
                                <label className="text-2xl font-semibold">Build a Regular Breakfast Plate

                                </label>

                                <div className='grid grid-cols-2 gap-4'>
                                    <div>

                                        <h1 className='text-lg font-semibold mb-2'> New Small Plate Builder – Enter Food Item Details</h1>
                                        <label className="text-lg">Food Item Name</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. Pittu, String Hoppers"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>

                                        <h1 className='text-lg font-semibold mb-2'> New Large Plate Builder – Enter Food Item Details</h1>
                                        <label className="text-lg">Food Item Name</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. Pittu, String Hoppers"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Food Item Portion</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 1 piece, 150g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Food Item Portion</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 1 piece, 150g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="text-lg">Calories of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 220 kcal"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Calories of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 220 kcal"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Carbs of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 30g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Carbs of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 30g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Protein of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 20g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Protein of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 20g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Fat of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 8g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Fat of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 8g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>


                                </div>
                            </div>



                            <button
                                type="submit"
                                className="bg-[#4CCF7E] text-white px-4 py-2 rounded mb-5"
                            >
                                Add Food Item 
                            </button>
                        </form>


                        <label className="text-2xl font-semibold px-30">Remove Food Items from Regular Breakfast Plate

                        </label>
                        <div className=" rounded pb-10 pt-2 px-30">
                            <table className="table-auto w-full border border-gray-400">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-400 px-2 py-1 w-14 text-center">No</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Name</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Portions</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Calories</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Carbs</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Protein</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Fat</th>

                                        <th className="border border-gray-400 px-2 py-1 text-center">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={item.id} className="text-center">
                                            <td className="border border-gray-400 px-2 py-1">{index + 1}</td>
                                            <td className="border border-gray-400 px-2 py- text-left">{item.col1}</td>
                                            <td className="border border-gray-400 px-2 py-1">{item.col2}</td>
                                            <td className="border border-gray-400 px-2 py-1">{item.col3}</td>
                                            <td className="border border-gray-400 px-2 py-1">{item.col4}</td>
                                            <td className="border border-gray-400 px-2 py-1">{item.col5}</td>


                                            <td className="border border-gray-400 px-2 py-1">{item.col9}</td>
                                            <td className="border border-gray-400 px-2 py-1">
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className=" text-red-500 font-bold"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
            {active === 'Lunch' && (
                <div className="mt-5">
                    <h2 className="text-3xl font-bold px-30">Lunch Menu</h2>
                    <p className="text-2xl text-gray-500 px-30 mb-2">Add and Manage Lunch Items from Here</p>

                    <div className="bg-gray-100 pt-1 mx-20 rounded-4xl">
                        <form className="flex flex-col gap-4 mt-5 px-30">
                            <div>
                                <label className="text-2xl font-semibold">Set Today’s Lunch Availability</label>
                                <div className="flex gap-2 mt-1">
                                    <button
                                        type="button"
                                        className={`py-2 px-4 rounded-full ${available ? 'bg-[#4CCF7E] text-white' : 'bg-[#F8F6F7] text-black'
                                            }`}
                                        onClick={() => setAvailable(true)}
                                    >
                                        Available
                                    </button>
                                    <button
                                        type="button"
                                        className={`py-2 px-4 rounded-full ${!available ? 'bg-[#4CCF7E] text-white' : 'bg-[#F8F6F7] text-black'
                                            }`}
                                        onClick={() => setAvailable(false)}
                                    >
                                        Not Available
                                    </button>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#4CCF7E] text-white px-4 py-2 rounded mb-2"
                            >
                                Confirm Availability
                            </button>




                            <div className='flex flex-col gap-2'>
                                <label className="text-2xl font-semibold">Build a Regular Lunch Plate

                                </label>

                                <div className='grid grid-cols-2 gap-4'>
                                    <div>

                                        <h1 className='text-lg font-semibold mb-2'> New Small Plate Builder – Enter Food Item Details</h1>
                                        <label className="text-lg">Food Item Name</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. Pittu, String Hoppers"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>

                                        <h1 className='text-lg font-semibold mb-2'> New Large Plate Builder – Enter Food Item Details</h1>
                                        <label className="text-lg">Food Item Name</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. Pittu, String Hoppers"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Food Item Portion</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 1 piece, 150g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Food Item Portion</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 1 piece, 150g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Calories of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 220 kcal"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Calories of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 220 kcal"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Carbs of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 30g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Carbs of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 30g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Protein of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 20g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Protein of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 20g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Fat of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 8g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Fat of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 8g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>


                                </div>
                            </div>



                            <button
                                type="submit"
                                className="bg-[#4CCF7E] text-white px-4 py-2 rounded mb-5"
                            >
                                Add Food Item
                            </button>
                        </form>


                        <label className="text-2xl font-semibold px-30">Remove Food Items from Regular Lunch Plate

                        </label>
                        <div className=" rounded pb-10 pt-2 px-30">
                            <table className="table-auto w-full border border-gray-400">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-400 px-2 py-1 w-14 text-center">No</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Name</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Portions</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Calories</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Carbs</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Protein</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Fat</th>

                                        <th className="border border-gray-400 px-2 py-1 text-center">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={item.id} className="text-center">
                                            <td className="border border-gray-400 px-2 py-1">{index + 1}</td>
                                            <td className="border border-gray-400 px-2 py- text-left">{item.col1}</td>
                                            <td className="border border-gray-400 px-2 py-1">{item.col2}</td>
                                            <td className="border border-gray-400 px-2 py-1">{item.col3}</td>
                                            <td className="border border-gray-400 px-2 py-1">{item.col4}</td>
                                            <td className="border border-gray-400 px-2 py-1">{item.col5}</td>


                                            <td className="border border-gray-400 px-2 py-1">{item.col9}</td>
                                            <td className="border border-gray-400 px-2 py-1">
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className=" text-red-500 font-bold px-2 py-1 rounded hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {active === 'Dinner' && (
                <div className="mt-5">
                    <h2 className="text-3xl font-bold px-30">Dinner Menu</h2>
                    <p className="text-2xl text-gray-500 px-30 mb-2">Add and Manage Dinner Items from Here</p>

                    <div className="bg-gray-100 pt-1 mx-20 rounded-4xl">
                        <form className="flex flex-col gap-4 mt-5 px-30">
                            <div>
                                <label className="text-2xl font-semibold">Set Today’s Dinner Availability</label>
                                <div className="flex gap-2 mt-1">
                                    <button
                                        type="button"
                                        className={`py-2 px-4 rounded-full ${available ? 'bg-[#4CCF7E] text-white' : 'bg-[#F8F6F7] text-black'
                                            }`}
                                        onClick={() => setAvailable(true)}
                                    >
                                        Available
                                    </button>
                                    <button
                                        type="button"
                                        className={`py-2 px-4 rounded-full ${!available ? 'bg-[#4CCF7E] text-white' : 'bg-[#F8F6F7] text-black'
                                            }`}
                                        onClick={() => setAvailable(false)}
                                    >
                                        Not Available
                                    </button>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#4CCF7E] text-white px-4 py-2 rounded mb-2"
                            >
                                Confirm Availability
                            </button>




                            <div className='flex flex-col gap-2'>
                                <label className="text-2xl font-semibold">Build a Regular Dinner Plate

                                </label>

                                <div className='grid grid-cols-2 gap-4'>
                                    <div>

                                        <h1 className='text-lg font-semibold mb-2'> New Small Plate Builder – Enter Food Item Details</h1>
                                        <label className="text-lg">Food Item Name</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. Pittu, String Hoppers"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>

                                        <h1 className='text-lg font-semibold mb-2'> New Large Plate Builder – Enter Food Item Details</h1>
                                        <label className="text-lg">Food Item Name</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. Pittu, String Hoppers"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Food Item Portion</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 1 piece, 150g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Food Item Portion</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 1 piece, 150g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Calories of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 220 kcal"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Calories of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 220 kcal"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Carbs of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 30g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Carbs of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 30g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Protein of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 20g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Protein of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 20g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Fat of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 8g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg">Fat of Food Item</label>
                                        <input
                                            type="text"
                                            placeholder="E.g. 8g"
                                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                        />
                                    </div>


                                </div>
                            </div>



                            <button
                                type="submit"
                                className="bg-[#4CCF7E] text-white px-4 py-2 rounded mb-5"
                            >
                                Add Food Item
                            </button>
                        </form>


                        <label className="text-2xl font-semibold px-30">Remove Food Items from Regular Dinner Plate

                        </label>
                        <div className=" rounded pb-10 pt-2 px-30">
                            <table className="table-auto w-full border border-gray-400">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-400 px-2 py-1 w-14 text-center">No</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Name</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Portions</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Calories</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Carbs</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Protein</th>
                                        <th className="border border-gray-400 px-2 py-1 text-center">Fat</th>

                                        <th className="border border-gray-400 px-2 py-1 text-center">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={item.id} className="text-center">
                                            <td className="border border-gray-400 px-2 py-1">{index + 1}</td>
                                            <td className="border border-gray-400 px-2 py- text-left">{item.col1}</td>
                                            <td className="border border-gray-400 px-2 py-1">{item.col2}</td>
                                            <td className="border border-gray-400 px-2 py-1">{item.col3}</td>
                                            <td className="border border-gray-400 px-2 py-1">{item.col4}</td>
                                            <td className="border border-gray-400 px-2 py-1">{item.col5}</td>


                                            <td className="border border-gray-400 px-2 py-1">{item.col9}</td>
                                            <td className="border border-gray-400 px-2 py-1">
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className=" text-red-500 font-bold px-2 py-1 rounded hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainMeals;
