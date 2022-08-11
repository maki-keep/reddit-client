import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api.js";

// export asynchronous thunks
export const loadPopular = createAsyncThunk(
  'posts/loadPopular',
  api.loadPopular
);
export const searchPosts = createAsyncThunk(
  'posts/searchPosts',
  api.searchPosts
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoadingPosts: false,
    failedToLoadPosts: false
  },
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(loadPopular.pending, (state, action) => {
      state.isLoadingPosts = true;
      state.failedToLoadPosts = false;
    });
    builder.addCase(loadPopular.fulfilled, (state, { payload }) => {
      state.posts = payload.data.children;
      state.isLoadingPosts = false;
      state.failedToLoadPosts = false;
    });
    builder.addCase(loadPopular.rejected, (state, action) => {
      state.isLoadingPosts = false;
      state.failedToLoadPosts = true;
    });
    builder.addCase(searchPosts.pending, (state, action) => {
      state.isLoadingPosts = true;
      state.failedToLoadPosts = false;
    });
    builder.addCase(searchPosts.fulfilled, (state, { payload }) => {
      state.posts = payload.data.children;
      state.isLoadingPosts = false;
      state.failedToLoadPosts = false;
    });
    builder.addCase(searchPosts.rejected, (state, action) => {
      state.isLoadingPosts = false;
      state.failedToLoadPosts = true;
    });
  }
});

// export selectors
export const selectPosts = state => state.postsReducer.posts;
export const selectIsLoadingPosts = state => state.postsReducer.isLoadingPosts;
export const selectFailedToLoadPosts = state => state.postsReducer.failedToLoadPosts;

// export reducer
export default postsSlice.reducer;
