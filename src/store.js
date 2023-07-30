import { createStore } from '@reduxjs/toolkit';
import counterReducer from './service/reducer/counterReducer';

const store = createStore(counterReducer);

export default store;
