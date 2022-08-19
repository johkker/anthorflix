import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/users", (req, res) => {
  return res.send("Hello World!");
});
userRoutes.get("/users/:id");

userRoutes.post("/users/register");
userRoutes.post("/users/login");

userRoutes.put("/users/:id");
userRoutes.delete("/users/:id");

export default userRoutes;
