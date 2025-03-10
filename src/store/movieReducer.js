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
      if (movie.favorite === false) {
        console.log("Przed zmianą: ", movie.favorite);
        movie.favorite = true;
        console.log("Po zmianie: ", movie.favorite);
      } else if (movie.favorite === true) {
        console.log("Już dodane do ulubionych");
      }
      state.push(action.payload);
    },
  },
});

export const { showMovie, toggleMovie } = movieReducer.actions;

export default movieReducer.reducer;
