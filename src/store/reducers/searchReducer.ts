import { ISearchForm } from "./../../models/ISearchForm";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ISearchForm = {
  search: "",
  error: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    changeError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default searchSlice.reducer;
