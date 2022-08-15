import { FC } from "react";
import ContactsList from "../components/ContactsList/ContactsList";
import Header from "../components/Header/Header";

const Contacts: FC = () => {
  return (
    <>
      <Header />
      <ContactsList />
    </>
  );
};

export default Contacts;
