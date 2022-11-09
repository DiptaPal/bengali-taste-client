import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {
    const { title, price, url, description, _id } = service;
    console.log(description.length);
    return (
        <div>
            <PhotoProvider>
                <div className="drop-shadow-md hover:scale-105 transition-all duration-200 p-6 rounded-md card card-compact bg-white shadow-md min-h-full">
                    <figure>
                        <PhotoView src={url}
                        >
                            <img src={url} className='w-full h-[210px] object-cover rounded-lg' alt="Shoes" />
                        </PhotoView>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold uppercase my-2">{title}</h2>
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
                                <button className='w-full mt-4 py-3 font-medium bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl'>View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </PhotoProvider>
        </div>
    );
};

export default Service;