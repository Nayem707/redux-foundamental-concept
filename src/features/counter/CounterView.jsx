import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './counterSlice';

const CounterView = () => {
  const counter = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Conter: {counter}</h1>

      <button
        className='btn'
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrease --
      </button>
      <button
        className='btn'
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        className='btn'
        onClick={() => {
          dispatch(increment());
        }}
      >
        increase ++
      </button>
    </div>
  );
};

export default CounterView;
