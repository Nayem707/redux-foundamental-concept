import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Animation from '../../components/common/LoadingAnim';

const Products = () => {
  const { productsItem, isLoading, error } = useSelector(
    (store) => store.products
  );

  return (
    <section className='p-3'>
      {isLoading && (
        <div className='text-center p-5'>
          <Animation />
        </div>
      )}
      {error && <h2 className='text-center p-5'>Somthing wrong!😌</h2>}
      <div className='container text-center'>
        <div className='row row-cols-1 row-cols-md-5 g-2'>
          {productsItem.map((items) => {
            return <ProductCard key={items.id} items={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
