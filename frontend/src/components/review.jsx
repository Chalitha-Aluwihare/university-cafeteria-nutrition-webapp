import React from 'react'
import ReviewData from '../data/reviewData'
import { FaStar } from "react-icons/fa6";


function Review({ review }) {
    let reviewRating;
    if (review.rating === 0) {
        reviewRating =
        <div className='flex items-center justify-center'>
            <FaStar className='fill-gray-300' />
            <FaStar className='fill-gray-300' />
            <FaStar className='fill-gray-300' />
            <FaStar className='fill-gray-300' />
            <FaStar className='fill-gray-300' />
            <h1 className='ml-1 text-gray-500'>0</h1>
        </div>;
    }
    else if (review.rating === 1) {
        reviewRating =
        <div className='flex items-center justify-center'>
            <FaStar className='fill-gray-300' />
            <FaStar className='fill-gray-300' />
            <FaStar className='fill-gray-300' />
            <FaStar className='fill-gray-300' />
            <FaStar className='fill-gray-300' />
            <h1 className='ml-1 text-gray-500'>1.0</h1>
        </div>;
    }
    else if (review.rating === 2) {
        reviewRating =
        <div className='flex items-center justify-center'>
            <FaStar className='fill-yellow-300' />
            <FaStar className='fill-yellow-300' />
            <FaStar className='fill-gray-300' />
            <FaStar className='fill-gray-300' />
            <FaStar className='fill-gray-300' />
            <h1 className='ml-1 text-gray-500'>2.0</h1>
        </div>;
    }
    else if (review.rating === 3) {
        reviewRating =
        <div className='flex items-center justify-center'>
            <FaStar className='fill-yellow-300' />
            <FaStar className='fill-yellow-300' />
            <FaStar className='fill-yellow-300' />
            <FaStar className='fill-gray-300' />
            <FaStar className='fill-gray-300' />
            <h1 className='ml-1 text-gray-500'>3.0</h1>
        </div>;
    }
    else if (review.rating === 4) {
        reviewRating =
        <div className='flex items-center justify-center'>
            <FaStar className='fill-yellow-300' />
            <FaStar className='fill-yellow-300' />
            <FaStar className='fill-yellow-300' />
            <FaStar className='fill-yellow-300' />
            <FaStar className='fill-gray-300' />
            <h1 className='ml-1 text-gray-500'>4.0</h1>
        </div>;
    }
    else if (review.rating === 5) {
        reviewRating =
        <div className='flex items-center justify-center'>
            <FaStar className='fill-yellow-300' />
            <FaStar className='fill-yellow-300' />
            <FaStar className='fill-yellow-300' />
            <FaStar className='fill-yellow-300' />
            <FaStar className='fill-yellow-300' />
            <h1 className='ml-1 text-gray-500'>5.0</h1>
        </div>;
    }
    return (
        <>
            <div className='items-center justify-between bg-gray-100 rounded-3xl p-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold'>{review.name}</h1>
                    <h1>{reviewRating}</h1>
                </div>
                <div>
                    {review.review}
                </div>

            </div>
        </>
    )
}

export default Review;