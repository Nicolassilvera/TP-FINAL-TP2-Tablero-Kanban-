import { Router } from "express";
import ItemControlller from "../controller/ItemController";

class ItemControlller {
    constructor(){}
    
    getAllItems = async (req, res) =>{
        try {
            
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    getItemById = async (req, res) =>{
        try {
            
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    createItem = async (req, res) =>{
        try {
        
        } catch (error) {
            res.status(400).send({success: false, message:error.message})
        }
    }

    updateItem = async (req, res) =>{
        try {
            
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    deleteItemById = async (req, res) =>{
        try {
            
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }


}

export default ItemControlller;