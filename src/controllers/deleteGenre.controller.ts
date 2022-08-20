import e, { Request, Response } from "express";

import { deleteGenreSVC } from "../services";

const deleteGenreCTRL = async (req: Request, res: Response) => {
  const adm = req.adm;
  const { id } = req.params;
  const genre = await deleteGenreSVC(id, adm);
  return res.status(200).json({ genre });
};

export default deleteGenreCTRL;
