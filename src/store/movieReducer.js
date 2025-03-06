import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import list from "./movielist";

const addMovie = createAction("addMovie");
const initialState = list;

const movieReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase(addMovie, (state, action) => {
    console.log("Default action handled:", action);
    state.movies.push(action.payload);
  });
});
export default movieReducer;
