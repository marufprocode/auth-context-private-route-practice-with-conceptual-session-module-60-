import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContexts } from '../context/AuthContext';
import { RotatingLines } from  'react-loader-spinner'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContexts);
    const location = useLocation();
    if(loading) return <div className='flex justify-center min-h-screen items-center'>
        <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        />
    </div>
    if (user && user.uid) return children;
    return <Navigate to='/login' state={{ from: location }} replace/>
};

export default PrivateRoute;