import {User, Role} from "../Models/index.js";
import { generateToken } from "../utils/jwt.js";

class UserControlller {
    constructor(){}

    getAllUsers = async (req, res)=>{
        try {
            const users = await User.findAll({
                attributes: ["id", "name", "email"],
                include: [{ model: Role, attributes: ["name"] }],
            });
            res.status(200).send({success:true, message:"All Users", data: users});
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    getUserById = async (req, res)=>{
        try {
            const {id} = req.params;
            if(!id) throw new Error("User does't exist");
            const user = await User.findByPk(id);
            if(user == null) throw new Error("User not found");
            res.status(200).send({success:true, message:"User found", data: user});
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    createUser = async (req, res)=>{
        try {
            const {name, email, role_id, password} = req.body;
            const user = await User.create({name, email, role_id, password});
            if(!user) throw new Error("User cant be created");
            res.status(200).send({success:true, message:"User Created", data: user});
        } catch (error) {
            res.status(400).send({success:false, message: error.message});   
        }
    }

    updateUser = async (req, res)=>{ 
        try {
            const {id} = req.params;
            const {name, email, role_id, password} = req.body; 
            const user = await User.update({name, email, role_id, password},{
                where:{
                    id: id
                }
            });
            if(!user) throw new Error("User not found");
            res.status(200).send({success:true, message:"User modified"});
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    deleteUserById = async (req, res)=>{
        try {
            const {id} = req.params; 
            const deletedUser = await User.destroy({ 
                where: { 
                    id: id 
                } 
            });
            if(deletedUser == null) throw new Error("User not found");
            res.status(200).json({ success: true, message: "User removed" });
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    login = async (req, res)=>{
        try {
            const {email, password} = req.body;
            const user = await User.findByPk({
                where:{email},
            });
            const validate = await user.validatePassword(password);
            if(!validate || !user) throw new Error("Invalid Credentials");
            res.status(200).json({ success: true, message: "User removed" });
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }
}

export default UserControlller;