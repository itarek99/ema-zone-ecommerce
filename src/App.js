import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/routes/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import Main from './layouts/Main';
import productsAndCartLoader from './loaders/productsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: productsAndCartLoader,
          element: <Shop></Shop>,
        },
        { path: 'orders', loader: productsAndCartLoader, element: <Orders></Orders> },
        { path: 'inventory', element: <h1>Inventory</h1> },
        { path: 'about', element: <h1>About</h1> },
        { path: 'login', element: <Login></Login> },
        { path: 'signup', element: <SignUp></SignUp> },
        {
          path: 'shipping',
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
