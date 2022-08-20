import { Router } from "express";
import {
  createUserCTRL,
  deleteUserCTRL,
  getUserByIDCTRL,
  getUsersCTRL,
  userLoginCTRL,
} from "../controllers";
import { validateAdm, validateAuth, validateForms } from "../middlewares";
import { createUserSchema, userLoginSchema } from "../schemas";

const userRoutes = Router();

userRoutes.get("/users", validateAdm, getUsersCTRL);
userRoutes.get("/users/:id", validateAdm, getUserByIDCTRL);

userRoutes.post(
  "/users/register",
  validateForms(createUserSchema),
  validateAdm,
  createUserCTRL
);
userRoutes.post("/users/login", validateForms(userLoginSchema), userLoginCTRL);

userRoutes.patch(
  "/users/:id",
  validateForms(updateUserSchema),
  validateAdm,
  updateUserCTRL
);
userRoutes.delete("/users/:id", validateAdm, deleteUserCTRL);

export default userRoutes;
