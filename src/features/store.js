import { configureStore } from '@reduxjs/toolkit';
// import counterSliceReducer from './features/counter/counterSlice';
// import postsSliceReducer from './features/post/postsSlice';
import cartReducer from './cart/cartSlice';
import ProductRdeucer from './cart/ProductSlice';
import TodoRdeucer from './users/userSlice';

const store = configureStore({
  reducer: {
    // counter: counterSliceReducer,
    // posts: postsSliceReducer,
    cart: cartReducer,
    products: ProductRdeucer,
    todo: TodoRdeucer,
    //Add another reducer counter here!
  },
});

export default store;
