import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './features/store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/HomeView';
import CartContainer from './components/cart/CartContainer';
import Products from './pages/products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/cart',
        element: <CartContainer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

//STATE MANAGEMENT
// import { AppProvider } from './STATE MANAGEMENT/context/mealsContext';
//   <AppProvider>
//     <App />
//   </AppProvider>
