import express from "express"
import cors from "cors"
//----------------------------------

const app = express();
app.use(express());
app.use(cors());
app.use(express.json());

//----------------------------------

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


app.get("/boards", (req, res) =>{
    res.json(boards);
})

app.post("/boards", (req, res) =>{
   try {
        boards.push(req.body);
    } catch (error) {
        console.log(error)
    }
})
 
app.delete("/boards/:id", (req, res) =>{
    const index = boards.findIndex(i => i.id === req.params.id);
    boards.splice(index, 1)
})

app.delete("/boards", (req, res) =>{
    boards.splice(0);
})

app.put("/boards/:id", (req, res) =>{
    try {
        const index = boards.findIndex(i => i.id === req.params.id);
        if(index != -1){
            boards.splice(index, 1, req.body)    
        } else throw new Error("Index out of bound");
    } catch (error) {
        console.log(error);
    }
})

app.put("/boards", (req, res) =>{
    try {
        for (let i = 0; i < req.body.length; i++) {
            boards[i] = req.body[i];
        }
    } catch (error) {
        console.log(error);
    }
})

//----------------------------------

app.listen(5052, ()=>{
    console.log("Listen on port 5052.")
})