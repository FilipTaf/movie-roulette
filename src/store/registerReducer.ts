import userList from "./userList";
import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

interface User {
  mail: string;
  password: string;
  role: string;
}

interface UserState{
  users: User[];
}

const initialState: UserState = {users: [...userList.users]};

const registerReducer = createSlice({
  name: "register",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    }
  },
});

export const { addUser } = registerReducer.actions;

export default registerReducer.reducer;
