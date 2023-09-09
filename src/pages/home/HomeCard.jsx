import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ id, img, price, title }) => {
  return (
    <div className='col' key={id}>
      <div className='card h-100 p-2'>
        <div className='card-body p-2'>
          <Link to={`products/${id}`}>
            <img src={img} className='card-img-top img-fluid' alt='...' />
          </Link>
        </div>
        <div className='card-body p-2'>{title}</div>

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
