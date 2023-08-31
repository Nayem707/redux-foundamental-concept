import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://course-api.com/react-useReducer-cart-project';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (thunkAPI) => {
    try {
      const res = await axios.get(`${baseURL}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.res.data);
    }
  }
);

const initialState = {
  productsItem: [],
  isLoading: false,
  error: null,
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (bulder) => {
    bulder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    bulder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productsItem = action.payload;
      state.error = null;
    });
    bulder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.productsItem = [];
      state.error = action.error.message;
    });
  },
});

export default ProductSlice.reducer;
