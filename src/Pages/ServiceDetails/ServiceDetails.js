import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewForm from '../ReviewForm/ReviewForm';

const ServiceDetails = () => {
    useTitle('Service Details')
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { title, url, price, description } = service;
    return (
        <div className='my-20'>
            <div className='max-w-6xl mx-auto'>
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
                <div>

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
                            <h2 className='text-2xl sm:text-4xl font-bold text-center py-4 bg-activeColor text-white rounded-md w-full sm:w-[72%] mx-auto'>
                                Please login to add a review
                            </h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;