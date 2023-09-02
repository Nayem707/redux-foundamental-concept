import React from 'react';
import './itemStyle.css';

// React Component to display individual item
const Item = ({ title, category }) => (
  <div className='col'>
    <div className='card h-100 p-2'>
      <div className='card-body p-2'>{title}</div>

      <div className='card-footer'>
        <div className='d-grid'>{category}</div>
      </div>
    </div>
  </div>
);

export default Item;
