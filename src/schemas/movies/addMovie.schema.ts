import * as yup from "yup";
import bcrypt from "bcrypt";

const createMovieSchema = yup.object().shape({
  title: yup.string().required("Title is a required field").max(255),
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
  imageUrl: yup
    .string()
    .matches(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g,
      "Image url must be a valid url"
    ),
});

export default createMovieSchema;
