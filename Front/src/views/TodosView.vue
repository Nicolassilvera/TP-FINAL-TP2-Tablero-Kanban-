<template>
    <body>
        <nav>
            <ul>
                <li><a href="#" @click.prevent="handleNewBoard"> Create Board </a></li>
            </ul>
        </nav>
     
        <div class="boards-container">
            <div class="boards">
                <div class="board" @drop="onDrop($event, board)" @dragover.prevent @dragenter.prevent v-for="board in boards" :key="board.id">
                    <div>{{board.name}}</div>
                    <InputNew @on-new-item="(text) => handleNewItem(text, board)"/>
                    <div class="items">
                        <div class="item" draggable="true" @dragstart="startDrag($event, board, item)" v-for="item in board.items" :key="item.id">
                            <div>{{item.title}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script setup>
import { reactive } from 'vue';
import InputNew from "./InputNew.vue"
let boards = reactive([
    {
        id: crypto.randomUUID(),
        name:"tablero 1",
        items:[
            {
                id: crypto.randomUUID(),
                title: "Feature de archivos"
            },
            {
                id: crypto.randomUUID(),
                title: "Resolver bug"
            }
        ]          
    },
    {
        id: crypto.randomUUID(),
        name:"tablero 2",
        items:[
            {
                id: crypto.randomUUID(),
                title: "Mandar reporte"
            },
            {
                id: crypto.randomUUID(),
                title: "Code review"
            }
        ]          
    } 
]);

function handleNewItem(text, board ){
    // console.log(text.value, board.id, board.name);
    board.items.push({
        id: crypto.randomUUID(),
        title: text.value,
    })
}

function handleNewBoard(){
    const name = prompt("Name of the board")
    if(!!name){
        boards.push({
            id: crypto.randomUUID(),
            name: name,
            items:[],          
    })
    }
}

function startDrag(event, board, item){
    event.dataTransfer.setData("text/plain", JSON.stringify({boardId:board.id,itemId: item.id}));
}

function onDrop(event, destiny){
    const {boardId, itemId} = JSON.parse(event.dataTransfer.getData("text/plain"));
    //console.log(boardId, itemId);
    const originalBoard = boards.find(item => item.id == boardId);
    const originalItem = originalBoard.items.find(item => item.id == itemId);
    //console.log(originalBoard.name , originalItem.title);
    destiny.items.push({...originalItem});
    originalBoard.items = originalBoard.items.filter((item)=> item != originalItem)
}
</script>

<style scoped>

.boards{
    display: flex;
    gap:10px;
}
.board{
    background: #efefef;
    padding: 10px;
    border-radius: 10px;
}

.items{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.item{
    background-color: white;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
}
</style>