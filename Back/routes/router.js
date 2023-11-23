import { Router } from "express";
import boardRoutes from "./board-routes.js"
import itemRoutes from "./item-routes.js";
import userRoutes from  "./user-routes.js"
import roleRoutes from "./role-routes.js";



const router = Router();

router.use("/boards", boardRoutes);
router.use("/items", itemRoutes);
router.use("/user", userRoutes);
router.use("/role", roleRoutes)



export default router;