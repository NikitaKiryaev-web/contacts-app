import { IContact } from "./../../models/IContact";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactState {
  contacts: IContact[];
  isLoading: boolean;
  error: string;
}

const initialState: ContactState = {
  contacts: [] as IContact[],
  isLoading: false,
  error: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    fetchContactsSuccess(state, action: PayloadAction<IContact[]>) {
      state.isLoading = false;
      state.error = "";
      state.contacts = action.payload;
    },
    fetchContactsFail(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchContacts(state) {
      state.isLoading = true;
    },
    addContact(state, action: PayloadAction<IContact>) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter((contact) => {
        return contact.id !== action.payload;
      });
    },
    changeContactName(state, action: PayloadAction<IContact>) {
      state.contacts[action.payload.id].name = action.payload.name;
    },
  },
});

export default contactSlice.reducer;
