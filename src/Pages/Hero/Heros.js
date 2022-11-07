import React from 'react';

const Heros = ({ slider }) => {
    return (
        <div className=" relative rounded-2xl">
            <div className="img-gradient">
                <img
                    src={slider.image}
                    className="absolute object-cover object-center w-full h-full rounded-2xl"
                    alt=""
                />
            </div>
            <div className='relative py-16 px-10 sm:p-16 xl:p-32'>
                <div className='flex flex-col gap-4 sm:gap-6'>
                    <h1 className='text-2xl sm:text-5xl text-white font-bold text-center sm:text-left'>
                    Get Delicious, Healthy <br /> <span className='text-activeColor'>Homemade</span> Food
                    </h1>
                    <h2 className='text-white text-sm sm:text-xl w-2/3 mx-auto sm:mx-0 text-center sm:text-left'>Bengoli Taste is an online platform connecting talented home based cooks with hungry professionals to give them access to wholesome fresh homemade food, from the homechef’s kitchen.</h2>
                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                        <button className="text-base shadow-lg sm:text-xl py-3 px-6 bg-activeColor rounded-md text-white">Start Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heros;