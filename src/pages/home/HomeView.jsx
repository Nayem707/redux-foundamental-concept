import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const { cartItem, isLoading, error } = useSelector((store) => store.cart);
  return;
}

export default Home;
