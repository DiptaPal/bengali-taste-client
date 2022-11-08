import React, {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReview from '../MyReview/MyReview';


const handleUpdate = id => {
    // fetch(`http://localhost:5000/myReviews/${id}`, {
    //     method: 'PATCH',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify({ status: 'Canceled' })
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data.modifiedCount > 0) {
    //             const remaining = tasks.filter(cncl => cncl._id !== id)
    //             const canceling = tasks.find(cncl => cncl._id === id)
    //             canceling.status = 'Canceled';

    //             const newTasks = [canceling, ...remaining];
    //             setTasks(newTasks)
    //         }
    //     })
}


const MyReviews = () => {

    const[review, setReview] = useState([])
    const {user, logout} = useContext(AuthContext)
    useTitle('MyReviews')
    useEffect(() =>{
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReview(data))
    },[user?.email])

    const handleDelete = (id) =>{
        const agree = window.confirm(`Are you sure, you want to cancel this order`)
        if(agree){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remaining = review.filter(rev => rev._id !== id)
                    setReview(remaining)
                }
            })
        }
    }


    return (
        <div>
            {
               review.map(myReview => <MyReview
               key={myReview._id}
               myReview={myReview}
               handleUpdate={handleUpdate}
               handleDelete={handleDelete}
               ></MyReview>) 
            }
        </div>
    );
};

export default MyReviews;