import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./reducers/contactReducer";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
  contactReducer,
  loginReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
