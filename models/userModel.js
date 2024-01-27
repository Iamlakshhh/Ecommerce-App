import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true        //this is for unique email evry time 
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true});     //timestamp is used for saving the time when user logedin 


export default  mongoose.model('users',userSchema)