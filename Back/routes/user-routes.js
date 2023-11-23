import { Router } from "express";
import UserControlller from "../controller/UserController.js";
import { validateUser } from "../middleware/validateUser.js";

const userRoutes = Router();
const userControlller = new UserControlller();

userRoutes.get("/me", validateUser, userControlller.me);
userRoutes.get("/", userControlller.getAllUsers);
userRoutes.get("/:id", userControlller.getUserById);
userRoutes.post("/", userControlller.createUser);
userRoutes.post("/login", userControlller.login)
userRoutes.put("/:id", userControlller.updateUser);
userRoutes.delete("/: id", userControlller.deleteUserById);

export default userRoutes;