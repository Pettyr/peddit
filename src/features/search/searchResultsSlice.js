import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearchResults = createAsyncThunk(
    'searchResults/fetchSearchResults',
    async (queryString) => {
        try {
            const response = await fetch(`https://www.reddit.com/search.json?${queryString}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const searchData = data.data.children
            console.log('searchdata:', searchData)
            return searchData;
        } catch (error) {
            throw error;
        }
    }
);

const searchResultsSlice = createSlice({
    name: 'searchResults',
    initialState: {
        searchResults: [],
        isFetchingSearchResults: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchSearchResults.pending, (state) => {
            state.isFetchingSearchResults = true;
            state.hasError = false;
        })
        .addCase(fetchSearchResults.fulfilled, (state, action) => {
            state.isFetchingSearchResults = false;
            state.hasError = false;
            state.searchResults = action.payload;
        })
        .addCase(fetchSearchResults.rejected, (state) => {
            state.isFetchingComments = false;
            state.hasError = true;
        });
    }
})

export const selectSearchResults = (state) => state.searchResults.searchResults;

export const isFetchingSearchResults = (state) => state.searchResults.isFetchingSearchResults

export default searchResultsSlice.reducer; 