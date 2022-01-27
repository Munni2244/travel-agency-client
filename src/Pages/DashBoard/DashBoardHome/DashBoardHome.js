import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashBoardHome = () => {
    const {user}=useAuth();
    return (
        <div className='text-center'>
            <h1 className=' text-dark'>Welcome To Travel Agency {user?.displayName}</h1>
        </div>
    );
};

export default DashBoardHome;