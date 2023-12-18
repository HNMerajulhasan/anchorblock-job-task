import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Main from './Layout/Main';
import { Home } from './pages/Home/Home';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';


const App = () => {
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
          path: '/users',
          element: (
            <PrivateRoute>
              <Users></Users>
            </PrivateRoute>
          ),
        },
        {
          path: '/dashboard',
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
        }
      ]
    }

  ]);

  return <RouterProvider router={router} />;
};

export default App;
