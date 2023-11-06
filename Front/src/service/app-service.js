import axios from "axios"
const apiClient = axios.create({
    baseURL:"http://localhost:5052/api",
    headers:{
        Accept: "application/json",
        "Content-type":"application/json"
    }
});

export default {
    async getBoards(){
        const rta = await apiClient.get("/boards");
        return rta.data;
    },
    async deleteAll(){
        return await apiClient.delete("/boards");
    },
    async saveAll(board){
        return await apiClient.put("/boards", board);
    },
    async saveNewBoard(newBoard){
        const rta = await apiCliente.post("/boards", newBoard);
        return rta;
    },
    async newItem(board){
        return  await apiClient.put("/boards/" + board.id, board);
    },
    async removeItem(board){
        return  await apiClient.put("/boards/" + board.id, board);
    },
    async removeBoard(id){
        return await apiClient.delete("/boards/" + id);
    },
    async editName(board){
        return await apiClient.put("/boards/" + board.id , board);
    }
}    



