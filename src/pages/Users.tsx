// import React from 'react';
// import { useUsersQuery } from '../services/api';

// const Users: React.FC = () => {
//   const { data: users, error } = useUsersQuery();

//   if (error) {
//     return <div>Error loading users</div>;
//   }

//   return (
//     <div>
//       <h2>User List</h2>
//       {users && (
//         <ul>
//           {users.data.map((user) => (
//             <li key={user.id}>{user.email}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Users;
