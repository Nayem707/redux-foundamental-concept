// init state -> const define -> action create -> reducer - store -> dispatch

const { createStore, combineReducers } = require('@reduxjs/toolkit');

//*************************/

//STEP:1 -> init multiple state

//USERS
const usersInitStae = {
  count: 1,
  users: ['nayem'],
};
//CART_ITEM
const cartInitState = {
  count: 0,
  cartItem: [],
};

//*************************/

//STEP:2 -> constant define

//USERS
const ADD_USER = 'ADD_USER';
//CART_ITEM
const CART_ITEM = 'CART_ITEM';

//STEP:3 -> action create

//USERS
const actionAddUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
//CART_ITEM
const actionCartItem = (cart) => {
  return {
    type: CART_ITEM,
    payload: cart,
  };
};

//*************************/

//STEP:4 -> reducer

//USERS
const userReducer = (state = usersInitStae, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};
//CART-ITEM
const cartReducer = (state = cartInitState, action) => {
  switch (action.type) {
    case CART_ITEM:
      return {
        cartItem: [...state.cartItem, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};
//*************************/

//STEP:5 -> store

const rootReducer = combineReducers({
  usersReduce: userReducer,
  cartReduce: cartReducer,
});
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

//*************************/

//STEP:6 -> dispatch
store.dispatch(actionAddUser('bulbul'));
store.dispatch(actionCartItem(5));
store.dispatch(actionCartItem(10));
