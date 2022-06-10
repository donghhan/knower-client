import { IUser } from "./../../Utils/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logout: () => initialState,
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
