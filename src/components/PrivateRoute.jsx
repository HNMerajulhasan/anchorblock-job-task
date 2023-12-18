import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/signIn');
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
