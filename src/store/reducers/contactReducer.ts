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
    removeAllContacts(state) {
      state.contacts = [];
    },
    fetchContacts(state) {
      state.isLoading = true;
    },
    fetchContactsEnd(state) {
      state.isLoading = false;
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
      state.contacts = state.contacts.map((contact) => {
        return contact.id === action.payload.id
          ? { ...contact, name: action.payload.name }
          : contact;
      });
    },
  },
});

export default contactSlice.reducer;
