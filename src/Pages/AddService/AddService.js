import React from 'react';
import useTitle from '../../hooks/useTitle';
import { toast } from 'react-toastify';

const AddService = () => {
    useTitle('Add Service')

    const handleAddService = event =>{
        event.preventDefault()
        const form = event.target;
        const title = form.service_name.value;
        const price = form.price.value;
        const url = form.url.value;
        const description = form.description.value;
        const service = {
            title,
            price,
            url,
            description
        }
        fetch('https://bengali-taste-server.vercel.app/services',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                form.reset()
                toast.success('Service Insert Successfully', {autoClose: 800})
            }
        })
    }
    return (
        <form onSubmit={handleAddService} className='my-10'>
            <div className="max-w-4xl rounded-md shadow-md bg-gray-200 border border-activeColor py-10 px-5 m-auto w-full mt-10">

                <div className="text-3xl font-semibold mb-6 text-center ">
                    ADD SERVICE
                </div>

                <div className="grid grid-cols-2 gap-7 max-w-3xl m-auto">
                    <div className="col-span-2 lg:col-span-1">
                        <input type="text" name='service_name' className="border-solid border-gray-400 border p-3 md:text-xl w-full outline-none rounded-md shadow-md" placeholder="Service Name" required/>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <input type="text" name='price' className="border-solid border-gray-400 border p-3 md:text-xl w-full outline-none rounded-md shadow-md" placeholder="Price" required/>
                    </div>

                    <div className="col-span-2">
                        <input type="text" name='url' className="border-solid border-gray-400 border p-3 md:text-xl w-full outline-none rounded-md shadow-md" placeholder="Image" required/>
                    </div>


                    <div className="col-span-2">
                        <textarea cols="30" name='description' rows="8" className="border-solid border-gray-400 border outline-none p-3 md:text-xl w-full rounded-md shadow-md resize-none" placeholder="Description" required></textarea>
                    </div>

                    <div className="col-span-2 text-right">
                        <button type='submit' className="py-3 rounded-md bg-activeColor px-6 text-white font-bold w-full sm:w-36">
                            Add Service
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddService;