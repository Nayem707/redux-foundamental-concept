import { DECREMENT, INCREMENT, RESET } from '../constant/reduxConstant';

const initialState = {
  counter: 10,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case RESET:
      return {
        ...state,
        counter: 0,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

export default CounterReducer;
