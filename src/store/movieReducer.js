import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import list from "./movielist";
import { createSlice } from "@reduxjs/toolkit";

const addMovie = createAction("addMovie");

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
