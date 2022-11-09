import React, { useEffect, useState } from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://bengali-taste-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='max-w-4xl mx-auto text-center pb-14'>
                <h3 className='text-4xl uppercase font-bold text-center mb-10 underline text-activeColor'>My Popular Recipe</h3>
                <p className='text-lg'>A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <Link to='/services' className='flex flex-row justify-center lg:justify-end'>
                <button className='flex items-center gap-4 px-12 py-3 font-medium bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl'>
                    See All
                    <BsFillArrowRightSquareFill></BsFillArrowRightSquareFill>
                </button>
            </Link>
        </div>
    );
};

export default Services;