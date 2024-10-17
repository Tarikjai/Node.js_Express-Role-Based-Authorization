const express = require('express')
const doten = require('dotenv').config()
const app = express()




//middleware to acces JSON from req.body
app.use(express.json())

//start the server
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})