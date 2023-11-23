import Board from "./Board.js"
import Item from "./Item.js"
import User from "./User.js";
import Role from "./Role.js"

Board.hasMany(Item, {
    foreignKey:"board_id"
});
Item.belongsTo(Board, {
    foreignKey:"board_id"
});

Role.hasMany(User, {
    foreignKey:"role_id"
})
User.belongsTo(Role, {
    foreignKey:"role_id"
});



export {Board, Item, User, Role};