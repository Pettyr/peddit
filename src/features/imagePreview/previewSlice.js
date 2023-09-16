// In a separate file, e.g., previewSlice.js
import { createSlice } from '@reduxjs/toolkit';

const previewSlice = createSlice({
  name: 'preview',
  initialState: null, // Initial state for the preview
  reducers: {
    setPreview: (state, action) => {
      return action.payload; // Set the preview to the payload
    },
  },
});

export const { setPreview } = previewSlice.actions;

export const selectPreview = (state) => state.preview;

export default previewSlice.reducer;
