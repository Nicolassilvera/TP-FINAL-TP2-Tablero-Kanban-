import { Router } from "express";
import boardRoutes from "./board-routes.js"
import userRoutes from  "./user-routes.js"

//----------------------------------------

const router = Router();

router.use("/boards", boardRoutes);
router.use("/login", userRoutes);

//----------------------------------------
export default router;