import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from 'react-redux';
import store from './features/store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/HomeView';
import CartContainer from './components/cart/CartContainer';
import Products from './pages/products';
import Filter from './components/filter/index';
import SeachView from './components/Search/index';
import DetailsView from './pages/details';
import Register from './pages/form/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Register />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <DetailsView />,
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
