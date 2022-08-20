import { Request, Response } from "express";

import { createGenreSVC } from "../services";

const createGenreCTRL = async (req: Request, res: Response) => {
  const adm = req.adm;
  const message = await createGenreSVC(req.newInput, adm);
  return res.status(201).json(message);
};

export default createGenreCTRL;
