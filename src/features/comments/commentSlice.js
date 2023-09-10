// commentSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCommentsByPostId = createAsyncThunk(
  'comments/fetchComments',
  async (postId) => {
    try {
      const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data; // Return the comments data from the API
    } catch (error) {
      throw error;
    }
  }
);


export const commentsSlice = createSlice({
  name: 'comments',
  initialState : {
    byPostId: {},
    isLoadingComments: false,
    failedToLoadComments: false,
  },
  extraReducers: {
    [fetchCommentsByPostId.pending]: (state, action) => { 
        state.isLoadingComments = true;
        state.failedToLoadComments = false;
     },
     [fetchCommentsByPostId.fulfilled]: (state, action) => {
        state.byArticleId = {[action.payload.articleId]: action.payload.comments}
        state.isLoadingComments = false;
        state.failedToLoadComments = false;
     },
     [fetchCommentsByPostId.rejected]: (state, action) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = true;
     },
  },
});

export const selectComments = (state) => state.comments.byPostId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;

export default commentsSlice.reducer;
