import "./ContactsItem.scss";
import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { popupSlice, PopupType } from "../../store/reducers/popupReducer";
import { deleteContact } from "../../store/asyncActions";

type ContactsItemProps = {
  name: string;
  id: number;
};

const ContactsItem: FC<ContactsItemProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleChangeClick = () => {
    dispatch(popupSlice.actions.changePopupType(PopupType.CHANGE));
    dispatch(popupSlice.actions.changeName(props.name));
    dispatch(popupSlice.actions.changeId(props.id));
    dispatch(popupSlice.actions.changeIsOpen(true));
  };
  const handleDeleteClick = () => {
    dispatch(deleteContact(props.id));
  };
  return (
    <>
      <div className="contacts-item">
        <p className="contacts-item__name">{props.name}</p>
        <div className="contacts-item__buttons">
          <button
            className="contacts-item__button-change"
            onClick={handleChangeClick}
          >
            Изменить
          </button>
          <button
            className="contacts-item__button-remove"
            onClick={handleDeleteClick}
          >
            Удалить
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactsItem;
