import { User } from "../../entities";
import { AppError } from "../../errors";
import { userRepository } from "../../repositories";

const getUserByIDSVC = async (id: string) => {
  const user = await userRepository.findOne({ where: { id: id } });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const { password, ...treatedUser } = user;

  return treatedUser;
};

export default getUserByIDSVC;
