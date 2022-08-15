import { ILogin } from "./../../models/ILogin";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState extends ILogin {
  isSuccess: boolean;
  isLoggedIn: boolean;
  isLoading: boolean;
  userId: number;
}

const initialState: LoginState = {
  isSuccess: true,
  isLoggedIn: Boolean(localStorage.getItem("loggedIn")),
  isLoading: false,
  login: "",
  password: "",
  userId: Number(localStorage.getItem("id")),
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggleSuccess(state, action: PayloadAction<boolean>) {
      state.isSuccess = action.payload;
    },
    toggleIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    toggleLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    changleLogin(state, action: PayloadAction<string>) {
      state.login = action.payload;
    },
    changePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setUserId(state, action: PayloadAction<number>) {
      state.userId = action.payload;
    },
  },
});

export default loginSlice.reducer;
