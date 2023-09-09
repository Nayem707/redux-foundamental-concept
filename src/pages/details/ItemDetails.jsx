import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { addToCart } from '../../features/cart/cartSlice';

const ItemDetails = () => {
  const paramsId = useParams();
  const { productsItem } = useSelector((store) => store.products);
  const isInHere = productsItem.filter((item) => item.id === paramsId.id);

  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className='col-md-10'>
      {isInHere.map((i) => {
        return (
          <div className='card' key={i.id}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='images p-3'>
                  <div className='text-center p-4'>
                    <img src={i.img} alt='' className='img-fluid' />
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='product p-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                      <Link to='/products'>
                        ← <span className='ml-1'>Back</span>
                      </Link>
                    </div>
                    <i className='fa fa-shopping-cart text-muted'></i>
                  </div>
                  <div className='mt-4 mb-3'>
                    <span className='text-uppercase text-muted brand'>
                      {i.category}
                    </span>
                    <h5 className='text-uppercase'>{i.title}</h5>
                  </div>
                  <p className='about'>{i.desc}</p>
                  <div className='d-flex justify-content-between'>
                    <h4>${i.price}</h4>
                    <h5 className='d-flex gap-1 align-items-center'>
                      {i.rating ? (
                        <>
                          <span className='icons'>
                            <FaStar />
                          </span>
                          {i.rating}
                        </>
                      ) : (
                        ''
                      )}
                    </h5>
                  </div>
                  <div className='cart mt-4 align-items-center'>
                    {cartItems.find((cart) => cart.id === i.id) ? (
                      <button className='btn btn-secondary disabled'>
                        Item Added
                      </button>
                    ) : (
                      <button
                        className='btn btn-warning'
                        type='button'
                        onClick={() => dispatch(addToCart(i))}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetails;
