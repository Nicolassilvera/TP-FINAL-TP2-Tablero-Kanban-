import {DataTypes as DT, Model} from "sequelize";
import connection from "../connection/connection.js";

class Item extends Model{}

Item.init({
    titulo:{
        type: DT.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Name can't be empty",
            },
            min: 5,
        }
    },

},{
    sequelize: connection,
    modelName: "User",
    timestamps:false,
});


export default Item;