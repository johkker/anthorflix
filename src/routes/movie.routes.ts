import { Router } from "express";
import { createMovieCTRL, updateMovieCTRL } from "../controllers";
import { validateAdm, validateForms } from "../middlewares";
import { createMovieSchema, updateMovieSchema } from "../schemas";

const movieRoutes = Router();

movieRoutes.get("/movies");
movieRoutes.get("/movies/:id");
movieRoutes.post(
  "/movies",
  validateForms(createMovieSchema),
  validateAdm,
  createMovieCTRL
);
movieRoutes.put(
  "/movies/:id",
  validateForms(updateMovieSchema),
  validateAdm,
  updateMovieCTRL
);
movieRoutes.delete("/movies/:id");

export default movieRoutes;
