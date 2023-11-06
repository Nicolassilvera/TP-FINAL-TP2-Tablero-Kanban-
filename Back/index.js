import express from "express"
import cors from "cors"
import jsonwebtoken from "jsonwebtoken"
import router from "./routes/router.js"
//------------------------------------------------------------------

const app = express();
app.use(express());
app.use(cors());
app.use(express.json());
app.use("/api", router)



//------------------------------------------------------------------

app.listen(5052, ()=>{
    console.log("Listen on port 5052.")
})