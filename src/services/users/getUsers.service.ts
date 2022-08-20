import { userRepository } from "../../repositories";
import { AppError } from "../../errors";

const getUsersSVC = async (adm: boolean) => {
  if (!adm) throw new AppError("Not Authorized", 401);
  const users = await userRepository.find();

  let treatedUsers: any = [];
  users.map((user) => {
    const { password, ...rest } = user;
    treatedUsers.push(rest);
  });

  return treatedUsers;
};

export default getUsersSVC;
