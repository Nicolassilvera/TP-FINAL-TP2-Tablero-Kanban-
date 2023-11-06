import { Router } from "express";
const boardRoutes = Router();
//----------------------------------------

const board = {
    id: crypto.randomUUID(),
    name: "Bienvenido",
    items: [
        {
            id: crypto.randomUUID(),
            title: "Ejemplo"
        }
    ]
}; 

const boards = [board];

//----------------------------------------

boardRoutes.get("/", (req, res) =>{
    res.json(boards);
})

boardRoutes.post("/", (req, res) =>{
   try {
        boards.push(req.body);
        res.status(200).json({messege:"ok"});
    } catch (error) {
        console.log("Error en el servidor: ", error);
    }
})
 
boardRoutes.delete("/:id", (req, res) =>{
    try {
        const index = boards.findIndex(i => i.id === req.params.id);
        if(index != -1){
            boards.splice(index, 1);
            res.status(200).json({messege:"ok"});
        } else res.status(401).json({messege:" Tablero Inexistente"});
    } catch (error) {
        console.log("Error en el servidor: ", error);
    }
    
})

boardRoutes.delete("/", (req, res) =>{
    boards.splice(0);
    res.status(200).json({messege:"ok"});
})

boardRoutes.put("/:id", (req, res) =>{
    try {
        const index = boards.findIndex(i => i.id === req.params.id);
        if(index != -1){
            boards.splice(index, 1, req.body) 
            res.status(200).json({messege:"ok"});
        } else res.status(401).json({messege:" Tablero Inexistente"});
    } catch (error) {
        console.log("Error en el servidor: ", error);
    }
})

boardRoutes.put("/", (req, res) =>{
    try {
        for (let i = 0; i < req.body.length; i++) {
            boards[i] = req.body[i];
        }
        res.status(200).json({messege:"ok"});
    } catch (error) {
        console.log("Error en el servidor: ", error);
    }
})

//----------------------------------------
export default boardRoutes;