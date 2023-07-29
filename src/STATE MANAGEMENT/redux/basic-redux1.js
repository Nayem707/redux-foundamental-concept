// State Define -> init State -> Constant Create -> Action Create -> Reducer -> Store -> Dispatch

//INCREMENT
//DECREMENT
//RESET

const { createStore } = require('redux');

// STEPT: 1
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

//STEP: 2 -> INIT STATE
const initState = {
  counter: 0,
};

//STEP: 3 -> ACTION
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};

//STEP: 4 -> REDUCER
const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case RESET:
      return {
        ...state,
        counter: 0,
      };

    default:
      return state;
  }
};

//STEP: 5 -> STORE
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

//STEP: 6 -> DISPATCH
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
