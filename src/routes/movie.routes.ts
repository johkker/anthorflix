import { Router } from "express";

const movieRoutes = Router();

movieRoutes.get("/movies");
movieRoutes.get("/movies/:id");
movieRoutes.post("/movies");
movieRoutes.put("/movies/:id");
movieRoutes.delete("/movies/:id");

export default movieRoutes;
