import {Role} from "../Models/index.js";

class RoleController {
    
    contructor(){}
    
    getAllRoles = async (req, res) => {
        try {

        } catch (error) { }
    }

    getRoleById = async (req, res) => {
        try {

        } catch (error) { }
    }

    createRole = async (req, res) => {
        try {
            const { name } = req.body;
            const role = await Role.create({ name });
            res.status(200).send({ success: true, message: "Role created", data: role });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }

    updateRole = async (req, res) => {
        try {

        } catch (error) { }
    };

    deleteRole = async (req, res) => {
        try {

        } catch (error) { }
    };
}

export default RoleController;
