import Board from "./Board.js"
import Item from "./Item.js"

Board.hasMany(Item, {
    foreignKey:"board_id"
});
Item.belongsTo(Board, {
    foreignKey:"board_id"
});

export {Board, Item};