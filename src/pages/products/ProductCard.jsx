import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';

const ProductCard = ({ title, price, image, id }) => {
  const dispatch = useDispatch();

  const addtoCart = (id) => {
    //some code here!
    dispatch(addToCart(id));
    console.log(id);
  };

  return (
    <div className='col'>
      <div className='card h-100 p-2'>
        <img src={image} className='card-img-top' alt='...' />

        <div className='card-body p-2'>
          <h5 className='fw-bolder'>${price}</h5>
          <p className='card-text fst-normal'>{title}</p>
        </div>
        <div className='card-footer'>
          <div className='d-grid'>
            <button
              className='btn btn-warning'
              type='button'
              onClick={() => addtoCart(id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
