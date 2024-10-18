const express = require('express')
const doten = require('dotenv').config()
const dbConnect = require('./config/dbConnect')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const app = express()


dbConnect()

//middleware to acces JSON from req.body
app.use(express.json())

//Routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)


//start the server
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})