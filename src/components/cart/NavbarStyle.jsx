import React from 'react';
import { useSelector } from 'react-redux';

const NavbarStyle = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <div className='row'>
      <div className='col'>
        <h4>
          <b>Navbar Shopping Cart</b>
        </h4>
      </div>
      <div className='col align-self-center text-right text-muted'>
        {amount} items
      </div>
    </div>
  );
};

export default NavbarStyle;
