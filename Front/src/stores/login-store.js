import { defineStore } from "pinia";
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
                if(data.status == 200) {
                    this.estaLogueado = true;
                    this.usuario.email = user.email;
                    localStorage.setItem('usuario',JSON.stringify(
                    {email:user.email, token: data.data.token}) )
                } else {
                    this.estaLogeado = false;
                }
            } catch(e) {
            console.log(e);
            }
        }
    },
    getters:{

    }
});