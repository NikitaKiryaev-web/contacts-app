import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { loginSlice } from "../../store/reducers/loginReducer";
import { popupSlice, PopupType } from "../../store/reducers/popupReducer";
import "./Header.scss";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const handleSignout = () => {
    dispatch(loginSlice.actions.toggleIsLoggedIn(false));
  };
  const handleAdd = () => {
    dispatch(popupSlice.actions.changePopupType(PopupType.ADD));
    dispatch(popupSlice.actions.changeIsOpen(true));
  };

  return (
    <header className="header">
      <h2 className="header__title">iContacts</h2>
      <div className="header__buttons">
        <button onClick={handleAdd} type="button" className="header__add">
          Добавить контакт
        </button>
        <button
          type="button"
          onClick={handleSignout}
          className="header__signout"
        >
          Выйти
        </button>
      </div>
    </header>
  );
};

export default Header;
