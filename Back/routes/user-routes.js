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

const users = [
    {email:"admin@test.com", password:"1234", rol:"admin"},
]

userRoutes.post("/", (req, res) =>{
    if(req.body){
        const user = users.find( i => i.email == req.body.email && i.password == req.body.password);
        if(user){
            const token = jsonwebtoken.sign({email:user.email, rol: "admin"}, "clave_secreta");
            res.json({token:token})
        } else res.status(401).json({messege:"Credenciales invalidas"});
    } else res.status(401).json({messege:"Credenciales Invalidas"});
});

//----------------------------------------
export default userRoutes;