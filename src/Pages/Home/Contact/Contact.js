import React from 'react';
import Map from './Map';
import { ImLocation2 } from "react-icons/im";
import { BsClockHistory } from 'react-icons/bs';

const Contact = () => {
    return (
        <div className='flex justify-center p-10 gap-10 lg:gap-40 bg-gray-200 rounded-xl flex-col lg:flex-row py-10'>
            <div className=''>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-6'>
                        <div>
                            <span className='text-xl text-center sm:text-left block sm:inline px-2 bg-activeColor py-1 text-white font-bold'>Call Us</span>
                            <h1 className='text-2xl sm:text-4xl mt-2 font-extrabold'>+1-202-555-016</h1>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center gap-4'>
                            <ImLocation2 className='text-activeColor text-6xl'></ImLocation2>
                            <div className='text-bold text-center sm:text-start'>
                                <p>mon-thu: 11.00 – 23.00</p>
                                <p>sun: 12.00 – 21.00</p>
                                <p>sat: 12.00 – 23.00</p>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center gap-4'>
                            <BsClockHistory className='text-activeColor text-6xl'></BsClockHistory>
                            <div className='text-bold text-center sm:text-start'>
                                <p>60 East 65th Street</p>
                                <p>Dhaka</p>
                                <p>DHA 1240</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <Map></Map>
            </div>
        </div>
    );
};

export default Contact;