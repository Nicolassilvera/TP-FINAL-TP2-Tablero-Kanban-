import {Board} from "../Models/index.js";

class BoardController {
    constructor(){}

    getAllBoards = async (req, res)=>{
        try {
            const boards = await Board.findAll(); 
            if(!boards) throw new Error("Boards not found");
            res.status(200).send({success:true, message:"All Boards", data: boards});
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    getBoardById = async (req, res)=>{
        try {
            const {id} = req.params;
            if(!id) throw new Error("Board does't exist");
            const board = await Board.findByPk(id);
            if(board == null) throw new Error("Board not found");
            res.status(200).send({success:true, message:"Board found", data: board});
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    createBoard = async (req, res)=>{
        try {
            const {name} = req.body;
            if(!name) throw new Error("Name can't be null or empty ");
            const board = await Board.create(name);
            res.status(200).send({success:true, message:"Board Created", data: board});
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    updateBoard = async (req, res)=>{
        try { 
            const {id} = req.params;
            const {name} = req.body;
            const board = await Board.update({name},{
                where:{
                    id: id
                }
            });
            res.status(200).send({success:true, message:"Board modified", data: board});
        } catch (error) {
            res.status(400).send({success:false, message: error.message});
        }
    }

    deleteBoardById = async (req, res)=>{
        try {
            const {id} = req.params; 
            if(!id) throw new Error("Board does't exist");
            const deletedBoard = await Board.destroy({ 
                where: { 
                    id: id 
                } 
            });
            if(deletedBoard == null) throw new Error("Board not found");
            res.status(200).send({ success: true, message: "Board removed" });
        } catch (error) {
            res.status(400).send({success:false, message: error.message});           
        }
    }
}

export default BoardController;