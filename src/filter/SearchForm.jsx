import React from 'react';

const SearchForm = () => {
  return (
    <div class='d-flex justify-content-center'>
      <div class='cardHome'>
        <div class='input-group '>
          <input type='text' class='form-control' />
          <div class='input-group-append'>
            <button class='btn btn-primary'>
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

export default SearchForm;
