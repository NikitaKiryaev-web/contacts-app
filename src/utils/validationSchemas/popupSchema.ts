import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const popupSchema = Yup.object().shape({
  name: Yup.string().required("Это поле обязательно").default(""),
});

const formSignInOptions = { resolver: yupResolver(popupSchema) };

export default formSignInOptions;
