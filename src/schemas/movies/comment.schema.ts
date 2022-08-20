import * as yup from "yup";

const commentSchema = yup.object().shape({
  text: yup
    .string()
    .required("Text is a required field")
    .max(5000, "Max length is 5000 characters."),
});

export default commentSchema;
