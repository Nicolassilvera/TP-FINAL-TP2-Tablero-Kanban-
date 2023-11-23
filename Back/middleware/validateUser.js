import { verifyToken } from "../utils/jwt";

export const validateUser = async (req, res, next)=>{
    try {
        const {token} = req.cookies;
        const user = verifyToken(token);
        if(!user) throw new Error("Invalid Credentials");
        req.user = user;
        next();
    } catch (error) {
        res.status(200).send({success:false, message:error.message});
    }
}