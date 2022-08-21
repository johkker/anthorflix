import { User } from "../../entities";
import { userRepository } from "../../repositories";
import { IUserRegister } from "../../interfaces";
import { AppError } from "../../errors";

const createUserSVC = async (data: IUserRegister) => {
  const { name, email, password, isAdm } = data;

  const existingUser = await userRepository.findOne({
    where: { email: email },
  });

  if (existingUser) {
    throw new AppError("E-mail already registered", 400);
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = password;
  user.isAdm = isAdm;

  if (isAdm) {
    throw new AppError("You can not create an administrator account.", 401);
  }

  userRepository.create(user);
  await userRepository.save(user);

  return {
    isAdm: user.isAdm,
    name: user.name,
    email: user.email,
    id: user.id,
  };
};

export default createUserSVC;
