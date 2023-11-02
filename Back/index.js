import express from "express"
import cors from "cors"
import jsonwebtoken from "jsonwebtoken"

//------------------------------------------------------------------

const app = express();
app.use(express());
app.use(cors());
app.use(express.json());

//------------------------------------------------------------------

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
        res.status(200).json({messege:"ok"});
    } catch (error) {
        console.log(error)
    }
})
 
app.delete("/boards/:id", (req, res) =>{
    try {
        const index = boards.findIndex(i => i.id === req.params.id);
        if(index != -1){
            boards.splice(index, 1);
            res.status(200).json({messege:"ok"});
        } else res.status(401).json({messege:" Tablero Inexistente"});
    } catch (error) {
        console.log(error.messege);
    }
    
})

app.delete("/boards", (req, res) =>{
    boards.splice(0);
    res.status(200).json({messege:"ok"});
})

app.put("/boards/:id", (req, res) =>{
    try {
        const index = boards.findIndex(i => i.id === req.params.id);
        if(index != -1){
            boards.splice(index, 1, req.body) 
            res.status(200).json({messege:"ok"});
        } else res.status(401).json({messege:" Tablero Inexistente"});
    } catch (error) {
        console.log(error.messege);
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

//------------------------------------------------------------------

const users = [
    {email:"admin@test.com", password:"1234", rol:"admin"},
    {email:"user@test.com", password:"1234", rol:"user"},
]

app.post("/login", (req, res) =>{
    if(req.body){
        const user = users.find( i => i.email == req.body.email && i.password == req.body.password);
        if(user){
            const token = jsonwebtoken.sign({email:user.email, rol: "admin"}, "clave_secreta");
            res.json({token}); 
            res.status(200).json({messege:"ok"});
        } else res.status(401).json({messege:"Credenciales invalidas"});
    } else res.status(401).json({messege:"Credenciales Invalidas"});
});

app.get("api/protected", (req, res) =>{
    res.json({text:"Protected"});
})
//------------------------------------------------------------------

app.listen(5052, ()=>{
    console.log("Listen on port 5052.")
})