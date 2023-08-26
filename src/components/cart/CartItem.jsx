import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../../features/cart/cartSlice';

const CartItem = ({ id, img, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className='row border-top '>
      <div className='row main align-items-center  border-bottom p-2'>
        <div className='col-2'>
          <img
            className='img-fluid object-fit-cover border rounded'
            src={img}
            alt='..'
          />
        </div>

        <div className='col d-flex gap-2'>
          <button
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease({ id }));
            }}
            className='btn decrement bg-dark rounded text-white p-2'
          >
            -
          </button>
          <p className='counter'>{amount}</p>
          <button
            onClick={() => {
              dispatch(increase({ id }));
            }}
            className='btn increment bg-dark rounded text-white p-2'
          >
            +
          </button>
        </div>
        <div className='col d-flex justify-content-between'>
          <button
            onClick={() => {
              dispatch(removeItem(id));
            }}
            type='button'
            className='btn bg-danger p-1 rounded remove text-white'
          >
            &#10005;
          </button>
          <span> ${price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
