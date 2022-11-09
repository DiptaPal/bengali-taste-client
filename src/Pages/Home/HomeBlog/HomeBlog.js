import React from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";



const HomeBlog = () => {
    return (
        <div className='mb-32 mt-24'>
            <h2 className='text-4xl uppercase font-bold text-center mb-10 underline text-activeColor'>My Blog</h2>

            <div className=''>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="max-w-lg mx-auto p-4 rounded-lg shadow-md bg-white text-gray-800">
                            <div className="space-y-4">
                                <div className="space-y-4">
                                    <img src="https://miro.medium.com/max/1012/1*Z5SpsmDvk67BIImwHvh_cQ.png" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                                </div>
                                <div className="space-y-2">
                                    <Link className="block">
                                        <h3 className="text-xl font-semibold text-blue-600">Difference between SQL and NoSQL</h3>
                                    </Link>
                                    <p className="leading-snug text-gray-600 text-justify">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                                </div>
                                <Link to={`/sqlvsnsql`}>
                                    <button className='w-full mt-4 py-3 font-medium bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl drop-shadow-md'>Read More</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="max-w-lg mx-auto p-4 rounded-lg shadow-md bg-white text-gray-800">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <img src="https://miro.medium.com/max/800/1*ulCspc56K_swYE1uuel_TA.png" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                                </div>
                                <div className="space-y-2">
                                    <Link className="block">
                                        <h3 className="text-xl font-semibold text-indigo-900">What is JWT, and how does it work?</h3>
                                    </Link>
                                    <p className="leading-snug text-gray-600 text-justify">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                                </div>
                                <Link to={`/jwt`}>
                                    <button className='w-full mt-4 py-3 font-medium bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl drop-shadow-md'>Read More</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="max-w-lg mx-auto p-4 rounded-lg shadow-md bg-white text-gray-800">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <img src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-1-1-1.jpg" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                                </div>
                                <div className="space-y-2">
                                    <Link className="block">
                                        <h3 className="text-xl font-semibold text-green-700">Difference between javascript and NodeJS?</h3>
                                    </Link>
                                    <p className="leading-snug text-gray-600 text-justify">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                                </div>
                                <Link to={`/jsVsNode`}>
                                    <button className='w-full mt-4 py-3 font-medium bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl drop-shadow-md'>Read More</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <Link to='/blog' className='flex flex-row justify-center lg:justify-end mt-10'>
                <button className='flex items-center gap-4 px-12 py-3 font-medium bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl'>
                    View All
                    <BsFillArrowRightSquareFill></BsFillArrowRightSquareFill>
                </button>
            </Link>
        </div>
    );
};

export default HomeBlog;