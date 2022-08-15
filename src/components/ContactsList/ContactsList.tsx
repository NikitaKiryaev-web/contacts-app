import "./ContactsList.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { FC, useEffect } from "react";
import { getContacts } from "../../store/asyncActions";
import ContactsItem from "../ContactsItem/ContactsItem";

const ContactsList: FC = () => {
  const username = localStorage.getItem("username");
  const dispatch = useAppDispatch();
  const { contacts, error, isLoading } = useAppSelector(
    (state) => state.contactReducer
  );
  useEffect(() => {
    dispatch(getContacts(Number(localStorage.getItem("id"))));
  }, []);
  return (
    <div className="contacts">
      <h1 className="contacts__title">Добрый день {username}</h1>
      <h2 className="contacts__subtitle">Ваши контакты:</h2>
      <ul className="contacts__list">
        {contacts.map((contact) => {
          return <ContactsItem key={contact.id} name={contact.name} />;
        })}
      </ul>
      {isLoading && "Идет загрузка"}
      {error.length != 0 && error}
    </div>
  );
};

export default ContactsList;
