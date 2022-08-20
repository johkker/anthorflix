import { Router } from "express";
import {
  createMovieCTRL,
  updateMovieCTRL,
  deleteMovieCTRL,
  getMovieByIDCTRL,
  getMoviesCTRL,
} from "../controllers";
import { validateAdm, validateAuth, validateForms } from "../middlewares";
import { createMovieSchema, updateMovieSchema } from "../schemas";

const movieRoutes = Router();

movieRoutes.get("/movies", validateAuth, getMoviesCTRL);
movieRoutes.get("/movies/:id", validateAuth, getMovieByIDCTRL);
movieRoutes.post(
  "/movies",
  validateForms(createMovieSchema),
  validateAdm,
  createMovieCTRL
);
movieRoutes.patch(
  "/movies/:id",
  validateForms(updateMovieSchema),
  validateAdm,
  updateMovieCTRL
);
movieRoutes.delete("/movies/:id", validateAdm, deleteMovieCTRL);

export default movieRoutes;
