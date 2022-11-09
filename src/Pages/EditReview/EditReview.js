import React, { useState } from 'react';
import logo from '../../assets/image/review.json'
import Lottie from 'lottie-react'

import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const colors = {
    orange: "#FFBA5A",
    grey: "#9b9e9c"

};

const EditReview = () => {
    useTitle('Edit Review')
    const navigate = useNavigate();
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const review = useLoaderData();
    const { _id, name, email, message } = review;

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const message = form.review.value;
        const date = new Date();
        const rating = currentValue;

        const updatedReview = {
            message,
            date,
            rating
        }

        fetch(`https://bengali-taste-server.vercel.app/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review Update Successful', { autoClose: 800 })
                    navigate('/myReview')
                    form.reset();
                }
            })
    }

    return (
        <div>
            <h2 className='mt-24 uppercase text-3xl text-activeColor text-center underline px-10'>Edit Your Review</h2>
            <div className=" bg-transparent text-gray-100 py-12">
                <div
                    className="px-8 grid gap-8 grid-cols-1 lg:grid-cols-2 py-16 mx-auto bg-white text-gray-900 rounded-lg shadow">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-center lg:text-left text-4xl lg:text-5xl font-bold leading-tight mt-10">Your review is very important to me</h2>

                        </div>
                        <div className='max-h-[500px] max-w-[500px] mx-auto'>
                            <Lottie animationData={logo} loop={true} />
                        </div>
                    </div>
                    <form onSubmit={handleUpdate} className="flex flex-col gap-2 justify-center bg-white shadow-md border border-activeColor px-8 rounded-md">
                        <div className="mt-8">
                            <div className='flex justify-center flex-col items-center'>
                                <h2 className='uppercase pb-2 text-lg text-black font-bold'>Give Stars</h2>
                                <div className='flex gap-3 mt-2'>
                                    {stars.map((_, index) => {
                                        return (
                                            <FaStar
                                                key={index}
                                                size={32}
                                                onClick={() => handleClick(index + 1)}
                                                onMouseOver={() => handleMouseOver(index + 1)}
                                                onMouseLeave={handleMouseLeave}
                                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                                style={{
                                                    marginRight: 10,
                                                    cursor: "pointer"
                                                }}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                            <input className="w-full border border-activeColor bg-white text-gray-900 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                                defaultValue={name} readOnly type="text" placeholder="" />
                        </div>
                        <div className="mt-1">
                            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                            <input className="w-full border bg-white border-activeColor text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                                defaultValue={email} readOnly type="email" />
                        </div>
                        <div className="mt-1">
                            <div>
                                <span className="uppercase text-sm text-normalColor font-bold">Message</span>
                                <textarea
                                    className="w-full border border-activeColor text-xl h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline resize-none" defaultValue={message} name='review' required>
                                </textarea>
                            </div>
                            <button
                                type='submit'
                                className="my-10 uppercase text-sm font-bold tracking-wide bg-activeColor text-gray-100 py-4 rounded-md w-full focus:outline-none focus:shadow-outline">
                                Edit Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditReview;