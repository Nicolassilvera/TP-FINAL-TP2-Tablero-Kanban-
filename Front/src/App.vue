<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TodosView from './views/TodosView.vue';
</script>

<template>
  <div>
    <RouterLink to="/todos"> Todos  </RouterLink>

    <RouterView />
  </div>
</template>

<style scoped>

</style>
