import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
// import Users from './pages/Users';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Main from './Layout/Main';
import { Home } from './pages/Home/Home';
import BlankDashboard from './pages/BlankDashboard';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path: '/signIn',
          element: <SignIn />,
        },
        {
          path: '/signUp',
          element: <SignUp />,
        },
        {
          path: '/dashboard',
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
        },
        {
          path: '/blankDashboard',
          element: (
            <PrivateRoute>
              <BlankDashboard />
            </PrivateRoute>
          ),
        }
      ]
    }

  ]);

  return <RouterProvider router={router} />;
};

export default App;
