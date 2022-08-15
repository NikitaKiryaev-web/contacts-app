import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { loginSlice } from "../../store/reducers/loginReducer";
import "./Header.scss";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const handleSignout = () => {
    dispatch(loginSlice.actions.toggleIsLoggedIn(false));
  };

  return (
    <header className="header">
      <h2 className="header__title">iContacts</h2>
      <button type="button" onClick={handleSignout} className="header__signout">
        Выйти
      </button>
    </header>
  );
};

export default Header;
