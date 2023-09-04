import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:8000/';

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (thunkAPI) => {
    try {
      const res = await axios.get(`${baseURL}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.res.data);
    }
  }
);
