import * as yup from "yup";

const genreCreateSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .transform(
      (value, originalValue) =>
        originalValue[0].toUpperCase() + originalValue.toLowerCase().slice(1)
    ),
});

export default genreCreateSchema;
