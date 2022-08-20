import { userRepository } from "../../repositories";
import { AppError } from "../../errors";
import { User } from "../../entities";
import { IUserUpdate } from "../../interfaces";

const updateUserSVC = async (
  id: string,
  adm: boolean,
  self: User,
  data: IUserUpdate
) => {
  const existingUser = await userRepository.findOne({ where: { id: id } });

  if (!existingUser) throw new AppError("User not found", 404);

  if (data.isAdm && !adm) throw new AppError("You are not authorized", 401);

  if (self.id !== id && !adm) throw new AppError("You are not authorized", 401);

  existingUser.email = data.email || existingUser.email;
  existingUser.password = data.password || existingUser.password;
  existingUser.name = data.name || existingUser.name;
  existingUser.isAdm = data.isAdm || existingUser.isAdm;

  await userRepository.save(existingUser);

  return {
    message: "User successfully updated",
  };
};
