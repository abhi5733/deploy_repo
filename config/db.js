
const mongoose = require("mongoose")
require('dotenv').config()
mongoose.set("strictQuery" , false)

const connection = mongoose.connect(process.env.url)
// mongodb://127.0.0.1:27017/react


module.exports =  {connection} 