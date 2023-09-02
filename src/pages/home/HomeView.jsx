import React from 'react';
import { useSelector } from 'react-redux';
import HomeCard from './HomeCard';
import HomeSearch from './HomeSearch';

function Home() {
  const { getTodoItems, isLoading, error } = useSelector((store) => store.todo);

  if (isLoading) {
    return <h2 className='text-center p-5'>Loading...</h2>;
  }

  if (error) {
    return <h2 className='text-center p-5'>Somthing wrong!</h2>;
  }

  return (
    <section className='p-3'>
      <HomeSearch />
      <div className='container text-center'>
        <div className='row row-cols-1 row-cols-md-5 g-2'>
          {getTodoItems.map((item) => {
            return <HomeCard key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;
