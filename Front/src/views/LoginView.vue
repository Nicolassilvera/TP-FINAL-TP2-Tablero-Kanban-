<template>
    <div>
        <input v-model="user.email" label="User" type="email"/>
        <input v-model="user.password" laberl="Passsword" type="password"/>
        <button @click="loginForm"></button>
    </div>
</template>

<script>
import { storeToRefs } from "pinia"
import { userStore } from "../stores/user-store.js"

export default { 
    setup(){
        const store = userStore();
        const { login } = storeToRefs(store); 
        return { login };
    },
    data(){
        return{
            user: {}
        }
    },
    methods:{
        loginForm(){

        }
    }
}
</script>

<style>

</style>