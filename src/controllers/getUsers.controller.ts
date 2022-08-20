import { Request, Response } from "express";
import { getUsersSVC } from "../services";

const getUsersCTRL = async (req: Request, res: Response) => {
  const users = await getUsersSVC(req.adm);
  return res.status(200).json({ users });
};

export default getUsersCTRL;
