import { configureStore } from '@reduxjs/toolkit';
// import counterSliceReducer from './features/counter/counterSlice';
// import postsSliceReducer from './features/post/postsSlice';
import cartReducer from '../features/cart/cartSlice';
import ProductRdeucer from './cart/ProductSlice';

const store = configureStore({
  reducer: {
    // counter: counterSliceReducer,
    // posts: postsSliceReducer,
    cart: cartReducer,
    products: ProductRdeucer,
    //Add another reducer counter here!
  },
});

export default store;
