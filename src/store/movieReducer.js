import list from "./movielist";
import { createSlice } from "@reduxjs/toolkit";

const initialState = list.movielist;

console.log(initialState);
const movieReducer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    showMovie(state, action) {
      state.push(action.payload);
    },
  },
});

export const { showMovie } = movieReducer.actions;

export default movieReducer.reducer;
