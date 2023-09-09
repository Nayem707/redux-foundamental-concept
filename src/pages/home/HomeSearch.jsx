import React from 'react';

const HomeSearch = () => {
  return (
    <div className='container d-flex justify-content-center'>
      <div className='cardHome mt-5 p-4'>
        <div className='input-group mb-3'>
          <input type='text' className='form-control' />
          <div className='input-group-append'>
            <button className='btn btn-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
