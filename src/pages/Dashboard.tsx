 import React from 'react';
import dashboard_img from '../assests/dashboard_img.jpg'

 const Dashboard: React.FC = () => {
  
   return (
      <div>
         <h2 className='text-4xl text-center font-bold'>Dashboard...</h2>
         <img src={dashboard_img} className='w-10/12 flex my-3 items-center justify-center mx-auto' alt=''/>
      </div>
   );
 };

 export default Dashboard;
