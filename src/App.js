import { useDispatch } from 'react-redux';
import './App.css';
import Home from './pages/home/HomeView';
import { getCartItem } from './features/cart/cartURL';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItem());
  }, [dispatch]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
