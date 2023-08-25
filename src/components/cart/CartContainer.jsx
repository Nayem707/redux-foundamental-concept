import React from 'react';

const CartContainer = () => {
  return (
    <>
      <div className='card p-5'>
        <div className='row'>
          <div className='col-md-8 cart'>
            <div className='row border-top'>
              <div className='row main align-items-center border-bottom'>
                <div className='col-2'>
                  <img
                    className='img-fluid'
                    src='https://img.freepik.com/premium-photo/close-up-black-t-shirt-isolated_57262-41.jpg'
                    alt='..'
                  />
                </div>
                <div className='col'>
                  <div className='row text-muted'>Shirt</div>
                  <div className='row'>Cotton T-shirt</div>
                </div>
                <div className='col d-flex gap-2'>
                  <a href='#a'>-</a>
                  <a href='#a' className=''>
                    1
                  </a>
                  <a href='#a'>+</a>
                </div>
                <div className='col'>
                  &euro; 44.00{' '}
                  <a href='#a' className=' remove '>
                    &#10005;
                  </a>
                </div>
              </div>
            </div>
            <div className='gap-3 m-5'>
              <div className='back-to-shop mb-2'>
                <a href='#a'>Total $50</a>
              </div>
              <div className='back-to-shop'>
                <button className='btn'>chekout</button>
              </div>
            </div>
            <div className='back-to-shop'>
              <a href='#a'>Back to shop</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
