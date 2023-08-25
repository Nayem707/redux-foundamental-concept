import React from 'react';

const CartItem = (item) => {
  return (
    <div className='row border-top'>
      <div className='row main align-items-center border-bottom'>
        <div className='col-2'>
          <img className='img-fluid' src={item.image} alt='..' />
        </div>

        <div className='col d-flex gap-2'>
          <a href='#a' className='decrement'>
            -
          </a>
          <p className=''>1</p>
          <a href='#a' className='increment'>
            +
          </a>
        </div>
        <div className='col'>
          &euro; ${item.price}{' '}
          <a href='#a' className=' remove '>
            &#10005;
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
