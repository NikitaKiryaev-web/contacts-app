import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./reducers/contactReducer";
import loginReducer from "./reducers/loginReducer";
import popupReducer from "./reducers/popupReducer";
import searchReducer from "./reducers/searchReducer";

const rootReducer = combineReducers({
  contactReducer,
  loginReducer,
  popupReducer,
  searchReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
