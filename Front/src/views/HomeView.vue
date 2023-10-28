<template>
  <div>
    <nav class="navBar">
        <ul>
            <RouterLink to="/todos"> Tablero  </RouterLink>
        </ul>
    </nav>

    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TodosView from "./TodosView.vue";



export default {
    components:{
        TodosView,
    }
}
</script>

<style scoped>
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
    color:#62953B;
}


</style>