//State define ->
//1- init State ->
//2- constant ->
//3- action create ->
//4- reducer ->
//5- store ->
//6- dispatch

const { createStore } = require('@reduxjs/toolkit');

//****************************/

//STEP: 1 intiSTATE
const initState = {
  count: 0,
};
//Done!

//***********Constant.js*****************/

//STEP: 2 Constant define
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
// export { INCREMENT, DECREMENT, RESET}
//Done!

//*************action.js***************/

//STEP: 3 -> action create
// import { INCREMENT, DECREMENT, RESET} from './constant-folder';

const counterIncrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const counterDecrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const counterResetAction = () => {
  return {
    type: RESET,
  };
};
// export { counterIncrementAction, counterDecrementAction, counterResetAction };
//Done!

//***********reducer.js*****************/

//STEP: 4 -> reducer create
const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };

    default:
      return state;
  }
};
// export {counterReducer}
//Done!

//***********store.js*****************/

//STEP: 5 -> store
// import {counterReducer} from './reducer.js';

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState);
});

//****************************/

//STEP: 6
// import { counterIncrementAction, counterDecrementAction, counterResetAction} from './action-folder.js';

store.dispatch(counterIncrementAction());
store.dispatch(counterDecrementAction());
store.dispatch(counterResetAction());
