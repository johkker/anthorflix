import { User } from "../../entities";
import { AppError } from "../../errors";
import { userRepository } from "../../repositories";

const getUserByIDSVC = async (id: string, self: User, adm: boolean) => {
  const user = await userRepository.findOne({ where: { id: id } });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const { password, ...treatedUser } = user;

  if (user.id === self.id) {
    return treatedUser;
  }

  if (adm) {
    return treatedUser;
  }

  throw new AppError("Not Authorized", 401);
};

export default getUserByIDSVC;
