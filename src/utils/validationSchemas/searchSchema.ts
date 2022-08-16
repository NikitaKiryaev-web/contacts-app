import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const searchSchema = Yup.object().shape({
  search: Yup.string().required("Это поле обязательно").default(""),
});

const searchOptions = { resolver: yupResolver(searchSchema) };

export default searchOptions;
