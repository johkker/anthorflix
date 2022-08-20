import { Request, Response } from "express";
import { updateUserSVC } from "../services";

const updateUserCTRL = async (req: Request, res: Response) => {
  const { id } = req.params;
  const message = await updateUserSVC(id, req.adm, req.user, req.body);
  return res.status(200).json(message);
};

export default updateUserCTRL;
