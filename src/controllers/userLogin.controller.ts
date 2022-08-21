import { Request, Response } from "express";
import { userLoginSVC } from "../services";

const userLoginCTRL = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const message = await userLoginSVC(email, password);
  return res.status(200).json(message);
};

export default userLoginCTRL;
