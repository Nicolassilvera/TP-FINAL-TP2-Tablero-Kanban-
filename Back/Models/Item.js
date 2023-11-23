import {DataTypes as DT, Model} from "sequelize";
import connection from "../connection/connection.js";

class Item extends Model{}

Item.init({
    tittle:{
        type: DT.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Name can't be empty",
            },
            len: {
                
                args: [2],
                msg: "Min character: 2 ",
            },
        }
    },

},{
    sequelize: connection,
    modelName: "Item",
    timestamps:false,
});


export default Item;