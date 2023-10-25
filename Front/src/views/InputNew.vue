<template>
    <form action="" @submit.prevent="handleSubmit">
        <input type="text" v-model="text">
    </form>    
</template>

<script setup>
import { ref } from "vue"

const text = ref("");
const emits = defineEmits(["onNewItem"]);

function handleSubmit(){
    if(text != ""){
        // mandar a llamar el emit
        emits("onNewItem", text);
        text.value = "";
    }
}
</script>

<style scoped>
</style>