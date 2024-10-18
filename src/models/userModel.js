const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
        username : {
            type: String,
            required :  [true , "Please add the contact username"],
            unique: true
        },
        password : {
            type: String,
            required :  [true , "Please add the contact password"],
            unique: true
        },
        role : {
            type: String,
            required :   true ,
            enum : ["admin","manager","user"]
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model('User', userSchema )