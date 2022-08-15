import { IContact } from "./../../models/IContact";
import { contactSlice } from "./../reducers/contactReducer";
import { ILogin } from "../../models/ILogin";
import { loginSlice } from "./../reducers/loginReducer";
import { AppDispatch } from "./../index";
export const signin =
  ({ login, password }: ILogin) =>
  async (dispacth: AppDispatch) => {
    try {
      dispacth(loginSlice.actions.toggleLoading(true));
      const res = await fetch(
        `http://localhost:3005/users?login=${login}&password=${password}`
      );
      const json = await res.json();
      if (!json.length) {
        throw new Error("Невалидные данные");
      }
      dispacth(loginSlice.actions.toggleLoading(false));
      dispacth(loginSlice.actions.toggleIsLoggedIn(true));
      dispacth(loginSlice.actions.toggleSuccess(true));
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", login);
      localStorage.setItem("id", json[0].id);
    } catch (e) {
      console.log(e);
      dispacth(loginSlice.actions.toggleLoading(false));
      dispacth(loginSlice.actions.toggleSuccess(false));
    }
  };

export const getContacts = (id: number) => async (dispacth: AppDispatch) => {
  try {
    dispacth(contactSlice.actions.fetchContacts());
    const res = await fetch(`http://localhost:3005/contacts?userId=${id}`);
    const json = await res.json();
    dispacth(contactSlice.actions.fetchContactsSuccess(json));
  } catch {
    dispacth(contactSlice.actions.fetchContactsFail("Что-то пошло не так :("));
  }
};

export const addContact =
  (contact: IContact) => async (dispacth: AppDispatch) => {
    try {
      dispacth(contactSlice.actions.fetchContacts());
      const res = await fetch(`http://localhost:3005/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...contact,
        }),
      });
      const json = await res.json();
      dispacth(contactSlice.actions.fetchContactsSuccess(json));
    } catch {
      dispacth(
        contactSlice.actions.fetchContactsFail("Что-то пошло не так :(")
      );
    }
  };
