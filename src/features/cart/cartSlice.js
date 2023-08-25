import { createSlice } from '@reduxjs/toolkit';
import { getCartItem } from './cartURL';

const initialState = {
  cartItem: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  extraReducers: (bulder) => {
    bulder.addCase(getCartItem.pending, (state) => {
      state.isLoading = true;
    });
    bulder.addCase(getCartItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartItem = action.payload;
      state.error = null;
    });
    bulder.addCase(getCartItem.rejected, (state, action) => {
      state.isLoading = false;
      state.cartItem = [];
      state.error = action.error.message;
    });
  },
});

// export const {} = cartSlice.actions;

export default cartSlice.reducer;
