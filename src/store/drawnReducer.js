import { createSlice } from "@reduxjs/toolkit";
import list from "./movielist";
import drawnList from "./drawnList";

const initialState = drawnList;

const drawnReducer = createSlice({
  name: "drawn",
  initialState,
  reducers: {
    addMovie: (state) => {
      const randomIndex = Math.floor(Math.random() * list.movielist.length);
      const randomMovie = list.movielist[randomIndex];
      state.drawns = [...state.drawns, randomMovie];
    },
  },
});

export const { addMovie } = drawnReducer.actions;
export default drawnReducer.reducer;
