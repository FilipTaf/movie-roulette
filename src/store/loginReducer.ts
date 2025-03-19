import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  admin: string;
}

const initialState: AuthState = {
  admin: "",
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.admin = action.payload;
    },
    logout: (state) => {
      state.admin = "";
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
