import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const signInSchema = Yup.object().shape({
  login: Yup.string().required("Это поле обязательно").default(""),
  password: Yup.string().required("Это поле обязательно").default(""),
});

const formSignInOptions = { resolver: yupResolver(signInSchema) };

export default formSignInOptions;
