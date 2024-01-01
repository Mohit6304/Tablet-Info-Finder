const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name: String,
    email: {
        type:String,
        required:true,
        unique:true,
    },
    password:String,
    role: {
        type: String,
        default: 'user', // Default role is user
    },

})

const UserModel=mongoose.model('user',userSchema);

module.exports=UserModel;

