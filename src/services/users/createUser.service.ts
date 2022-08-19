import { User } from "../../entities";
import { userRepository } from "../../repositories";
import { IUserRegister } from "../../interfaces";
import { AppError } from "../../errors";

const createUserSVC = async (data: IUserRegister, adm: boolean) => {
  const { name, email, password, isAdm } = data;

  const existingUser = await userRepository.findOne({
    where: { email: email },
  });

  if (existingUser) {
    throw new AppError("E-mail já cadastrado", 400);
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = password;
  user.isAdm = isAdm;

  if (isAdm) {
    if (adm) {
      userRepository.create(user);
      await userRepository.save(user);
    } else {
      throw new AppError("Missing admin privileges", 401);
    }
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
