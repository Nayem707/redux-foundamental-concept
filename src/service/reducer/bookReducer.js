import {
  GET_BOOKS_FAILED,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from '../constant/reduxConstant';

const bookInitState = {
  books: [],
  isLoading: false,
  error: null,
};

const BooksReducer = (state = bookInitState, action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        books: action.paylod,
        error: null,
      };
    case GET_BOOKS_FAILED:
      return {
        ...state,
        isLoading: false,
        books: [],
        error: action.paylod,
      };

    default:
      return state;
  }
};

export default BooksReducer;
