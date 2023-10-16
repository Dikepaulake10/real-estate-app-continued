import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        requried:true,
        uniique:true,

    },
    email:{
        type:String,
        requried:true,
        uniique:true,

    },
    password:{
        type:String,
        requried:true,
     
    }
},{timestamps:true})




const User = mongoose.model('User', userSchema);

export default User;