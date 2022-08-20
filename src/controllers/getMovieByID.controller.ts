import { Request, Response } from "express";

import { getMovieByIDSVC } from "../services";

const getMovieByIDCTRL = async (req: Request, res: Response) => {
  const { id } = req.params;
  const movie = await getMovieByIDSVC(id);

  res.status(200).json(movie);
};

export default getMovieByIDCTRL;
