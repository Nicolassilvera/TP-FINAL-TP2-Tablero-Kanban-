import { Router } from "express";
import BoardController from "../controller/BoardController.js";

const boardRoutes = Router();
const boardController = new BoardController();

boardRoutes.get("", boardController.getAllBoards);
boardRoutes.get("/:id", boardController.getBoardById);
boardRoutes.post("/", boardController.createBoard);
boardRoutes.put("/:id", boardController.updateBoard);
boardRoutes.delete("/: id", boardController.deleteBoardById);

export default boardRoutes;