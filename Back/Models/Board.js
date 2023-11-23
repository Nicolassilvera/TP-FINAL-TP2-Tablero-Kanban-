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
            len: {
                args: [2],
                msg: "Min characters: 2",
            }
        }
    },

},{
    sequelize: connection,
    modelName: "Board",
    timestamps:false,
});

export default Board;