import axios from "axios"
const apiUser = axios.create({
    baseURL:"http://localhost:5052/api/login",
    headers:{
        Accept: "application/json",
        "Content-type":"application/json"
    }
});

export default{
    async login(user){
        return await apiUser.post("/", user);
    }
}