import { Request, Response } from "express";

import { deleteMovieSVC } from "../services";

const deleteMovieCTRL = async (req: Request, res: Response) => {
  const { id } = req.params;
  const adm = req.adm;
  const movie = await deleteMovieSVC(id, adm);
  return res.status(200).json(movie);
};

export default deleteMovieCTRL;
