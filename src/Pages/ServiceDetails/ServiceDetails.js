import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData, Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AllReviews from '../AllReviews/AllReviews';
import ReviewForm from '../ReviewForm/ReviewForm';

const ServiceDetails = () => {
    useTitle('Service Details')
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { _id, title, url, price, description } = service;


    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews, _id])

    return (
        <div className='my-20'>
            <div className='mx-auto'>
                <img src={url} alt="" className='w-full object-cover object-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl ' />
                <div className='flex justify-between items-center my-6'>
                    <h1 className='text-3xl sm:text-5xl font-bold text-activeColor'>{title}</h1>
                    <p className='text-xl sm:text-3xl font-bold'>${price}</p>
                </div>
                <p className='text-xl text-justify'>
                    {description}
                </p>
            </div>
            <div className='my-20'>
                <div className=''>
                    {
                        reviews.map(review => <AllReviews
                            key={review._id}
                            review={review}
                        ></AllReviews>)
                    }
                </div>
                <div>
                    {
                        user?.uid ?
                            <div>
                                <ReviewForm
                                    user={user}
                                    service={service}
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
            </div>
        </div>
    );
};

export default ServiceDetails;