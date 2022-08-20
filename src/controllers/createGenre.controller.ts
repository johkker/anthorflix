import { Request, Response } from "express";

import { createGenreSVC } from "../services";

const createGenreCTRL = async (req: Request, res: Response) => {
  const adm = req.adm;
  const movie = await createGenreSVC(req.newInput, adm);
  return res.status(201).json({ movie });
};

export default createGenreCTRL;
