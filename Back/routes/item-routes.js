import { Router } from "express";
import ItemControlller from "../controller/ItemController.js";

const itemRoutes = Router();
const itemControlller = new ItemControlller();


itemRoutes.get("", itemControlller.getAllItems);
itemRoutes.get("/:id", itemControlller.getItemById);
itemRoutes.post("/", itemControlller.createItem);
itemRoutes.put("/:id", itemControlller.updateItem);
itemRoutes.delete("/: id", itemControlller.deleteItemById);


export default itemRoutes;