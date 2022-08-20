import * as yup from "yup";
import bcrypt from "bcrypt";

const updateUserSchema = yup.object().shape({
  name: yup.string(),
  email: yup
    .string()
    .email()
    .transform((value, originalValue) => originalValue.toLowerCase()),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .transform((value, originalValue) => bcrypt.hashSync(originalValue, 10)),
  isAdm: yup.boolean(),
});

export default updateUserSchema;
