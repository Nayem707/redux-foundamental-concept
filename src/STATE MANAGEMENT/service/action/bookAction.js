import axios from 'axios';
import {
  API_URL,
  GET_BOOKS_FAILED,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from '../constant/reduxConstant.js';

export const getBooksAction = () => async (dispatch) => {
  dispatch({ type: GET_BOOKS_REQUEST });
  try {
    const res = await axios.get(API_URL);
    console.log(res);
    dispatch({ type: GET_BOOKS_SUCCESS, paylod: res.data });
  } catch (err) {
    dispatch({ type: GET_BOOKS_FAILED, paylod: err.message });
  }
};

// export const getBooksFailedAction = (error) => {
//   return {
//     type: GET_BOOKS_FAILED,
//     paylod: error,
//   };
// };

// export const getBookssSuccessAction = (book) => {
//   return {
//     type: GET_BOOKS_SUCCESS,
//     paylod: book,
//   };
// };
