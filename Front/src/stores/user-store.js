import { defineStore } from "pinia";
import axios from "axios";
import appLogin from "../service/app-login.js"
export const loginStore = defineStore("login", {
    state:() =>{
        return {
            usuario:{},
            estaLogueado: false
        }
    },
    actions: {
        async login(user) {
            try {
                const data = await appLogin.login(user);
                console.log(data);
                if(datos.status == 200) {
                    this.estaLogeado = true;
                    this.usuario.email = usuario.email;
                    localStorage.setItem('usuario',JSON.stringify(
                    {email:usuario.email, token: datos.data.token}) )
                } else {
                    this.estaLogeado = false;
                }
            } catch(e) {
            console.log(e);
            }
        }
    },
    getters:{
        getBoards: (state) => state.boards
    }
});