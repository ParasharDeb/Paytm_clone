import mongoose from "mongoose";
mongoose.connect("mongodb+srv://parashardeb:isawunaked@cluster0.sgkt6.mongodb.net/Paytm")
const userSchema = new mongoose.Schema({
    firstname:{type:String, required:true},
    lastname:{type:String,required:true},
    password: {type:String,required:true},
    email:{type:String,required:true,unique:true}
})
const UserModel=mongoose.model("User",userSchema)
export {UserModel}