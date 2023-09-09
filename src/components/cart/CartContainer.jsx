import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../features/cart/cartSlice';

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className='text-center p-5'>
        <header>
          <h2>Your cart</h2>
          <h6>Currently emty!</h6>
        </header>
      </section>
    );
  }

  return (
    <>
      <div className='card container w-50 my-5'>
        <div className='row'>
          <header>
            <h3>Your bag</h3>
          </header>
          <div className='col cart'>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
            <footer>
              <div className='d-flex justify-content-between py-2'>
                <div className='back-to-shop'>
                  <button className='btn btn-outline-success'>Chekout</button>
                </div>
                <div className='back-to-shop'>
                  <button
                    onClick={() => dispatch(clearCart())}
                    type='button'
                    className='btn btn-outline-danger'
                  >
                    Clear Cart
                  </button>
                </div>
                <div className='back-to-shop mb-2'>
                  <p>Total ${total.toFixed(2)}</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
