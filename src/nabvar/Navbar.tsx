import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { logout } from '../features/authSlice';
import logo from '../assests/webLogo.svg';
import { FaBars } from "react-icons/fa";

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
 
<div>
<nav id="navbar_container">
      <div className="navbar_large_device items-center px-14 gap-10">
        <div className='flex items-center pt-2 gap-5'>
          <img src={logo} alt='logo' />
          <h3 className='text-[#fff] text-2xl font-bold'>Stack</h3>
       </div>
        <ul>
        <Link to="/" ><li>Home</li></Link>
        <Link to="/signIn" ><li>SignIn</li></Link>
        <Link to="/signUp"> <li>SignUp</li></Link> 
           {isAuthenticated ? (
           <>
            <NavLink to='' className='text-[#fff] ' onClick={handleLogout}><li> 
               Logout
             </li></NavLink>
           
             <NavLink to='/users' className='text-[#fff]' onClick={handleUsersLinkClick}><li> 
               Users
             </li></NavLink>
       
             <NavLink to='/dashboard' className='text-[#fff]' onClick={handleUsersLinkClick}><li> 
                Dashboard
             </li></NavLink>
           </>
         ) : null}
           
        </ul>
      </div>
      

      <input type="checkbox" id="active"/>
      <label htmlFor="active" className="menu-btn "><FaBars  /></label>
      <div className="navbar_small_device">
      <ul>
      <Link to="/"  className="current_menu"><li>Home</li></Link>
      <Link to="/signIn"> <li>SignIn</li></Link>
      <Link to="/signUp"> <li>SignUp</li></Link> 
           {isAuthenticated ? (
           <>
             <NavLink to='' className='text-[#fff] ' onClick={handleLogout}><li>
               Logout
            </li> </NavLink>
           
            <NavLink to='/users' className='text-[#fff]' onClick={handleUsersLinkClick}><li>
               Users
            </li> </NavLink>
       
            <NavLink to='/dashboard' className='text-[#fff]' onClick={handleUsersLinkClick}> <li> 
                Dashboard
            </li> </NavLink>
           </>
         ) : null}
           
        </ul>
      </div>
</nav>
</div>
    
  );
};

export default Navbar;
