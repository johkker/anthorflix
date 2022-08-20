import { Request, Response } from "express";

import { getMoviesSVC } from "../services";

const getMoviesCTRL = async (req: Request, res: Response) => {
  const movies = await getMoviesSVC();

  res.status(200).json(movies);
};

export default getMoviesCTRL;
