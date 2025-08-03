import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import { FaMoneyCheck } from "react-icons/fa";
import orderData from '../data/mealOrder.js';
import { IoCaretBack } from "react-icons/io5";
import Footer from './footer.jsx';
import { BsFillStopwatchFill } from "react-icons/bs";

function OrderFoodCart() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const [orders, setOrders] = useState(() => {
        if (state) {
            const newOrder = {
                orderCode: Math.random().toString(36).substr(2, 6).toUpperCase(),
                mealName: state.mealName,
                orderDateTime: new Date().toISOString(),
                status: "Preparing",
                price: state.totalPrice,
                countdown: 300, // 5 minutes
            };
            return [newOrder, ...orderData];
        }
        return orderData;
    });

    const [visibleCount, setVisibleCount] = useState(3);

    // Countdown Timer Effect
    useEffect(() => {
        const interval = setInterval(() => {
            setOrders(prevOrders =>
                prevOrders.map(order => {
                    if (order.status === 'Preparing' && order.countdown > 0) {
                        const updatedCountdown = order.countdown - 1;
                        return {
                            ...order,
                            countdown: updatedCountdown,
                            status: updatedCountdown === 0 ? 'Delivered' : 'Preparing',
                        };
                    }
                    return order;
                })
            );
        }, 1000); // every second

        return () => clearInterval(interval);
    }, []);

    const handleSeeMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    const visibleOrders = orders.slice(0, visibleCount);

    const formatCountdown = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    };

    const statusStyles = {
        Delivered: ' bg-[#F8F6F7]',
        Preparing: ' bg-[#F8F6F7]',
        Cancelled: ' bg-[#F8F6F7]',
    };

    return (
        <>
            <div className="p-6 pt-20 max-w-6xl mx-auto px-20">
                <div className='flex justify-between items-center mb-6'>
                    <div className="flex items-center gap-2 bg-[#F8F6F7] py-2 px-5 rounded-full">
                        <IoCaretBack />
                        <button onClick={() => navigate(-1)} className='lg:text-xl'>Back</button>
                    </div>
                    <div>
                        {visibleCount < orders.length && (
                            <button
                                onClick={handleSeeMore}
                                className="px-6 py-2 bg-[#6B6B6B] text-white text-xl rounded-full hover:bg-[#909090] transition"
                            >
                                See More
                            </button>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {visibleOrders.map((order) => {
                        const statusClass = statusStyles[order.status] || 'bg-gray-300 text-gray-700';

                        return (
                            <div
                                key={order.orderCode}
                                className={`rounded-lg transition-shadow duration-300 ${statusClass} hover:shadow-xl`}
                            >
                                <div className="p-5 flex flex-col gap-4">
                                    <h2 className="text-2xl font-semibold">{order.mealName}</h2>

                                    <div className="text-sm sm:text-base opacity-80">
                                        <p className='flex items-center gap-2'>
                                            <FaCalendarAlt />
                                            {new Date(order.orderDateTime).toLocaleDateString()}
                                        </p>

                                        <p className='flex items-center gap-2'>
                                            <FaClock />
                                            {new Date(order.orderDateTime).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </p>

                                        <p className='flex items-center gap-2'>
                                            <FaMoneyCheck />
                                            Rs.{order.price.toFixed(2)}
                                        </p>

                                        {/* Countdown timer */}
                                        {order.status === "Preparing" && (
                                            <p className="text-red-600 font-semibold text-lg flex items-center gap-2">
                                                <BsFillStopwatchFill />
                                                 {formatCountdown(order.countdown)}
                                            </p>
                                        )}
                                    </div>

                                    <span
                                        className={`px-4 py-2 rounded-full text-xl font-semibold text-black text-center
                                            ${order.status === 'Delivered' ? 'bg-[#4CCF7E]' :
                                                order.status === 'Cancelled' ? 'bg-[#FD683D]' :
                                                    order.status === 'Preparing' ? 'bg-[#FDAC2A]' :
                                                        'bg-gray-300'}
                                        `}
                                    >
                                        {order.status}
                                    </span>
                                </div>

                                <div className="border-t border-white p-4 text-center">
                                    <h4 className="text-sm font-semibold">Order Code</h4>
                                    <p className="text-2xl font-bold tracking-wider">{order.orderCode}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default OrderFoodCart;
