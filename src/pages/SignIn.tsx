import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, setAuthData } from '../features/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import LRlogo from '../assests/loginRegisLogo.svg';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const result = await (dispatch as ThunkDispatch<unknown, unknown, AnyAction>)(register({ email, password }));
      if (register.fulfilled.match(result)) {
        const { email, name, token } = result.payload;
        dispatch(setAuthData({ email, name, token }));
        console.log(email, token);
  
        navigate('/users');
      }
    } catch (error) {
      console.error(error);
      setError('Invalid email. Please try again.');
    }
  };

  return (
    <div>
      <h2 className='text-center mt-10 text-3xl font-bold'>Please Sign In Here!</h2>
      <div className='flex justify-center'>
        <div className='form_style my-10 p-14'>
          <form onSubmit={handleSubmit} className='w-full'>
            <div className='flex items-center gap-4'>
              <img src={LRlogo} alt='logo' />
              <h2 className='text-3xl text-[#4E5D78] font-bold'>Stack</h2>
            </div>
            <h2 className='text-xl text-[#000] font-semibold mt-4'>Sign In to continue with Stack</h2>

            <div className='mt-10'>
              <div>
                <label className=' text-[16px] text-[#000] font-semibold' htmlFor='email'>
                  Email
                </label>
              </div>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='inputField_style w-full mt-2'
                required
              />
            </div>
            {error && <p className='text-red-500'>{error}</p>}

            <div className='mt-5'>
              <div>
                <label className=' text-[16px] text-[#000] font-semibold' htmlFor='password'>
                  Password
                </label>
              </div>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='inputField_style w-full mt-2'
                required
              />
            </div>

            <div className='grid grid-cols-6 gap-2 mt-5'>
              <div className=' border-2 border-[#F04438] rounded-lg'></div>
              <div className=' border-2 border-[#F04438] rounded-lg'></div>
              <div className=' border-2 border-[#F3F3F3] rounded-lg'></div>
              <div className=' border-2 border-[#F3F3F3] rounded-lg'></div>
              <div className=' border-2 border-[#F3F3F3] rounded-lg'></div>
              <div className=' border-2 border-[#F3F3F3] rounded-lg'></div>
            </div>

            <div className=''>
              <button className='mt-10 bg-[#6941C6] w-full text-[#FFFFFF] font-bold' type='submit'>
                Sign In
              </button>
            </div>

            <p className='text-[#B0B7C3] mt-5'>
              Don’t have an account? <Link to='/signUp' className='text-[#377DFF]'>
                {' '}
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
