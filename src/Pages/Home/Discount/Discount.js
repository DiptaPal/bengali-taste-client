import React from 'react';
import discountLogo from '../../../assets/image/discount.jpeg'
import corner from '../../../assets/image/discount3.png'
const Discount = () => {
    return (
        <div className='my-10'>
            <div className='relative'>
                <img src={discountLogo} className='clip1 w-full object-cover object-center rounded-lg' alt="" />
                <div className='absolute top-[25%] md:top-[30%] flex-wrap sm:left-1/2 hidden sm:block text-white flex flex-col gap-4 z-50'>
                    <p className=' text-base sm:xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold'>Get</p>
                    <p className='text-xl sm:2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold py-4'>UpTo</p>
                    <h1 className='text-xl sm:2xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8px font-extrabold'><span className='text-activeColor'>40%</span> Discount</h1>
                </div>
                <p className='absolute text-white font-bold p-10 top-[5%] right-[5%] block sm:hidden z-50'>Get UpTo 40% Discount</p>
                <img src={corner} alt="" className='absolute bottom-0 right-0 z-0 object-cover object-center overflow-hidden h-[100px] lg:h-[200px] rounded-br-lg' />
               

            </div>
        </div>
    );
};

export default Discount;