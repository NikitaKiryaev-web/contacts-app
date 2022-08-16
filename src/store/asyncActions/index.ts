import { IContact } from "./../../models/IContact";
import { contactSlice } from "./../reducers/contactReducer";
import { ILogin } from "../../models/ILoginForm";
import { loginSlice } from "./../reducers/loginReducer";
import { AppDispatch } from "./../index";
export const signin =
  ({ login, password }: ILogin) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(loginSlice.actions.toggleLoading(true));
      const res = await fetch(
        `http://localhost:3005/users?login=${login}&password=${password}`
      );
      const json = await res.json();
      if (!json.length) {
        throw new Error("Невалидные данные");
      }
      dispatch(loginSlice.actions.toggleLoading(false));
      dispatch(loginSlice.actions.toggleIsLoggedIn(true));
      dispatch(loginSlice.actions.toggleSuccess(true));
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", login);
      localStorage.setItem("id", json[0].id);
    } catch (e) {
      console.log(e);
      dispatch(loginSlice.actions.toggleLoading(false));
      dispatch(loginSlice.actions.toggleSuccess(false));
    }
  };

export const getContacts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(contactSlice.actions.fetchContacts());
    const res = await fetch(`http://localhost:3005/contacts`);
    const json = await res.json();
    dispatch(contactSlice.actions.fetchContactsSuccess(json));
  } catch {
    dispatch(contactSlice.actions.fetchContactsFail("Что-то пошло не так :("));
  }
};

export const searchContacts =
  (search: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(contactSlice.actions.fetchContacts());
      const res = await fetch(
        `http://localhost:3005/contacts?name_like=${search}`
      );
      const json = await res.json();
      if (!json.length) {
        dispatch(
          contactSlice.actions.fetchContactsFail("Ничего не найдено :(")
        );
        dispatch(contactSlice.actions.removeAllContacts());
        return;
      }
      dispatch(contactSlice.actions.fetchContactsSuccess(json));
    } catch {
      contactSlice.actions.fetchContactsFail("Что-то пошло не так :(");
    }
  };

export const changeContactName =
  ({ id, name }: IContact) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(contactSlice.actions.fetchContacts());
      await fetch(`http://localhost:3005/contacts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });
      dispatch(contactSlice.actions.changeContactName({ id, name }));
      dispatch(contactSlice.actions.fetchContactsEnd());
    } catch (e) {
      contactSlice.actions.fetchContactsFail("Что-то пошло не так :(");
    }
  };

export const addContact =
  (contact: IContact) => async (dispatch: AppDispatch) => {
    try {
      dispatch(contactSlice.actions.fetchContacts());
      await fetch(`http://localhost:3005/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...contact,
        }),
      });
      dispatch(contactSlice.actions.addContact(contact));
      dispatch(contactSlice.actions.fetchContactsEnd());
    } catch {
      dispatch(
        contactSlice.actions.fetchContactsFail("Что-то пошло не так :(")
      );
    }
  };

export const deleteContact = (id: number) => async (dispatch: AppDispatch) => {
  try {   
    dispatch(contactSlice.actions.fetchContacts());
    await fetch(`http://localhost:3005/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(contactSlice.actions.removeContact(id));
    dispatch(contactSlice.actions.fetchContactsEnd());
  } catch {
    dispatch(contactSlice.actions.fetchContactsFail("Что-то пошло не так :("));
  }
};
