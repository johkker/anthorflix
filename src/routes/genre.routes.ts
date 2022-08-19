import { Router } from "express";
import { createGenreCTRL } from "../controllers";
import { validateAdm, validateForms } from "../middlewares";
import { genreCreateSchema } from "../schemas";

const genreRoutes = Router();

genreRoutes.get("/genres");
genreRoutes.post(
  "/genres",
  validateForms(genreCreateSchema),
  validateAdm,
  createGenreCTRL
);
genreRoutes.delete("/genres/:id");

export default genreRoutes;
