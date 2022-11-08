import React, { useEffect, useState } from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='max-w-4xl mx-auto text-center pb-14'>
                <h3 className='w-[50%] pb-2 mx-auto text-3xl font-semibold  mb-6 border-activeColor text-activeColor border-b-2'>My Popular Recipe</h3>
                <p className='text-lg'>A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <Link to='/services' className='flex flex-row justify-end'>
                <button className='flex items-center gap-4 px-12 py-3 font-medium bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl'>
                    See All
                    <BsFillArrowRightSquareFill></BsFillArrowRightSquareFill>
                </button>
            </Link>
        </div>
    );
};

export default Services;