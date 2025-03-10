import list from "./movielist";
import { createSlice } from "@reduxjs/toolkit";

const initialState = list.movielist;

const favoriteReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = state.movie((movie) => movie.title === action.payload);
      if (movie) {
        movie.favorite = !movie.favorite;
      }
    },
  },
});

export const { toggleFavorite } = favoriteReducer.actions;

export default favoriteReducer.reducer;
