import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData, Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AllReviews from '../AllReviews/AllReviews';
import ReviewForm from '../ReviewForm/ReviewForm';
import Timeline from '../Shared/Timeline/Timeline';
import { Typewriter } from 'react-simple-typewriter'


const ServiceDetails = () => {
    useTitle('Service Details')
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { _id, title, url, price, description } = service;


    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://bengali-taste-server.vercel.app/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])


    const handleShowReview = (id) => {
        fetch(`https://bengali-taste-server.vercel.app/reviews?serviceId=${id}`, {
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }

    return (
        <div className='my-20 lg:mx-32'>
            <div className='mx-auto'>
                <img src={url} alt="" className='w-full object-cover object-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl ' />
                <div className='flex justify-between items-center my-6'>
                    <h1 className='text-3xl sm:text-5xl font-bold text-activeColor'>
                        {" "}
                        <span style={{ color: "#fd9300", fontWeight: "bold" }}>
                            <Typewriter
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={80}
                                deleteSpeed={140}
                                delaySpeed={1000}
                                words={[` ${title}`]}
                            />
                        </span>

                    </h1>
                    <p className='text-xl sm:text-3xl font-bold text-blue-600'>${price}</p>
                </div>
                <p className='text-xl text-justify'>
                    {description}
                </p>
            </div>

            <div className='my-20'>
                <Timeline></Timeline>
            </div>

            <div className='my-20'>
                <div>
                    {
                        user?.uid ?
                            <div>
                                <ReviewForm
                                    user={user}
                                    service={service}
                                    handleShowReview={handleShowReview}
                                ></ReviewForm>
                            </div>
                            :
                            <button className='block text-2xl sm:text-4xl font-bold text-center py-4 bg-activeColor text-white rounded-md w-full sm:w-[72%] mx-auto'>
                                <Link to='/login' >
                                    Please login to add a review
                                </Link>
                            </button>
                    }
                </div>
                <div className='mt-0'>
                    <p className='max-w-5xl py-6 text-xl text-left'>Total Customer Review({reviews.length}) :</p>
                    {
                        reviews.map(review => <AllReviews
                            key={review._id}
                            review={review}
                            totalReview={reviews.length}
                        ></AllReviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;