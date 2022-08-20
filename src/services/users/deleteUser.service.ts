import { User } from "../../entities";
import { AppError } from "../../errors";
import { userRepository } from "../../repositories";

const deleteUserSVC = async (id: string, adm: boolean, self: User) => {
  if (adm) {
    await userRepository.delete(id);
    return {
      message: "User successfully deleted",
    };
  }

  if (self.id !== id) {
    throw new AppError("You can't delete other users", 401);
  }

  await userRepository.delete(id);

  return {
    message: "User successfully deleted",
  };
};

export default deleteUserSVC;
