import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import ProductCard from './ProductCard';
import { addToCart } from '../../features/cart/cartSlice';

const Products = () => {
  const { productsItem, isLoading } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  return (
    <section className='p-3'>
      {isLoading && <h2 className='text-center p-5'>Loading...</h2>}
      <div className='container text-center'>
        <div className='row row-cols-1 row-cols-md-5 g-2'>
          {/* <ProductCard key={item.id} {...item} />; */}
          {productsItem.map((item) => {
            return (
              <div className='col' key={item.id}>
                <div className='card h-100 p-2'>
                  <img src={item.image} className='card-img-top' alt='...' />

                  <div className='card-body p-2'>
                    <h5 className='fw-bolder'>${item.price}</h5>
                    <p className='card-text fst-normal'>{item.title}</p>
                  </div>
                  <div className='card-footer'>
                    <div className='d-grid'>
                      <button
                        className='btn btn-warning'
                        type='button'
                        onClick={() => dispatch(addToCart(item))}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
