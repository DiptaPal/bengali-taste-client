import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


import { BallTriangle } from  'react-loader-spinner'
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <div className='flex justify-center items-center'>
            <BallTriangle
                height={400}
                width={200}
                radius={5}
                color="#fb9300"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            /></div>
    }
    if (user && user.uid) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoute;