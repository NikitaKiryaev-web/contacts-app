import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface PopupState {
  isOpen: boolean;
  name: string;
  id: number;
  popupType: string;
}

export const enum PopupType {
  CHANGE = "change",
  ADD = "add",
}

const initialState: PopupState = {
  isOpen: false,
  name: "",
  id: -1,
  popupType: "change",
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    changeIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    changePopupType(state, action: PayloadAction<string>) {
      state.popupType = action.payload;
    },
  },
});

export default popupSlice.reducer;
