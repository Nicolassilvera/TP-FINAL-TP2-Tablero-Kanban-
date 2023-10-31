<template>
    <body>
      <nav class="navBar">
        <ul>
          <RouterLink to="/"> Home </RouterLink>
        </ul>
        <RouterView />
      </nav>
      <div class="board-crud-container">
        <div class="board input-board-name" style="background-color: #0F67B0;">
          <div class="tittle">New Table</div>
          <InputNewBoard @on-new-board="(name) => newBoard(name)"/>
        </div>
        <div class="board-crud-options">
          <button class="board save-all" @click="saveAll">
            <a style="margin-right: 0px;">Save All</a>
          </button> 
          <button class="board delete-all" @click="deleteAll">
            <a style="margin-right: 0px;">Delete All</a>
          </button> 

        </div>
      </div>
      <div class="boards-container">
        <div class="boards">
          <div class="board" @drop="onDrop($event, board)" @dragover.prevent @dragenter.prevent v-for="board in boards" :key="board.id">
            <div class="bar">
              <div class="tittle">{{board.name}}</div>
              <div class="crud">
                <button class="button" @click="removeBoard(board.id)" style="color:red;background-color: #191616; ">x</button>
                <button class="button image-button" @click="editName(board)" style="color: greenyellow;background-color: #191616;"></button>
              </div>
            </div>
            <InputNew @on-new-item="(text) => newItem(text, board)"/>
            <div class="items">
              <div class="item" draggable="true" @dragstart="startDrag($event, board, item)" v-for="item in board.items" :key="item.id">
                <div class="text">{{item.title}}</div>
                <div class="crud">
                    <button class="button" @click="removeItem(board, item.id)" style="color:red;">x</button>
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

  import axios from "axios"

  export default {
    components:{
        InputNew,InputNewBoard
    },
    data() {
      return {
        boards:[]
      };
    },
    methods: {
      async saveAll(){
        try {
          await axios.put("http://localhost:5052/boards", this.boards);
        } catch (error) {
          console.log(error)
        }
      },
      async deleteAll(){
        try {
          this.boards.splice(0);
          await axios.delete("http://localhost:5052/boards");
        } catch (error) {
          console.log(error)
        }
      },
      async saveNewBoard(newBoard){
        try {
            await axios.post("http://localhost:5052/boards", newBoard);
          this.loadData()
        } catch (error) {
          console.log(error);
        }
      },
      async loadData(){
        try {
          let rta = await axios.get("http://localhost:5052/boards");
          this.boards = rta.data;          
        } catch (error) {
          console.log(error);
        }
      },
       async newItem(text, board) {
        board.items.push({
          id: crypto.randomUUID(),
          title: text.value,
        });
        try {
          await axios.put("http://localhost:5052/boards/" + board.id, board );
          await this.loadData();
        } catch (error) {
          console.log(error);
        }

      },
      newBoard(name){
        const newBoard = {id:crypto.randomUUID(), name: name.value, items:[]}
        this.boards.push(newBoard);
        this.saveNewBoard(newBoard);
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
      async onDrop(event, destiny) {
        const { boardId, itemId } = JSON.parse(event.dataTransfer.getData("text/plain"));
        const originalBoard = this.boards.find(item => item.id == boardId);
        const originalItem = originalBoard.items.find(item => item.id == itemId);
        destiny.items.push({ ...originalItem });
        originalBoard.items = originalBoard.items.filter((item) => item != originalItem);
        await this.saveAll();
      },
      // preguntar en clase como resolver con .delete
      async removeItem(board, itemID) {
        try {
          const index = board.items.findIndex(i => i.id === itemID);
          if (index !== -1) {
            board.items.splice(index, 1);
            await axios.put("http://localhost:5052/boards/" + board.id , board );
          }
        } catch (error) {
          console.log(error)
        }
      },
      async removeBoard(id){
        try {
          const index = this.boards.findIndex(i => i.id == id);
          if (index !== -1) {
          // Elimina el elemento del array
          this.boards.splice(index, 1);
          await axios.delete("http://localhost:5052/boards/" + id);
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
    mounted(){
      this.loadData();
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

.input-board-name{
  width:15%;
  margin-right: 10px;
}

.board-crud-container{
  display:flex;
  margin-bottom: 45px;
  margin-top:20px;
}

.board-crud-options{
  display: flex;
  margin-right: 10px;
}

.delete-all{
  margin-right: 15px;
  background-color: #A93226;
  display: block;
}

.save-all{
  margin-right: 15px;
  background-color: #283747;
  display: block;
}

/* nav buttons */


  </style>