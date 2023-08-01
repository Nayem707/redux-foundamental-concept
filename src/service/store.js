import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import BooksReducer from './reducer/bookReducer';
import thunkMiddleware from 'redux-thunk';

// import CounterReducer from './service/reducer/counterReducer';
// const rootReducer = combineReducers({
//   counterReduce: CounterReducer,
//   bookReduce: BooksReducer,
// });

const store = createStore(BooksReducer, applyMiddleware(thunkMiddleware));

export default store;
