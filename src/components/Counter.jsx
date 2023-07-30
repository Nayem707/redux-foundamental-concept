import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  counterDecerementAction,
  counterIncerementAction,
  counterResetAction,
} from '../service/action/counterAction';

const Counter = () => {
  const count = useSelector((state) => state.counter); //replace by normal state

  const dispatch = useDispatch(); //replace by "setState"

  const handleIncrement = () => {
    dispatch(counterIncerementAction());
  };

  const handleDecrement = () => {
    dispatch(counterDecerementAction());
  };

  const handelRESET = () => {
    dispatch(counterResetAction());
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleDecrement}>--</button>
      <button onClick={handelRESET}>reset</button>
      <button onClick={handleIncrement}>++</button>
    </div>
  );
};

export default Counter;
