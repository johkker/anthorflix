import { Request, Response } from "express";

import { createMovieSVC } from "../services";

const createMovieCTRL = async (req: Request, res: Response) => {
  const adm = req.adm;
  const movie = await createMovieSVC(req.newInput, adm);
  return res.status(201).json(movie);
};

export default createMovieCTRL;
