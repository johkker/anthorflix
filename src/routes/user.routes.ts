import { NextFunction, Router } from "express";
import { createUserCTRL, userLoginCTRL } from "../controllers";
import { validateAdm, validateAuth, validateForms } from "../middlewares";
import { createUserSchema, userLoginSchema } from "../schemas";

const userRoutes = Router();

userRoutes.get("/users", validateAuth);
userRoutes.get("/users/:id");

userRoutes.post(
  "/users/register",
  validateForms(createUserSchema),
  validateAdm,
  createUserCTRL
);
userRoutes.post("/users/login", validateForms(userLoginSchema), userLoginCTRL);

userRoutes.put("/users/:id");
userRoutes.delete("/users/:id");

export default userRoutes;
