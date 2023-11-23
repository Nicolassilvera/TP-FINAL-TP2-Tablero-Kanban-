import { Router } from "express";
import jsonwebtoken from "jsonwebtoken"
import UserControlller from "../controller/UserController.js";

const userRoutes = Router();
const userControlller = new UserControlller();

userRoutes.get("/", userControlller.getAllUsers);
userRoutes.get("/:id", userControlller.getUserById);
userRoutes.post("/", userControlller.createUser);
userRoutes.post("/login", userControlller.login)
userRoutes.put("/:id", userControlller.updateUser);
userRoutes.delete("/: id", userControlller.deleteUserById);

export default userRoutes;