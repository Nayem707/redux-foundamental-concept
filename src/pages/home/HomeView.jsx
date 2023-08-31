import React from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const { getTodoItems, isLoading, error } = useSelector((store) => store.todo);
  return (
    <section className='p-3'>
      {isLoading && <h2 className='text-center p-5'>Loading...</h2>}
      {error && <h2 className='text-center p-5'>Somthing wrong!</h2>}
      <div className='container text-center'>
        <div className='row row-cols-1 row-cols-md-5 g-2'>
          {/* <ProductCard key={item.id} {...item} />; */}
          {getTodoItems.map((item) => {
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
                      <button className='btn btn-warning' type='button'>
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
}

export default Home;
