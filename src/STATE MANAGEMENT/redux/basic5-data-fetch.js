const { createStore, applyMiddleware } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');
const { default: thunk } = require('redux-thunk');

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
const API_URL = 'https://jsonplaceholder.typicode.com/users';

const initState = {
  todos: [],
  isLoading: false,
  error: null,
};

const getTodosAction = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

const getTodosFailedAction = (error) => {
  return {
    type: GET_TODOS_FAILED,
    paylod: error,
  };
};
const getTodosSuccessAction = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    paylod: todos,
  };
};

const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.paylod,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.paylod,
      };

    default:
      return state;
  }
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosAction());
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) =>
        data.map((d) => {
          return dispatch(getTodosSuccessAction(d.name));
        })
      )
      .catch((err) => {
        dispatch(getTodosFailedAction(err.message));
      });
  };
};

const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
