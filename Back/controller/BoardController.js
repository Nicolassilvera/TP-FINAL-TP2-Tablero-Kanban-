import {Board} from "../Models/index.js";

class BoardController {
    constructor(){}

    getAllBoards = async (req, res)=>{
        try {
            const boards = await Board.findAll({
                attibutes:["name"]
            }); 
            res.status(200).send({success:true, message:"Todos los tableros", data: boards});
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    getBoardById = async (req, res)=>{
        try {
            
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    createBoard = async (req, res)=>{
        try {
            
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    updateBoard = async (req, res)=>{
        try {
            
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    deleteBoardById = async (req, res)=>{
        try {
            
        } catch (error) {
            res.status(400).send({success:false, message: error.message});           
        }
    }
}

export default BoardController;