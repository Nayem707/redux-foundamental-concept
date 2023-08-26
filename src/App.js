import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './pages/home/HomeView';
import { getCartItems } from './features/cart/cartURL';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/cartSlice';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (isLoading) {
    return <h2 className='text-center p-5'>Loading...</h2>;
  }

  return (
    <>
      <Home />
    </>
  );
}

export default App;
