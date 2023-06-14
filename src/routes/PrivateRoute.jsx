import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center items-center'>
            <div>
                <CircularProgress color="success" />
            </div>
        </div>
    }


    if (user) {
        return children
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};
export default PrivateRoute;