import { Request, Response } from "express";

import { getGenresSVC } from "../services";

const getGenresCTRL = async (req: Request, res: Response) => {
  const genres = await getGenresSVC();
  return res.status(200).json({ genres });
};

export default getGenresCTRL;
