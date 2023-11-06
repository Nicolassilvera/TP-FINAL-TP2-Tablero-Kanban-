import { Router } from "express";
const userRoutes = Router();
//----------------------------------------

const users = [
    {email:"admin@test.com", password:"1234", rol:"admin"},
    {email:"user@test.com", password:"1234", rol:"user"},
]

userRoutes.post("/", (req, res) =>{
    if(req.body){
        const user = users.find( i => i.email == req.body.email && i.password == req.body.password);
        if(user){
            const token = jsonwebtoken.sign({email:user.email, rol: "admin"}, "clave_secreta");
            res.json({token}); 
            res.status(200).json({messege:"ok"});
        } else res.status(401).json({messege:"Credenciales invalidas"});
    } else res.status(401).json({messege:"Credenciales Invalidas"});
});

//----------------------------------------
export default userRoutes;