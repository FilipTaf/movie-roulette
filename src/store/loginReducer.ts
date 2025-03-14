import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
};

const loginReducer = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state) => {
            state.isAuth = true;
        },
        logout: (state) => {
            state.isAuth = false;
        }
    }
})

export const { login, logout } = loginReducer.actions;
export default loginReducer.reducer;
