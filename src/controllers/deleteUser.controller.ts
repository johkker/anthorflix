import { Request, Response } from "express";

import { deleteUserSVC } from "../services";

const deleteUserCTRL = async (req: Request, res: Response) => {
  const { id } = req.params;
  const message = await deleteUserSVC(id, req.adm, req.user);
  return res.status(200).json({ message });
};

export default deleteUserCTRL;
