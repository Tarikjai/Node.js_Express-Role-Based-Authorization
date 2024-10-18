const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const  register = async (req,res)=> {
    try {
        const {username, password, role} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await new User({username, password:hashedPassword, role})
        await newUser.save()
        res
        .status(201)
        .json({message : `User registerd with username ${newUser.username}`})
    } catch (error) {
        res.status(500).json({message:'something wrong'})
    }
    
}


const login = async (req,res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        if (!user){
            res.status(400).json({message :"User not found"})
        }
        const isMatch = await bcrypt.compare(password , user.password)
        if (!isMatch) {
            res.status(400).json({message :"invalid credential"})
        }

        const token = jwt.sign(
            {id: user._id , role: user.role},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        )
        res.status(200).json({"access_token": token})
        
    } catch (error) {
        res.status(500).json({message:'something wrong'})
    }
    
}

module.exports = {register , login}