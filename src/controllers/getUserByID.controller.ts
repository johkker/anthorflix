import { Request, Response } from "express";

import { getUserByIDSVC } from "../services";

const getUserByIDCTRL = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserByIDSVC(id, req.user, req.adm);
  return res.status(200).json({ user });
};

export default getUserByIDCTRL;
