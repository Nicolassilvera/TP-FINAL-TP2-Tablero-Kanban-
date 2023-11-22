import {DataTypes as DT, Model} from "sequelize";
import connection from "../connection/connection.js";

class Board extends Model{}

Board.init({
    name:{
        type: DT.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Name can't be empty"
            },
            min: 1, 
        }
    },

},{
    sequelize: connection,
    modelName: "User",
    timestamps:false,
});

export default Board;