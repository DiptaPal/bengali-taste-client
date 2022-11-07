import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay, Navigation } from "swiper";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import slider2 from '../../assets/image/slider/slider1.jpeg'
import slider1 from '../../assets/image/slider/slider2.jpeg'
import slider3 from '../../assets/image/slider/slider3.jpeg'
import Heros from './Heros';
import './Hero.css'

const heroData = [
    {
        image: slider1,
        id: '01'
    },
    {
        image: slider2,
        id: '02'
    },
    {
        image: slider3,
        id: '03'
    }
]


const Hero = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    return (
        <div className='relative w-full my-10 px-4 -z-50'>
            <button
                ref={prevRef}
                className='absolute p-[18px] bg-normalColor rounded-full -left-5 top-[49%] z-50'
            >
                <span className='text-center text-xl text-white opacity-100'>
                    <AiOutlineArrowLeft />
                </span>
            </button>
            <button
                ref={nextRef}
                className='absolute p-[18px] bg-activeColor rounded-full -right-5 top-[49%] z-50'
            >
                <span className='text-center text-xl text-white'>
                    <AiOutlineArrowRight />
                </span>
            </button>
            <Swiper
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="">

                {
                    heroData.map(slider =>
                            <SwiperSlide key={slider.id} >
                                <Heros slider={slider}>

                                </Heros>
                            </SwiperSlide>
                        )
                }
            </Swiper>
        </div>
    );
};

export default Hero;