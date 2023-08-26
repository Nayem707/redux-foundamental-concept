import React from 'react';
import { useSelector } from 'react-redux';

const NavbarStyle = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav className='container bg-primary rounded text-white p-3'>
      <div className='row '>
        <div className='col '>
          <h4>
            <b>Navbar Shopping Cart</b>
          </h4>
        </div>
        <div className='col align-self-center text-right '>
          <span className='bg-dark p-2 rounded position-relative'>
            Cart{' '}
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
              {amount} <span className='visually-hidden'>unread messages</span>
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarStyle;
