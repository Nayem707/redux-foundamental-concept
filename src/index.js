import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './STATE MANAGEMENT/context/mealsContext';

// import { Provider } from 'react-redux';
// import store from './store';
// <Provider store={store}>
//   <App />
// </Provider>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
