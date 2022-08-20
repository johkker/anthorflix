import { Router } from "express";
import {
  createMovieCTRL,
  updateMovieCTRL,
  deleteMovieCTRL,
  getMovieByIDCTRL,
  getMoviesCTRL,
  rateCTRL,
  addCommentCTRL,
  editCommentCTRL,
  deleteCommentCTRL,
} from "../controllers";
import { validateAdm, validateAuth, validateForms } from "../middlewares";
import {
  commentSchema,
  createMovieSchema,
  updateMovieSchema,
} from "../schemas";

const movieRoutes = Router();

movieRoutes.get("/movies", validateAuth, getMoviesCTRL);
movieRoutes.get("/movies/:id", validateAuth, getMovieByIDCTRL);
movieRoutes.post(
  "/movies/register",
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

movieRoutes.patch("/movies/rate/:type/:id", validateAuth, rateCTRL);

movieRoutes.patch(
  "/movies/:id/comment",
  validateForms(commentSchema),
  validateAuth,
  addCommentCTRL
);
movieRoutes.patch(
  "/movies/comment/:commentId",
  validateForms(commentSchema),
  validateAuth,
  editCommentCTRL
);
movieRoutes.delete(
  "/movies/comment/:commentId",
  validateAdm,
  deleteCommentCTRL
);

export default movieRoutes;
