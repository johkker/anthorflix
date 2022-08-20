import { userRepository } from "../../repositories";
import { AppError } from "../../errors";

const getUsersSVC = async (adm: boolean) => {
  if (!adm) throw new AppError("Not Authorized", 401);
  return await userRepository.find();
};

export default getUsersSVC;
