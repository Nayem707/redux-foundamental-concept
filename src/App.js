import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/cartSlice';
import { Outlet } from 'react-router-dom';
import NavbarStyle from './components/NavbarStyle';
import { getProducts } from './features/cart/ProductSlice';
import { getTodo } from './features/users/userSlice';

function App() {
  const { cartItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      <NavbarStyle />
      <Outlet />
    </>
  );
}

export default App;
