import { Request, Response } from "express";

import { rateSVC } from "../services";

const rateCTRL = async (req: Request, res: Response) => {
  const { id, type } = req.params;
  const message = await rateSVC(id, req.user, type);
  return res.status(200).json(message);
};

export default rateCTRL;
