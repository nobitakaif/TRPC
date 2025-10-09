import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email : { type : String, required : true, unique : true},
    password : { type : String , required : true}
})

const todoSchema = new Schema({
    title : {type : String},
    description : String,
    done : Boolean
})

export const UserModel = mongoose.model('user',userSchema)
export const TodoModel = mongoose.model('todo',todoSchema)

