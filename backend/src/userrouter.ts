import express from "express"
import jwt from "jsonwebtoken"
import { SinginSchema, SingupSchema } from "./types";
import { UserModel } from "./db";
import {JWT_SECRET} from "./config"
const userrouter=express.Router();
userrouter.post("/signup",async(req,res)=>{
    const parseddata = SingupSchema.safeParse(req.body);
    if(!parseddata){
        res.status(411).json({
            message:"Invalid input"
        })
    }
    const existinguser= await UserModel.findOne({email:parseddata.data?.email})
    if(existinguser){
        res.status(411).json({
            message:"Email already registered"
        })
    }
    const user=await UserModel.create({
        firstname:parseddata.data?.firstname,
        lastname:parseddata.data?.lastname,
        password:parseddata.data?.password,
        email:parseddata.data?.email
    })
    const userId=user._id;
    const token=jwt.sign({
        id:userId
    },JWT_SECRET)
    res.json({
        token:token
    })
})
userrouter.post("/signin",async(req,res)=>{
    const parseddata=SinginSchema.safeParse(req.body)
    if(!parseddata){
        res.status(411).json({
            message:"Invalid input"
        })
    }
    const existingUser=await UserModel.findOne({
        email:parseddata.data?.email,
        password:parseddata.data?.password
    })
    if(existingUser){
    const token=jwt.sign({
          userId:existingUser._id  
        },JWT_SECRET)
        res.json({
        token: token
    })
    }
    else{
        res.status(404).json({
            message:"User not Found"
        })
    }
})
export=userrouter