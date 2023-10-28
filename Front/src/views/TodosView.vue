<template>
    <body>
      <nav class="navBar">
        <ul>
          <RouterLink to="/"> Home </RouterLink>
        </ul>
        <RouterView />
      </nav>
      <div class="">
        <InputNewBoard @on-new-item="(name) => newBoard(name)"/>
      </div>
  
      <div class="boards-container">
        <div class="boards">
          <div class="board" @drop="onDrop($event, board)" @dragover.prevent @dragenter.prevent v-for="board in boards" :key="board.id">
            <div class="bar">
              <div class="tittle">{{board.name}}</div>
              <div class="crud">
                <button class="button" @click="removeBoard(board)" style="color:red;background-color: #191616; ">x</button>
                <button class="button image-button" @click="editName(board)" style="color: greenyellow;background-color: #191616;"></button>
              </div>
            </div>
            <InputNew @on-new-item="(text) => handleNewItem(text, board)"/>
            <div class="items">
              <div class="item" draggable="true" @dragstart="startDrag($event, board, item)" v-for="item in board.items" :key="item.id">
                <div class="text">{{item.title}}</div>
                <div class="crud">
                    <button class="button" @click="removeItem(board, item)">x</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </template>
  
  <script>
  import { RouterLink, RouterView } from 'vue-router'
  import { reactive } from 'vue';
  import InputNew from "./InputNew.vue";
  import InputNewBoard from "./InputNewBoard.vue";
  import { ref } from "vue"

  export default {
    components:{
        InputNew,InputNewBoard
    },
    data() {
      return {
        boards: reactive([
          {
            id: crypto.randomUUID(),
            name: "Bienvenido",
            items: [
              {
                id: crypto.randomUUID(),
                title: "Ejemplo"
              }
            ]
          }
        ])
      };
    },
    methods: {
      handleNewItem(text, board) {
        board.items.push({
          id: crypto.randomUUID(),
          title: text.value,
        });
      },
      newBoard(name){
        this.boards.push({
            id: crypto.randomUUID(),
            name: name.value,
            items: [],
          });
      },
      editName(board) {
        const name = prompt("New Name of Board");
        if (!!name) {
          board.name = name;
        }
      },
      startDrag(event, board, item) {
        event.dataTransfer.setData("text/plain", JSON.stringify({ boardId: board.id, itemId: item.id }));
      },
      onDrop(event, destiny) {
        const { boardId, itemId } = JSON.parse(event.dataTransfer.getData("text/plain"));
        const originalBoard = this.boards.find(item => item.id == boardId);
        const originalItem = originalBoard.items.find(item => item.id == itemId);
        destiny.items.push({ ...originalItem });
        originalBoard.items = originalBoard.items.filter((item) => item != originalItem);
      },
      removeItem(board, item) {
        // Encuentra el índice del elemento en la lista de items del tablero
        const index = board.items.findIndex(i => i.id === item.id);
        if (index !== -1) {
          // Elimina el elemento del array
          board.items.splice(index, 1);
        }
      },
      removeBoard(board){
        // Encuentra el índice del elemento en la lista de items del tablero
        const index = this.boards.findIndex(i => i.id === board.id);
        if (index !== -1) {
          // Elimina el elemento del array
          this.boards.splice(index, 1);
        }
      }
    }  
  }
  </script>
  
  <style scoped>

  a{
    margin-right: 15px;
    text-decoration: none;
    color: white;
    transition: ease-in-out  .2s
  }

  a:hover {
    color:#62953B;
  }
  .boards {
    display: flex;
    gap: 10px;
  }
  
  .board {
    height: 100%;
    background: #191616;
    padding: 10px;
    border-radius: 10px;
  }
  .navBar {
    height: 30%;
    background: #191616;
    padding: 10px;
    border-radius: 10px;
    margin-bottom:10px;
  }
  
  .items {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .item {
    gap: 5px;
    display: flex;
    background-color: #000000;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
  }

  .text{
    display: inline-block;
    width: 95%;
    justify-content: center;
    align-items: center;  
  }

  .crud{
    justify-content: center;
  }
  .button{
    display:flex;
    margin: 3px;
    width: 5%;
    height: 15px;
    justify-content: center;
    border: none; 
    cursor: pointer; 
    background-color: #000000 ;
    color:red
  }

  .tittle{
    display: inline-block;
    width: 95%;
    align-items: center;   
    text-align: center;
}

.bar{
  display: flex;
}

.image-button {
  background-image: url('../assets/refresh.png');
  background-size: cover; /* Escalar la imagen para ajustarse al tamaño del botón */
  background-repeat: no-repeat; /* Evitar que se repita la imagen */
  width: 5%;
}


/* nav buttons */


  </style>