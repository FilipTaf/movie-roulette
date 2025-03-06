import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";

const store = configureStore({
  reducer: { movies: movieReducer },
});

const selectCounterValue = (state) => state.value;
const currentValue = selectCounterValue(store.getState());

console.log(currentValue);

export default store;
