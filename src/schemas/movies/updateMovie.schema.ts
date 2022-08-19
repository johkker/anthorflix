import * as yup from "yup";

const updateMovieSchema = yup.object().shape({
  title: yup.string().max(255, "Max length is 255 characters"),
  overview: yup
    .string()
    .min(5, "Minimum of 5 characters")
    .max(5000, "Maximum of 5000 characters"),
  releaseDate: yup
    .string()
    .matches(
      /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/g,
      "Release date must be in the format YYYY-MM-DD"
    ),
  runtime: yup.number().max(600, "Max length is 600 minutes"),
  genres: yup.array(),
});

export default updateMovieSchema;
