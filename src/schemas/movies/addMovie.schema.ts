import * as yup from "yup";
import bcrypt from "bcrypt";

const createMovieSchema = yup.object().shape({
  title: yup.string().required().max(255),
  overview: yup
    .string()
    .required("Overview is a required field")
    .min(5)
    .max(5000),
  releaseDate: yup
    .string()
    .required("Release date is a required field")
    .matches(
      /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/g,
      "Release date must be in the format YYYY-MM-DD"
    ),
  runtime: yup.number().required("Runtime is a required field").max(600),
});

export default createMovieSchema;
