import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({ items }) => {
  const { cartItems } = useSelector((store) => store.cart);
  const isInCart = cartItems.find((cartItem) => cartItem.id === items.id);
  const dispatch = useDispatch();

  return (
    <div className='col'>
      <div className='card h-100 p-2'>
        <div className='card-body p-2'>
          <Link to={items.id}>
            <img src={items.img} className='card-img-top img-fluid' alt='...' />
          </Link>
        </div>
        <div className='card-body p-2'>{items.title}</div>

        <div className='card-footer'>
          <div className='d-grid'>
            {isInCart ? (
              <button className='btn btn-secondary disabled'>Item Added</button>
            ) : (
              <button
                className='btn btn-warning'
                type='button'
                onClick={() => dispatch(addToCart(items))}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
