import { DECREMENT, INCREMENT, RESET } from '../constant/reduxConstant';

export const counterIncerementAction = () => {
  return {
    type: INCREMENT,
  };
};
export const counterDecerementAction = () => {
  return {
    type: DECREMENT,
  };
};
export const counterResetAction = () => {
  return {
    type: RESET,
  };
};
