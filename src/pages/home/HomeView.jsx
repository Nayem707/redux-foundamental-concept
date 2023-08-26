import React from 'react';
import { useSelector } from 'react-redux';
import NavbarStyle from '../../components/cart/NavbarStyle';
import CartContainer from '../../components/cart/CartContainer';

function Home() {
  return (
    <>
      <NavbarStyle />
      <CartContainer />
    </>
  );
}

export default Home;
