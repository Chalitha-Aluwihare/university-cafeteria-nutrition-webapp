import React from 'react';
import mealOrders from '../data/mealOrders';

function OrderFoodCart() {
    return (
        <>
            <div className=' p-3 '>

                {
                    mealOrders.map((order, index) => {
                        if (order.orderStatus === "Pending") {
                            return (
                                <div className=' bg-[#3FC660] p-3 rounded-[10px] mt-3'>
                                    <div className='flex justify-between text-white'>
                                        <h3 className='text-2xl font-bold'>Breakfast Meal</h3>
                                        <h3 className='text-white'>more details</h3>
                                    </div>

                                    <div key={index} className='flex justify-between'>

                                        <div>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-[10px] h-[10px] bg-white'></div>
                                                <h5 className='text-white'>Thu 12 Jun 2025</h5>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-[10px] h-[10px] bg-white'></div>
                                                <h5 className='text-white'>8.00AM</h5>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-[10px] h-[10px] bg-white'></div>
                                                <h5 className='text-white'>Rs.220.00</h5>
                                            </div>

                                            <div className='flex items-center gap-1'>
                                                <div className='mt-2 p-2 rounded-[6px] bg-[#F6B704] text-center'>
                                                    <button>{order.orderStatus}</button>
                                                </div>
                                                <div className='mt-2 p-2 rounded-[6px] bg-white text-center'>
                                                    {order.countDown}
                                                </div>
                                            </div>
                                            <div className='text-center mt-3 bg-white rounded-[6px] p-3 leading-[10px]'>
                                                <h3>Order Code</h3>
                                                <h3 className='text-2xl font-bold'>ACX125T</h3>
                                            </div>


                                        </div>

                                        <div className='w-[200px]'>
                                            <img src={order.img} alt="" />
                                        </div>
                                    </div>

                                </div>
                            );
                        } else {

                            return (
                                <div className=' bg-[#E2E2E2] p-3 rounded-[10px] mt-3'>
                                    <div className='flex justify-between text-black'>
                                        <h3 className='text-2xl font-bold'>Breakfast Meal</h3>
                                        <h3 className='text-[#6B6B6B]'>more details</h3>
                                    </div>

                                    <div key={index} className='flex justify-between '>
                                        <div>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-[10px] h-[10px] bg-[#6B6B6B]'></div>
                                                <h5 className='text-[#6B6B6B]'>Thu 12 Jun 2025</h5>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-[10px] h-[10px] bg-[#6B6B6B]'></div>
                                                <h5 className='text-[#6B6B6B]'>8.00AM</h5>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-[10px] h-[10px] bg-[#6B6B6B]'></div>
                                                <h5 className='text-[#6B6B6B]'>Rs.220.00</h5>
                                            </div>

                                            <div className='flex items-center gap-1'>
                                                <div className='mt-2 p-2 rounded-[6px] bg-[#3FC660] text-center'>
                                                    <button>{order.orderStatus}</button>
                                                </div>
                                                <div className='mt-2 p-2 rounded-[6px] bg-white text-center'>
                                                    {order.countDown}
                                                </div>
                                            </div>
                                            <div className='text-center mt-3 bg-white rounded-[6px] p-3 leading-[10px]'>
                                                <h3>Order Code</h3>
                                                <h3 className='text-2xl font-bold'>ACX125T</h3>
                                            </div>


                                        </div>

                                        <div className='w-[200px]'>
                                            <img src={order.img} alt="" />
                                        </div>
                                    </div>

                                </div>
                            );
                        }
                    })
                }


            </div>
        </>
    )
};

export default OrderFoodCart;
