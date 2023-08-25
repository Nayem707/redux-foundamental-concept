import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartContainer = () => {
  const { cartItems, amount, total, isLoading } = useSelector(
    (store) => store.cart
  );
  if (amount < 0) {
    return (
      <section className='text-center p-5'>
        <header>
          <h2>Your bag</h2>
          <h6>Currently emty!</h6>
        </header>
      </section>
    );
  }
  if (isLoading) {
    return <h2 className='text-center p-5'>Loading...</h2>;
  }
  return (
    <>
      <div className='card container w-50'>
        <div className='row'>
          <header>
            <h3>Your bag</h3>
          </header>
          <div className='col cart'>
            {cartItems &&
              cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            <footer>
              <div className='d-flex justify-content-between pt-2'>
                <div className='back-to-shop'>
                  <button className='btn'>chekout</button>
                </div>
                <div className='back-to-shop mb-2'>
                  <a href='#a'>Total ${total}</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div className='back-to-shop pt-5'>
          <a href='#a'>Back to shop</a>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
