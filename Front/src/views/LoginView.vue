<template>
    <body>
        <div class="container">
            <span class="title">Login</span>
            <br />
            <div class="subscribe-form">
                <input v-model="user.email" type="email" placeholder="Email" class="subscribe-input">
            </div>
            <br />
            <div class="subscribe-form">
                <input v-model="user.password" type="password" placeholder="password" class="subscribe-input">
                <button @click="loginForm" class="subscribe-btn">Submit</button>
            </div>
        </div>
    </body>
</template>

<script>
import { storeToRefs } from "pinia"
import { loginStore } from "../stores/login-store.js"

export default {
    setup() {
        const store = loginStore();
        const { estaLogueado } = storeToRefs(store);
        const { login } = store;
        return { login, estaLogueado };
    },
    data() {
        return {
            user: {}
        }
    },
    methods: {
        async loginForm() {
            await this.login(this.user);
            console.log(this.estaLogueado)
            if (this.estaLogueado) {
                this.$router.push("/");
            } else {

            }
        }
    }
}
</script>

<style scoped>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    --color: rgba(114, 114, 114, 0.3);
    background-color: #191a1a;
    background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent),
        linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent);
    background-size: 55px 55px;
}

.container {
    justify-content: center;
    align-items: center;

}

/* ------------------------------------------------------- */

.title {
    text-align: center;
    font-weight: 700;
    font-size: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
}


.subscribe-form {
    --main-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 35px;
    border-radius: 5px;
    box-shadow: 4px 4px var(--main-color);
}

.subscribe-input {
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    border: 2px solid var(--main-color);
    border-right: 0;
    border-radius: 5px 0 0 5px;
    font-size: 15px;
    font-weight: 500;
    color: var(--font-color);
    background: var(--bg-color);
}

.subscribe-btn {
    width: 100px;
    height: 100%;
    border: 2px solid var(--main-focus);
    border-radius: 0 5px 5px 0;
    background-color: var(--main-focus);
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 500;
    color: var(--bg-color);
    cursor: pointer;
}

.subscribe-input:focus {
    outline: none;
    border: 2px solid var(--main-focus);
    border-right: 0;
}
</style>