import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './postURL';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    isLoading: false,
    posts: [],
    error: null,
  },
  extraReducers: (bulder) => {
    bulder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    bulder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });
    bulder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postsSlice.reducer;
