import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AiOutlineHeart } from 'react-icons/ai';

const Service = ({ service }) => {
    const { title, price, url, description, _id } = service;
    return (
        <div data-aos="fade-up">
            <PhotoProvider>
                <div className="drop-shadow-md p-6 rounded-md card card-compact bg-white shadow-md min-h-full">
                    <figure>
                        <PhotoView src={url}
                        >
                            <img src={url} className='w-full h-[210px] object-cover rounded-lg' alt="Shoes" />
                        </PhotoView>
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center'>
                            <h2 className="card-title text-3xl font-bold uppercase my-2">{title}</h2>
                            <div className='bg-activeColor p-1 rounded-md'>
                                <AiOutlineHeart className='text-white text-2xl'></AiOutlineHeart>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-2xl text-activeColor font-semibold mb-2'>Price: ${price}</p>
                            <p className='text-justify'>
                                {description.length > 100 ?
                                    `${description.slice(0, 100)} . . .`
                                    :
                                    description
                                }
                            </p>
                            <Link to={`/services/${_id}`}>
                                <button className='w-full mt-4 py-3 font-medium bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl drop-shadow-md'>View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </PhotoProvider>
        </div>
    );
};

export default Service;