import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      state.cartItems.push(productToAdd);
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount = cartItem.amount + 1;
    },

    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
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
});

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
