import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Service from '../Home/Service/Service';
import { BallTriangle } from 'react-loader-spinner'

const AllServices = () => {
    const [allServices, setAllServices] = useState([])
    useTitle('Services')
    useEffect(() => {
        fetch('https://bengali-taste-server.vercel.app/allServices')
            .then(res => res.json())
            .then(data => {
                setAllServices(data)
            })
    }, [])

    return (
        <div>
            {
                allServices.length === 0 ?
                    <div className=' flex justify-center items-center'>
                        <BallTriangle
                            height={400}
                            width={200}
                            radius={5}
                            color="#fb9300"
                            ariaLabel="ball-triangle-loading"
                            wrapperClass={{}}
                            wrapperStyle=""
                            visible={true}
                        /></div>
                    :
                    <>
                        <div className='max-w-4xl mx-auto text-center pb-14'>
                            <h3 className='w-[40%] pb-2 mx-auto text-3xl font-semibold  mb-6 border-activeColor text-activeColor border-b-2'>My All Recipe</h3>
                            <p className='text-lg'>A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                            {
                                allServices.map(service => <Service
                                    key={service._id}
                                    service={service}
                                ></Service>)
                            }
                        </div></>
            }
        </div>
    );
};

export default AllServices;