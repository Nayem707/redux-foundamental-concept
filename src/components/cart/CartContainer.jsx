import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  if (amount < 0) {
    return (
      <section className='p-5'>
        <header>
          <h2>Your bag</h2>
          <h6>Currently emty!</h6>
        </header>
      </section>
    );
  }

  return (
    <>
      <div className='card p-5'>
        <div className='row'>
          <header>
            <h3>Your bag</h3>
          </header>
          <div className='col-md-8 cart'>
            {cartItems &&
              cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
          </div>

          <footer>
            <div className='gap-3 m-5'>
              <div className='back-to-shop mb-2'>
                <a href='#a'>Total ${total}</a>
              </div>
              <div className='back-to-shop'>
                <button className='btn'>chekout</button>
              </div>
            </div>
          </footer>
        </div>
        <div className='back-to-shop'>
          <a href='#a'>Back to shop</a>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
