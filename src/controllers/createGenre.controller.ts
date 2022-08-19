import { Request, Response } from "express";

import { createGenreSVC } from "../services";

const createGenreCTRL = async (req: Request, res: Response) => {
  const movie = await createGenreSVC(req.newInput);
  return res.status(201).json({ movie });
};

export default createGenreCTRL;
