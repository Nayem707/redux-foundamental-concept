const { createStore } = require('@reduxjs/toolkit');

//STEP: 1 -> State define
const initState = {
  users: ['nayem'],
  count: 0,
};

//STEP: 2 -> Constant define
const ADD_USER = 'ADD_USER';

//STEP: 3 -> action create
const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

//STEP: 4 -> reducer
const userRducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        count: state.count + 1, //step->1
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

//STEP: 5 -> store
const store = createStore(userRducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUserAction('nayem'));
store.dispatch(addUserAction('karim'));
