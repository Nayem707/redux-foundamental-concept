import { createSlice } from '@reduxjs/toolkit';
import { getCartItems } from './cartURL';

const cartitems = [
  {
    id: 1,
    title: 'Fjallraven No',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    title: 'Fjallraven',
    price: 10.95,
    description:
      'Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
];

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  extraReducers: (bulder) => {
    bulder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    });
    bulder.addCase(getCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
      state.error = null;
    });
    bulder.addCase(getCartItems.rejected, (state, action) => {
      state.isLoading = false;
      state.cartItems = [];
      state.error = action.error.message;
    });
  },
});

// export const {} = cartSlice.actions;

export default cartSlice.reducer;
