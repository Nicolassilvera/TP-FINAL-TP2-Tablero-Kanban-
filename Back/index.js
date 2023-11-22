import express from "express"
import cors from "cors"
import router from "./routes/router.js"


const app = express();
app.use(express());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router)

await connection.sync({force:false}).then(()=>{
    app.listen(5052, ()=>{
        console.log("Listen on port 5052.")
    });
});