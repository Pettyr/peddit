// In a separate file, e.g., commentsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an async thunk for fetching comments
export const fetchComments = createAsyncThunk(
  'comments/fetchComments', 
  async ({ subreddit, postId }) => {
    try {
      const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}.json`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('data:', data)
      return data;
    } catch (error) {
      throw error;
    }
  }
);

// Create a comments slice
const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    isFetchingComments: false,
    hasError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isFetchingComments = true;
        state.hasError = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isFetchingComments = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.isFetchingComments = false;
        state.hasError = true;
        state.comments = [];
      });
  },
});

// Create a selector to select the comments data
export const selectCommentsData = (state) => state.comments.comments[1]?.data.children || [];

// Create a selector to select the preview property
export const selectPreview = (state) => {
  const data = state.comments.comments[0]?.data?.children[0].data;
  return data ? data.preview : 0;
};

export const isFetchingComments = (state) => state.comments.isFetchingComments;


export default commentsSlice.reducer;
