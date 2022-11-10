import React from 'react';
import firstPic1 from '../../../assets/blog/single square.png'
import firstPic2 from '../../../assets/blog/Vine Leaves frozen.png'
import firstPic3 from '../../../assets/blog/family square.png'
import { FaCubes, FaUsers, FaUtensils } from "react-icons/fa";

const DishType = () => {
    return (
        <div className='my-28 max-w-5xl mx-auto flex flex-col justify-center items-center'>
            <p className='text-4xl uppercase font-bold text-center mb-10 underline text-activeColor'>Dishes Types</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='border border-activeColor shadow-xl rounded-md max-w-xs hover:scale-105 transition-all duration-500 cursor-pointer'>
                    <div className='relative'>
                        <img src={firstPic1} alt="" className='h-64 w-full object-cover object-center rounded-t-md' />
                        <div className='flex justify-center items-center absolute -bottom-16 left-[28%]'>
                            <div data-aos="fade-down" className='bg-white shadow-md rounded-full flex justify-center items-end'>
                                <div className='flex flex-col items-center justify-center px-6 py-8 text-black'>
                                    <FaUtensils className='text-4xl'></FaUtensils>
                                    <h3 className='text-3xl font-bold'>Single</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-justify mt-14 p-4'>
                        <p className='text-activeColor text-center text-xl mb-2 font-semibold'>90 mins</p>
                        <p className=''>Homemade food that is delivered in 90mins. Single portioned well-balanced, clean and healthy meals. Perfect for a homey feel and nutritious lunch at work.</p>
                    </div>
                </div>
                <div className='border border-activeColor shadow-xl rounded-md max-w-xs hover:scale-105 transition-all duration-500 cursor-pointer'>
                    <div className='relative'>
                        <img src={firstPic2} alt="" className='h-64 w-full object-cover object-center rounded-t-md' />
                        <div className='flex justify-center items-center absolute -bottom-16 left-[28%]'>
                            <div data-aos="fade-down" className='bg-white shadow-md rounded-full flex justify-center items-end'>
                                <div className='flex flex-col items-center justify-center px-6 py-8 text-black'>
                                    <FaCubes className='text-4xl'></FaCubes>
                                    <h3 className='text-3xl font-bold'>Frozen</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-justify mt-14 p-4'>
                        <p className='text-activeColor text-center text-xl mb-2 font-semibold'>24 hours</p>
                        <p className=''>Precooked homemade and delicious dishes that will cut your time in the kitchen by more than half. Great to stock up your freezer with for busy days. Delivered to your doorstep the next day.</p>
                    </div>
                </div>
                <div className='border border-activeColor shadow-xl rounded-md max-w-xs hover:scale-105 transition-all duration-500 cursor-pointer'>
                    <div className='relative'>
                        <img src={firstPic3} alt="" className='h-64 w-full object-cover object-center rounded-t-md' />
                        <div className='flex justify-center items-center absolute -bottom-16 left-[28%]'>
                            <div data-aos="fade-down" className='bg-white shadow-md rounded-full flex justify-center items-end'>
                                <div className='flex flex-col items-center justify-center px-6 py-8 text-black'>
                                    <FaUsers className='text-4xl'></FaUsers>
                                    <h3 className='text-3xl font-bold'>Family</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-justify mt-14 p-4'>
                        <p className='text-activeColor text-center text-xl mb-2 font-semibold'>24 hours</p>
                        <p className=''>Cooked and hot homemade food that’s perfect for family gatherings and daily home dinners. Delivered to your doorstep the next day.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DishType;