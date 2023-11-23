import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Role extends Model {}

Role.init(
  {
    name:{
        type: DT.STRING,
        allowNull: false,
        unique: true,
        validate:{
            notEmpty:{
                msg:"Rol can't be empty",
            },
            len: {
                
                args: [2],
                msg: "Min character: 2 ",
            },
        }
    },

  },{
    sequelize: connection,
    modelName: "Role",
    timestamps: false,
});

export default Role;