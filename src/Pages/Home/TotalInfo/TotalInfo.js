import React from 'react';

const TotalInfo = () => {
    return (
        <div className="">
            <div className="grid grid-cols-2 gap-8  md:grid-cols-4 mt-24">
                <div className="text-center md:border-r border-activeColor">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">10.2K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Regular Customer
                    </p>
                </div>
                <div className="text-center md:border-r border-activeColor">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">14.6K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Visitor
                    </p>
                </div>
                
                <div className="text-center md:border-r border-activeColor">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">4.8</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Total Rating
                    </p>
                </div>
                <div className="text-center">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">9.3K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Reviews
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TotalInfo;