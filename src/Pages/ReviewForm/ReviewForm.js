import React, { useState } from 'react';
import review from "../../assets/image/review.json"
import Lottie from 'lottie-react'
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';

const colors = {
    orange: "#FFBA5A",
    grey: "#ffffff"

};

const ReviewForm = ({user, service}) => {

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

    const {_id, title} = service

    const email = user.email;
    const name = user.displayName;
    const photoUrl = user.photoURL;
    

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const message = form.review.value;
        const review = {
            rating : currentValue,
            message,
            name,
            email,
            photoUrl,
            service: _id,
            serviceTitle: title,
            date: new Date() 
        }
        
        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                form.reset()
                toast.success('Review Successful', {autoClose: 800})
            }
        })
    }
    return (
        <div className=" bg-transparent text-gray-100 py-12">
            <div
                className="mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 py-16 mx-auto bg-white text-gray-900 rounded-lg shadow">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Your review is very important to me</h2>

                    </div>
                    <div>
                        <Lottie animationData={review} loop={true} />
                    </div>
                </div>
                <form onSubmit={handleReview} className="flex flex-col gap-5 justify-center bg-gray-300 px-4 rounded-md">
                    <div className="mt-8">
                        <div>
                            <h2 className='uppercase text-sm text-normalColor font-bold'>Give Stars</h2>
                            <div className='flex gap-4 mt-2'>
                                {stars.map((_, index) => {
                                    return (
                                        <FaStar
                                            key={index}
                                            size={24}
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
                        <input className="w-full bg-white text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                         defaultValue={name} readOnly   type="text" placeholder="" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input className="w-full bg-white text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                         defaultValue={email} readOnly  type="email" />
                    </div>
                    <div className="mt-8">
                        <div>
                            <span className="uppercase text-sm text-normalColor font-bold">Message</span>
                            <textarea
                                className="w-full h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name='review' required>
                            </textarea>
                        </div>
                        <button
                            type='submit'
                            className="mt-10 uppercase text-sm font-bold tracking-wide bg-activeColor text-gray-100 py-4 rounded-md w-full focus:outline-none focus:shadow-outline">
                            Give Review
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ReviewForm;