import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { fetchUsersPage1, fetchUsersPage2 } from '../features/authSlice';

const Users: React.FC = () => {
  const { email, name } = useSelector((state: RootState) => state.auth.user);
  const users = useSelector((state: RootState) => state.auth.users);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(fetchUsersPage1());
    } else {
      dispatch(fetchUsersPage2());
    }
  }, [email, currentPage, dispatch]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h2 className='text-center py-4 lg:text-3xl text-xl font-bold  mt-2 text-emerald-600'>Reqres All User List (Page=1 & Page= 2)</h2>
      <div>
        <p className='font-bold my-3 lg:text-xl text-lg text-green-700'>SignIn Email : <span className='text-lime-600'> {email}</span></p>
      </div>
      <div>
        <h3 className='my-2 text-lg font-bold'>Users List:</h3>
        {users.length > 0 ? (
          <div className=''>
            <div className='flex gap-48 px-4 bg-[#D0D5DD] py-3'>
              <span className='flex w-5 h-5 gap-2 items-center'>
                <input
                   type='checkbox'
                   className='w-8 h-8'
                 />
                <th className=''>Name</th>
              </span>
              <th>Email</th>
              <th>About</th>
              <th>Status</th>
              <th>Edit</th>   
              <th>Delete</th>
            </div>  
         
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                 <div className='grid grid-cols-6 gap-[125px] items-center border border-[#EAECF0] p-3'>
                  <div>            
                  <div className='flex gap-2 items-center  my-3'>
                    <input
                     type='checkbox'
                     className='w-4 h-4'
                    />
                    <img src={user.avatar} className='w-14 h-14 rounded-full' alt={`Avatar of ${user.first_name}`} />
                    <p>{user.first_name} {user.last_name}</p>
                  </div>
                  </div>
                  <div className=''>
                    <p>{user.email}</p>
                  </div>
                  <div>
                     <p>ReactJS Dev</p>
                  </div>
                  <div>
                     <p>Active</p>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/show/20772/edit.svg' className='w-8 h-8' alt=''/>
                  </div>
                  <div>
                    <img src='https://www.svgrepo.com/download/21045/delete-button.svg' className='w-8 h-8' alt=''/>
                  </div>
                </div> 
                </li>
              ))}
            </ul>
           
           
            <div className='flex items-center justify-between mb-10 my-2'>
              <button className='border border-slate-300' onClick={handlePrevPage} disabled={currentPage === 1}>
                Previous
              </button>
              <span className='bg-slate-200 px-5 rounded-lg py-2'>Page {currentPage}</span>
              <button className='border border-slate-300' onClick={handleNextPage} disabled={currentPage === 2}>
                Next
              </button>
            </div>
          </div>
        ) : (
          <p>No users available</p>
        )}
      </div>
    </div>
  );
};

export default Users;
