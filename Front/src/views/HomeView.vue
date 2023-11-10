<template>
  <body>
    <nav class="navBar">
        <ul>
          <RouterLink to="/login" v-if="!estaLogueado"> Login </RouterLink>           
          <RouterLink to="/todos" v-if="estaLogueado"> Tableros </RouterLink>           
        </ul>
    </nav>
    <RouterView />
  </body>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TodosView from "./TodosView.vue";
import LoginView from "./LoginView.vue";
import { storeToRefs } from "pinia"
import { loginStore } from "../stores/login-store.js"

export default {
    components:{
        TodosView,
    },
    setup(){
      const store = loginStore();
        const { estaLogueado } = storeToRefs(store); 
        const { login } = store; 
        return { login, estaLogueado};
    }
}
</script>

<style scoped>

body{
  --color: rgba(114, 114, 114, 0.3);
  background-color: #191a1a;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
      linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
  background-size: 55px 55px;
}

.navBar {
    height: 30%;
    background: #191616;
    padding: 10px;
    border-radius: 10px;
    margin-bottom:10px;
  }

a{
    margin-right: 15px;
    text-decoration: none;
    color: white;
    transition: ease-in-out  .2s
}

a:hover {
    color:#2d8cf0;
}


</style>