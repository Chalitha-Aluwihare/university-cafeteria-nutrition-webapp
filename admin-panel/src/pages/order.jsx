import React, { useState } from 'react';
import NavBar from '../components/navBar';
import { BiSolidRename } from "react-icons/bi";
import { MdConfirmationNumber } from "react-icons/md";
import { FaClock, FaCalendarAlt, FaMoneyCheck } from 'react-icons/fa';

function Order() {
    const data = [
        { id: 1, name: "String Hoppers", quantity: "4 pieces" },
        { id: 2, name: "Dhal Curry", quantity: "1 piece" },
        { id: 3, name: "Boiled Egg", quantity: "1 piece" },
    ];

    const [process, setProcess] = useState("Processing")

    const handelProcessClick =() => {
            setProcess("Completed")
    }

    return (
        <>
            <NavBar />
            <div className='pt-20 px-30'>
                <h1 className='text-3xl font-bold'>
                    Order Management 
                </h1>
                <p className="text-2xl text-gray-500 mb-2">Manage and Control Orders from Here</p>

                <hr className='my-5 border-gray-300 border-1'/>
                <div className='grid grid-cols-2'>
                    <div>
                        <div className='flex itesm-center gap-2'>
                            <MdConfirmationNumber className='w-6 h-6'/> 
                            <h1 className='font-bold font-2xl'>AXH5H</h1>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <BiSolidRename className='w-6 h-6'/> 
                            <h1 className='font-bold font-2xl'>Breakfast Meal</h1>
                        </div>
                    </div>
                    <div>
                        <div className='flex itesm-center gap-2'>
                            <FaCalendarAlt className='w-6 h-6'/> 
                            <h1 className='font-bold font-2xl'>7/28/2025 10:42:15 PM</h1>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <FaMoneyCheck className='w-6 h-6'/> 
                            <h1 className='font-bold font-xl'>Rs</h1>
                            <h1 className='font-bold font-2xl'>200.00</h1>
                        </div>
                    </div>
                </div>
                <div className="rounded pb-10 pt-2">
                    <table className="table-auto w-full border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-400 px-2 py-1 text-center w-14">No</th>
                                <th className="border border-gray-400 px-2 py-1 text-center">Food Item Name</th>
                                <th className="border border-gray-400 px-2 py-1 text-center">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id} className="text-center">
                                    <td className="border border-gray-400 px-2 py-1 text-left">{index + 1}</td>
                                    <td className="border border-gray-400 px-2 py-1 text-left">{item.name}</td>
                                    <td className="border border-gray-400 px-2 py-1">{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className={`  w-full p-2 rounded mt-3 font-bold text-xl text-white ${process === 'Processing' ? 'bg-[#FDAC2A]': 'bg-[#4CCF7E]'}`} onClick={handelProcessClick}>{process}</button>
                    <hr className='my-5 border-gray-300 border-1'/>
                </div>
                

            </div>
        </>
    )
};

export default Order;