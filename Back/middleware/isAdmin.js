
export const isAdmin = async (req, res, next)=>{
    try {
        const {user} = req;
        if(user.role.name != "admin") throw new Error("Not admin Rol");
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({success:false, message:error.message});
    }
}