import { createSlice } from "@reduxjs/toolkit";
import list from "./movielist";
import drawnList from "./drawnList";

const initialState = drawnList;
const drawnReducer = createSlice({
  name: "drawn",
  initialState,
  reducers: {
    addMovie: (state, winner) => {
      const movieIndex = list.movielist.findIndex(
        (movie) => movie.title === winner.payload
      );

      const randomMovie = list.movielist[movieIndex];

      //@ts-ignore
      state.drawns = [...state.drawns, randomMovie];
    },
    clearTable: (state) => {
      state.drawns = [];
    },
  },
});

export const { addMovie, clearTable } = drawnReducer.actions;
export default drawnReducer.reducer;
