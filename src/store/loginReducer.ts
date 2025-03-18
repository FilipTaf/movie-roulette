import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isAdmin: false,
};

const loginReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
      state.isAdmin = false;
    },
    loginAdmin: (state) => {
      state.isAuth = true;
      state.isAdmin = true;
    },
    logout: (state) => {
      state.isAuth = false;
      state.isAdmin = false;
    },
  },
});

export const { login, loginAdmin, logout } = loginReducer.actions;
export default loginReducer.reducer;
