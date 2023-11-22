import {Item} from "../Models/index.js";

class ItemControlller {
    constructor(){}

    getAllItems = async (req, res)=>{
        try {
            
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    getItemByID = async (req, res)=>{
        try {
            
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    createItem = async (req, res)=>{
        try {
            
        } catch (error) {
            res.status(400).send({success:false, message: error.message});   
        }
    }

    updateItem = async (req, res)=>{
        try {
            
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    deleteItemByID = async (req, res)=>{
        try {
            
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }
}

export default ItemControlller;