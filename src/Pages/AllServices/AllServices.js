import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Home/Service/Service';

const AllServices = () => {
    const [allServices, setAllServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div>
            <div className='max-w-4xl mx-auto text-center pb-14'>
                <h3 className='w-[40%] pb-2 mx-auto text-3xl font-semibold  mb-6 border-activeColor text-activeColor border-b-2'>My All Services</h3>
                <p className='text-lg'>A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
                {
                    allServices.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AllServices;