import { Router } from "express";

const genreRoutes = Router();

genreRoutes.get("/genres");
genreRoutes.post("/genres");
genreRoutes.delete("/genres/:id");

export default genreRoutes;
