import {Item} from "../Models/index.js";

class ItemControlller {
    constructor(){}

    getAllItems = async (req, res)=>{
        try {
            const item = await Item.findAll(); 
            if(!item) throw new Error("Item not found");
            res.status(200).send({success:true, message:"All Boards", data: item});
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    getItemById = async (req, res)=>{
        try {
            const {id} = req.params;
            if(!id) throw new Error("Item does't exist");
            const item = await Item.findByPk(id);
            if(item == null) throw new Error("Item not found");
            res.status(200).send({success:true, message:"Item found", data: item});
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    createItem = async (req, res)=>{
        try {
            const {tittle} = req.body;
            if(!tittle) throw new Error("Tittle can't be null or empty ");
            const item = await Item.create(name);
            res.status(200).send({success:true, message:"Board Created", data: item});
        } catch (error) {
            res.status(400).send({success:false, message: error.message});   
        }
    }

    updateItem = async (req, res)=>{ 
        try {
            const {id} = req.params;
            const {tittle} = req.body;
            const item = await Item.update({tittle},{
                where:{
                    id: id
                }
            });
            res.status(200).send({success:true, message:"Item modified", data: item});
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    deleteItemById = async (req, res)=>{
        try {
            const {id} = req.params; 
            if(!id) throw new Error("Item does't exist");
            const deletedITem = await Item.destroy({ 
                where: { 
                    id: id 
                } 
            });
            if(deletedITem == null) throw new Error("Item not found");
            res.status(200).json({ success: true, message: "Board removed" });
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }
}

export default ItemControlller;