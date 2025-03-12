import { createSlice } from "@reduxjs/toolkit";
import list from "./movielist";
import drawnList from "./drawnList";

const initialState = drawnList;

const drawnReducer = createSlice({
  name: "drawn",
  initialState,
  reducers: {
    addMovie: (state, winner) => {
      const randomMovie = list.movielist[winner.payload];
      state.drawns = [...state.drawns, randomMovie];
    },
  },
});

export const { addMovie } = drawnReducer.actions;
export default drawnReducer.reducer;
