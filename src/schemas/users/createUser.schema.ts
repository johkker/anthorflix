import * as yup from "yup";
import bcrypt from "bcrypt";

const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required("E-mail is a required field")
    .transform((value, originalValue) => originalValue.toLowerCase()),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
    .transform((value, originalValue) => bcrypt.hashSync(originalValue, 10)),
  isAdm: yup.boolean().default(false),
});

export default createUserSchema;
