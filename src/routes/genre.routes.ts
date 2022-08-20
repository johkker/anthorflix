import { Router } from "express";
import {
  createGenreCTRL,
  deleteGenreCTRL,
  getGenresCTRL,
} from "../controllers";
import { validateAdm, validateAuth, validateForms } from "../middlewares";
import { genreCreateSchema } from "../schemas";

const genreRoutes = Router();

genreRoutes.get("/genres", validateAuth, getGenresCTRL);
genreRoutes.post(
  "/genres/register",
  validateForms(genreCreateSchema),
  validateAdm,
  createGenreCTRL
);
genreRoutes.delete("/genres/:id", validateAdm, deleteGenreCTRL);

export default genreRoutes;
