import { createSlice } from '@reduxjs/toolkit';
import { getCartItems } from './cartURL';

const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
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

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
