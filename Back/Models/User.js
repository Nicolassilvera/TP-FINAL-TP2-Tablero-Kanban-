import {DataTypes as DT, Model} from "sequelize"
import connection from "../connection/connection.js"
import bcrypt from "bcrypt"

class User extends Model{
    validatePassword = async (passwordTextPlain)=>{
        const validate = await bcrypt.compare(passwordTextPlain, this.password);
        return validate;
    }
}

User.init({
    name:{
        type: DT.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"Name can't be empty"
            },
            len: {
                
                args: [6],
                msg: "Min character: 6 ",
            },
        }
    },
    email:{
        type: DT.STRING,
        unique:true,
        allowNull:false,
        validate:{
            isEmail:{
                msg: "Invalid Email"
            },
            notEmpty:{
                msg:"Name can't be empty"
            },
        }
    },
    password:{
        type: DT.STRING,
        allowNull: false,
        
    },
    salt:{
        type: DT.STRING
    }
},{
    sequelize: connection,
    modelName: "User",
    timestamps:false,
});

User.beforeCreate(async (user)=>{
    const salt = await bcrypt.genSalt();
    user.salt = salt;
    
    const hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;
});
     
export default User;                    