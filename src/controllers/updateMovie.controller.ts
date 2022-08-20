import { Request, Response } from "express";
import { updateMovieSVC } from "../services";

const updateMovieCTRL = async (req: Request, res: Response) => {
  const { id } = req.params;
  const adm = req.adm;
  const movie = await updateMovieSVC(req.newInput, id, adm);
  return res.status(201).json({ movie });
};

export default updateMovieCTRL;
