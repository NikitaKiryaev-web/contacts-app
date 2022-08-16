import { FC } from "react";
import ContactsList from "../components/ContactsList/ContactsList";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";

const Contacts: FC = () => {
  return (
    <>
      <Header />
      <Search />
      <ContactsList />
    </>
  );
};

export default Contacts;
