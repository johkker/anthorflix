import { Request, Response } from "express";

import { createMovieSVC } from "../services";

const createMovieCTRL = async (req: Request, res: Response) => {
  const movie = await createMovieSVC(req.newInput);
  return res.status(201).json({ movie });
};

export default createMovieCTRL;
