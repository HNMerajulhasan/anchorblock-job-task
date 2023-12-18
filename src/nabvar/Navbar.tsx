import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { logout } from '../features/authSlice';
import logo from '../assests/webLogo.svg';

const Navbar = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUsersLinkClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
      navigate('/blankDashboard');
    } else {
      navigate('/signIn');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/signIn');
  };

  return (
    <div className='bg-[#6941c6] flex items-center gap-14 py-5 px-14'>
      <div className='flex items-center gap-5'>
        <img src={logo} alt='logo' />
        <h3 className='text-[#fff] text-2xl font-bold'>Stack</h3>
      </div>
      <div className='flex text-[#fff] gap-4'>
        <Link className='text-[#fff]' to='/'>
          Home
        </Link>
        <Link className='text-[#fff]' to='/signIn'>
          SignIn
        </Link>
        <Link className='text-[#fff]' to='/signUp'>
          SignUp
        </Link>
        {isAuthenticated ? (
          <>
            <NavLink to='' className='text-[#fff]' onClick={handleLogout}>
              Logout
            </NavLink>
           
            <NavLink to='/dashboard' className='text-[#fff]' onClick={handleUsersLinkClick}>
              Users
            </NavLink>
       
            <NavLink to='/blankDashboard' className='text-[#fff]' onClick={handleUsersLinkClick}>
              Blank_Dashboard
            </NavLink>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
