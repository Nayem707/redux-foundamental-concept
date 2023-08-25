import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://fakestoreapi.com';

export const getCartItem = createAsyncThunk(
  'carts/getCartItem',
  async (thunkAPI) => {
    try {
      const res = await axios.get(`${baseURL}/products`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.res.data);
    }
  }
);
