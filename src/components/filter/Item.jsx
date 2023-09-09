import React from 'react';
import './itemStyle.css';
import { Link } from 'react-router-dom';

const Item = ({ title, category, img, id }) => (
  <div className='col'>
    <Link to={`products/${id}`}>
      <div className='card h-100 p-2'>
        <div className='card-body p-2'>
          <img src={img} className='card-img-top img-fluid' alt='...' />
        </div>

        <div className='card-body p-2'>{title}</div>

        <div className='card-footer'>
          <div className='d-grid'>{category}</div>
        </div>
      </div>
    </Link>
  </div>
);

export default Item;
