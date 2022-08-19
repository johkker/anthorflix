import { Request, Response } from "express";

import { deleteMovieSVC } from "../services";

const createMovieCTRL = async (req: Request, res: Response) => {
  const { id } = req.params;
  const movie = await deleteMovieSVC(id);
  return res.status(201).json({ movie });
};

export default createMovieCTRL;
