import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
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
