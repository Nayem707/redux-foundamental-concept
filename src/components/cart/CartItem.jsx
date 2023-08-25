import React from 'react';

const CartItem = (item) => {
  return (
    <div className='row border-top '>
      <div className='row main align-items-center  border-bottom p-2'>
        <div className='col-2'>
          <img
            className='img-fluid object-fit-cover border rounded'
            src={item.image}
            alt='..'
          />
        </div>

        <div className='col d-flex gap-2'>
          <a href='#a' className='decrement bg-dark rounded text-white p-2'>
            -
          </a>
          <p className='counter'>1</p>
          <a href='#a' className='increment bg-dark rounded text-white p-2'>
            +
          </a>
        </div>
        <div className='col d-flex justify-content-between'>
          <a href='remove' className='bg-danger p-1 rounded remove text-white'>
            &#10005;
          </a>
          <span> ${item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
