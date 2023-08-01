import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './features/counter/counterSlice';
import postsSliceReducer from './features/post/postsSlice';

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    posts: postsSliceReducer,
    //Add another reducer counter here!
  },
});

export default store;
