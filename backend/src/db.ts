import mongoose from "mongoose";
mongoose.connect("mongodb+srv://parashardeb:isawunaked@cluster0.sgkt6.mongodb.net/Paytm")
const userSchema = new mongoose.Schema({
    firstname:{type:String, required:true},
    lastname:{type:String,required:true},
    password: {type:String,required:true},
    email:{type:String,required:true,unique:true}
})
const accountSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    balance: { type: Number, required: true }
})
const UserModel=mongoose.model("User",userSchema)
const AccountModel=mongoose.model("Account",accountSchema)
export {UserModel,AccountModel}