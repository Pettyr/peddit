import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an async thunk for fetching posts
export const fetchPostsList = createAsyncThunk(
  'postsList/fetchPostsList', 
  async () => {
    try {
      const response = await fetch('https://www.reddit.com/r/popular.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.data.children;
    } catch (error) {
      throw error;
    }
  });

// Create a posts slice
const postsListSlice = createSlice({
  name: 'postsList',
  initialState: {
    postsList: [],
    isFetchingPostsList: false,
    hasError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsList.pending, (state) => {
        state.isFetchingPostsList = true;
        state.hasError = false;
      })
      .addCase(fetchPostsList.fulfilled, (state, action) => {
        state.isFetchingPostsList = false;
        state.postsList = action.payload;
      })
      .addCase(fetchPostsList.rejected, (state, action) => {
        state.isFetchingPostsList = false;
        state.hasError = true;
        state.postsList = [];
      });
  },
});

export const selectPostsList = (state) => state.postsList.postsList;

export const isFetching = (state) => state.postsList.isFetchingPostsList;

export default postsListSlice.reducer;
