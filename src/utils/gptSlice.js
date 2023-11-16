import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movies: null,
    suggestions: null,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovies: (state, action) => {
      state.movies = action.payload;
    },
    addSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovies, addSuggestions } =
  gptSlice.actions;
export default gptSlice.reducer;
