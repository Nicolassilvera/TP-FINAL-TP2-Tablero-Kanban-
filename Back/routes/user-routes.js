import { Router } from "express";
import UserControlller from "../controller/UserController.js";
import {validateUser} from "../middleware/validateUser.js";
import {isAdmin} from "../middleware/isAdmin.js";

const userRoutes = Router();
const userControlller = new UserControlller();


userRoutes.post("/", userControlller.createUser);
userRoutes.post("/login", userControlller.login);
userRoutes.get("/me", validateUser, userControlller.me);
userRoutes.use(validateUser);
userRoutes.get("/:id", userControlller.getUserById);
userRoutes.get("/", isAdmin, userControlller.getAllUsers);
userRoutes.put("/:id", userControlller.updateUser);
userRoutes.delete("/: id", userControlller.deleteUserById);

export default userRoutes;