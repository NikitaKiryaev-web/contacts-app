import "./ContactsItem.scss";
import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";

type ContactsItemProps = {
  name: string;
};

const ContactsItem: FC<ContactsItemProps> = (props) => {
  return (
    <div className="contacts-item">
      <p className="contacts-item__name">{props.name}</p>
      <div className="contacts-item__buttons">
        <button className="contacts-item__button-change">Изменить</button>
        <button className="contacts-item__button-remove">Удалить</button>
      </div>
    </div>
  );
};

export default ContactsItem;
