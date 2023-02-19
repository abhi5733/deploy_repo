
const mongoose = require("mongoose")
require('dotenv').config()
mongoose.set("strictQuery" , false)

const connection = mongoose.connect("mongodb+srv://abhijeet:abhijeet@cluster0.eumbfwa.mongodb.net/mini?retryWrites=true&w=majority")
// mongodb://127.0.0.1:27017/react


module.exports =  {connection} 