import React from 'react';
import CountUp from 'react-countup';

const TotalInfo = () => {
    return (
        <div className="">
            <div className="grid grid-cols-2 gap-8  md:grid-cols-4 mt-24">
                <div className="text-center md:border-r border-activeColor">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp end={10} delay={0}></CountUp>.3 K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Regular Customer
                    </p>
                </div>
                <div className="text-center md:border-r border-activeColor">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp end={16} delay={0}></CountUp>.5 K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Visitor
                    </p>
                </div>
                
                <div className="text-center md:border-r border-activeColor">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp end={4} delay={0}></CountUp>.9</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Total Rating
                    </p>
                </div>
                <div className="text-center">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl"><CountUp end={9} delay={0}></CountUp>.8 K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Reviews
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TotalInfo;