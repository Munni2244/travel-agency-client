import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
  let location = useLocation();
    const {user, loading} = useAuth();

    if(loading){
      return   <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div> 
      
    };
            if(user?.email){
                return children;
                
            }

            return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
