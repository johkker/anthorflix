import { AppError } from "../../errors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userRepository } from "../../repositories";

const userLoginSVC = async (email: string, password: string) => {
  const user = await userRepository.findOne({ where: { email: email } });

  if (!user) {
    throw new AppError("Wrong email or password", 404);
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new AppError("Wrong email or password", 404);
  }

  const token = jwt.sign({ email: email }, String(process.env.DECODER), {
    expiresIn: "1d",
  });

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      isAdm: user.isAdm,
    },
    token,
  };
};

export default userLoginSVC;
