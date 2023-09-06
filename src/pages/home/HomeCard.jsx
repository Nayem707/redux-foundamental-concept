import React from 'react';

const HomeCard = ({ id, img, price, title }) => {
  return (
    <div className='col' key={id}>
      <div className='card h-100 p-2'>
        <img src={img} className='card-img-top' alt='...' />

        <div className='card-body p-2'>
          <h5 className='fw-bolder'>${price}</h5>
          <p className='card-text fst-normal'>{title}</p>
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
};

export default HomeCard;
