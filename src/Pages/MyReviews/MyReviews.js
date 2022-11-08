import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReview from '../MyReview/MyReview';
import Swal from 'sweetalert2'


const MyReviews = () => {

    const [review, setReview] = useState([])
    const { user, logout } = useContext(AuthContext)
    useTitle('MyReviews')

    useEffect(() => {
        fetch(`https://bengali-taste-server.vercel.app/myReviews?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('bengali-taste')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    logout()
                }
               return res.json()
            })
            .then(data => {setReview(data)})
    }, [user?.email, logout])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this review!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your Review has been deleted.',
                        'success'
                    )
                    fetch(`https://bengali-taste-server.vercel.app/reviews/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remaining = review.filter(rev => rev._id !== id)
                                setReview(remaining)
                            }
                        })
                }
            })
    }


    return (
        <div>
            <>
                {
                    review.length === 0 ?
                        <div className='h-[80vh] flex justify-center items-center'>
                            <h2 className='text-3xl text-center text-activeColor font-bold mb-3'>No reviews were added</h2>
                        </div>
                        :
                        <div className='my-10 border-b-2 border-activeColor w-[85%] md:w-[70%] mx-auto'>
                            <h2 className='text-3xl text-center text-activeColor font-bold mb-3'>Your All Valuable Review is Here({review.length})</h2>
                        </div>
                }
            </>
            <div>
                {
                    review.map(myReview => <MyReview
                        key={myReview._id}
                        myReview={myReview}
                        handleDelete={handleDelete}
                    ></MyReview>)
                }
            </div>
        </div >
    );
};

export default MyReviews;