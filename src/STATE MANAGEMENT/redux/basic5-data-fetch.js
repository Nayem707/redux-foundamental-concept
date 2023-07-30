const GET_DATA_REQUIEST = 'GET_REQUIEST';
const GET_DATE_LOADING = 'GET_DATE_LOADING';
const GET_DATA_ERRORR = 'GET_DATA_ERRORR';

const initState = {
  todos: [],
  isLoading: false,
  getError: [],
};

const getRequiestAction = (todo) => {
  return {
    type: GET_DATA_REQUIEST,
    paylod: todo,
  };
};
const dataLoadinAction = () => {
  return {
    type: GET_DATE_LOADING,
  };
};
const getErorrAction = (error) => {
  return {
    type: GET_DATA_ERRORR,
    paylod: error,
  };
};

const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DATE_LOADING:
      return {
        
      };
    default:
      return state;
  }
};
