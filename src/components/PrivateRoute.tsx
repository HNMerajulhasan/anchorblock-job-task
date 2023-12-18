import React from 'react';
import { RouteProps, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

interface PrivateRouteProps extends RouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    navigate('/signin');
    return null;
  }

  // Render the protected route
  return <>{children}</>;
};

export default PrivateRoute;
