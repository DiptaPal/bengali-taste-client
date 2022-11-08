import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    const {title, url, price, description} = service;
    return (
        <div className='my-20'>
            <img src={url} alt="" className='w-full object-cover object-center h-[600px] rounded-xl ' />
            <div className='flex justify-between items-center my-6'>
                <h1 className='text-5xl font-bold text-activeColor'>{title}</h1>
                <p className='text-3xl font-bold'>${price}</p>
            </div>
            <p className='text-xl'>
                {description}
            </p>

        </div>
    );
};

export default ServiceDetails;