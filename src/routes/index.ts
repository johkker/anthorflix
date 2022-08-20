import { Router } from "express";

import genreRoutes from "./genre.routes";
import movieRoutes from "./movie.routes";
import userRoutes from "./user.routes";

const routes = Router();

//Users routes
routes.use("", userRoutes);

//Movies routes
routes.use("", movieRoutes);

//Genres routes
routes.use("", genreRoutes);

export default routes;
