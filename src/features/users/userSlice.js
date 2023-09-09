import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://products-api-490.onrender.com';

export const getTodo = createAsyncThunk('todo/getTodo', async (thunkAPI) => {
  try {
    const res = await axios.get(`${baseURL}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.res.data);
  }
});

const initialState = {
  getTodoItems: [],
  isLoading: false,
  error: null,
};

const TodoSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (bulder) => {
    bulder.addCase(getTodo.pending, (state) => {
      state.isLoading = true;
    });
    bulder.addCase(getTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.getTodoItems = action.payload;
      state.error = null;
    });
    bulder.addCase(getTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.getTodoItems = [];
      state.error = action.error.message;
    });
  },
});

export default TodoSlice.reducer;
