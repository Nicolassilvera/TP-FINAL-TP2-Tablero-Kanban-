import axios from "axios"
const apiLogin = axios.create({
    baseURL:"http://localhost:5052/api/login",
    headers:{
        Accept: "application/json",
        "Content-type":"application/json"
    }
});

export default{
    async login(user){
        return await apiLogin.post("/", user);
    }
}