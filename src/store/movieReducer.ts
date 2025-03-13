import list from "./movielist";
import { createSlice } from "@reduxjs/toolkit";

const initialState = list.movielist;

const movieReducer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addFavMovie: (state, action) => {
      const movie = state.find((item) => item.title === action.payload);
      if (movie) movie.favorite = !movie.favorite;
    },
    delFavMovie: (state, action) => {
      const movie = state.find((item) => item.title === action.payload);
      if (movie)
        if (movie.favorite === true) {
          movie.favorite = false;
        }
    },
  },
});

export const { addFavMovie, delFavMovie } = movieReducer.actions;

export default movieReducer.reducer;
