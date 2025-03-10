import list from "./movielist";
import { createSlice } from "@reduxjs/toolkit";

const initialState = list.movielist;

const movieReducer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    toggleMovie: (state, action) => {
      console.log("Wywołanie", action.payload);
      const movie = state.find((item) => item.title === action.payload);
      if (movie) {
        console.log("Przed zmianą: ", movie.favorite);
        movie.favorite = true;
        console.log("Po zmianą: ", movie.favorite);
      }
      state.push(action.payload);
    },
  },
});

export const { showMovie, toggleMovie } = movieReducer.actions;

export default movieReducer.reducer;
