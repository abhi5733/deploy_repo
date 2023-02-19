
 const express = require("express")

 const app = express()
 const cors = require("cors")
 const  {connection}  = require("./config/db")
 const  {userRoute} = require("./route/userRoute")
 const { notesRouter } = require("./route/notes")
 const {authenticate} = require("./middleware/authenticate")
app.use(express.json())
app.use(cors())

app.use("/user" , userRoute)
app.use(authenticate)
app.use("/notes" , notesRouter)

 app.listen(7300, async ()=>{
    try{
        await connection
        console.log("connected to db")
    }catch(err){
        console.log(err)
    }
    console.log("server started at 7300")
 })

