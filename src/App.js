import { useDispatch } from 'react-redux';
import './App.css';
import Home from './pages/home/HomeView';
import { getCartItems } from './features/cart/cartURL';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
