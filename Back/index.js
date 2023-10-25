import express from "express"
//----------------------------------

const app = express()
app.use(express())
app.use(express.json());



//----------------------------------

app.listen(5052, ()=>{
    console.log("Listen on port 5052.")
})