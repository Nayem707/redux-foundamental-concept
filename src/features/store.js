import { configureStore } from '@reduxjs/toolkit';
// import counterSliceReducer from './features/counter/counterSlice';
// import postsSliceReducer from './features/post/postsSlice';
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    // counter: counterSliceReducer,
    // posts: postsSliceReducer,
    cart: cartReducer,
    //Add another reducer counter here!
  },
});

export default store;
