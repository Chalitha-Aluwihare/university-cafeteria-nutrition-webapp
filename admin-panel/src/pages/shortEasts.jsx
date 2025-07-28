import { useState } from 'react';
import React  from 'react';
import NavBar from '../components/navBar';
import { RiFolderUploadFill } from "react-icons/ri";

function ShortEats() {
    const [data, setData] = useState([
        { id: 1, col1: 'String Hoppers (5 pcs)', col2: 200, col3: 160, col4: 50, col5: 5, col6: 3, col7: 70, col8: 90, col9: 5 },
        { id: 2, col1: 'Kiri Hodi', col2: 150, col3: 120, col4: 30, col5: 5, col6: 1, col7: 50, col8: 12, col9: 2 },
    ]);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };
    return (
        <>
            <NavBar />
            <div className="pt-20">
                <h2 className="text-3xl font-bold px-30">Short Eats Menu</h2>
                <p className="text-2xl text-gray-500 px-30 mb-2">Add and Manage Short Eat Items from Here</p>

                <div className="bg-gray-100 pt-1 mx-20 rounded-4xl">
                    <form className="flex flex-col gap-4 mt-2 px-30">


                        <div className='flex flex-col gap-2'>
                            <label className="text-2xl font-semibold mt-2"> Add Items to Short Eats Menu
                            </label>
                            <h1 className='text-lg font-semibold'> Build a New Snack Plate – Enter Short Eats Details</h1>
                            <div>

                                    
                                    <label className="text-lg">Upload Short Eats Image</label>
                                    <div className='flex items-center gap-2 bg-[#4CCF7E] p-2 w-[160px] rounded text-white '>
                                        <RiFolderUploadFill className='w-7 h-7 text-white'/>
                                        <button>
                                        
                                        Upload Image
                                    </button>
                                    </div>
                                </div>

                            <div className='grid grid-cols-2 gap-4'>
                                
                                <div>

                                    
                                    <label className="text-lg">Name</label>
                                    <input
                                        type="text"
                                        placeholder="E.g. Rolls, Fish Bun"
                                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                    />
                                </div>
                                <div>
                                    <label className="text-lg">Portion</label>
                                    <input
                                        type="text"
                                        placeholder="E.g. 1 piece"
                                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                    />
                                </div>
                                <div>
                                    <label className="text-lg">Calories</label>
                                    <input
                                        type="text"
                                        placeholder="E.g. 220 kcal"
                                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                    />
                                </div>
                                <div>
                                    <label className="text-lg">Carbs</label>
                                    <input
                                        type="text"
                                        placeholder="E.g. 30g"
                                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                    />
                                </div>
                                <div>
                                    <label className="text-lg">Protein</label>
                                    <input
                                        type="text"
                                        placeholder="E.g. 20g"
                                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                    />
                                </div>
                                <div>
                                    <label className="text-lg">Fat</label>
                                    <input
                                        type="text"
                                        placeholder="E.g. 8g"
                                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                    />
                                </div>
                                <div>
                                    <label className="text-lg">Price</label>
                                    <input
                                        type="text"
                                        placeholder="E.g. Rs.50/="
                                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-0 focus:border-[#4CCF7E] transition-colors duration-200"
                                    />
                                </div>
                                


                            </div>
                        </div>



                        <button
                            type="submit"
                            className="bg-[#4CCF7E] text-white px-4 py-2 rounded mb-5"
                        >
                            Add Short Eats Item
                        </button>
                    </form>


                    <label className="text-2xl font-semibold px-30">Remove Short Eats Item

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
                                                className=" text-red-500 font-bold px-2 py-1 rounded"
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
        </>
    )
};

export default ShortEats;