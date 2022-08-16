import "./Popup.scss";
import { ChangeEvent, FC } from "react";
import { popupSlice, PopupType } from "../../store/reducers/popupReducer";
import { useForm } from "react-hook-form";
import popupOptions from "../../utils/validationSchemas/popupSchema";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IPopupForm } from "../../models/IPopupForm";
import { addContact, changeContactName } from "../../store/asyncActions";

const Popup: FC = () => {
  const { id, name, popupType } = useAppSelector((state) => state.popupReducer);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPopupForm>(popupOptions);

  const onSubmit = (): void => {
    if (popupType === PopupType.CHANGE) {
      dispatch(changeContactName({ id, name }));
    } else {
      const id = Math.random() * 10;
      dispatch(addContact({ id, name }));
    }
    dispatch(popupSlice.actions.changeIsOpen(false));
  };

  const inputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(popupSlice.actions.changeName(e.target.value));
  };

  const onClose = () => {
    dispatch(popupSlice.actions.changeIsOpen(false));
  };

  return (
    <div className="popup">
      <form
        className="popup__form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <button className="popup__close" onClick={onClose} type="button">
          Закрыть
        </button>
        <input
          {...register("name")}
          name="name"
          onChange={inputChange}
          type="text"
          className="popup__input"
          value={name}
        />
        <span className="popup__input-error">{errors.name?.message}</span>
        <button className="popup__submit" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default Popup;
