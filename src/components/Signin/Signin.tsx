import "./Signin.scss";
import { useForm } from "react-hook-form";
import formSignInOptions from "../../utils/validationSchemas/signinSchema";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ILogin } from "../../models/ILogin";
import { signin } from "../../store/asyncActions";
import { loginSlice } from "../../store/reducers/loginReducer";
import { ChangeEvent } from "react";

function SignIn() {
  const { isSuccess, isLoading, login, password } = useAppSelector(
    (state) => state.loginReducer
  );
  function handleLoginChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(loginSlice.actions.changleLogin(e.target.value));
  }
  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(loginSlice.actions.changePassword(e.target.value));
  }
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>(formSignInOptions);

  function onSubmit() {
    const data: ILogin = {
      login,
      password,
    };
    dispatch(signin(data));
  }

  return (
    <section className="signin">
      <form
        noValidate
        className="signin__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="signin__fieldset">
          <label htmlFor="login" className="signin__label">
            Логин
            <input
              {...register("login")}
              type="string"
              name="login"
              id="login"
              placeholder="Введите ваш логин"
              className="signin__input"
              value={login}
              onChange={handleLoginChange}
            />
            <span className="signin__input-error">{errors.login?.message}</span>
          </label>

          <label htmlFor="name" className="signin__label">
            Пароль
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              placeholder="Введите ваш пароль"
              className="signin__input"
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="signin__input-error">
              {errors.password?.message}
            </span>
          </label>
          <button className="signin__submit" type="submit">
            Войти
          </button>
        </fieldset>
      </form>
      <span className="signin__form-error">
        {!isSuccess && "Данные неверны"}
      </span>
      <span className="signin__form-error">
        {isLoading && "Проверяем данные..."}
      </span>
    </section>
  );
}

export default SignIn;
