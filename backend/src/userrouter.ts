import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { Request } from "express";
import { SinginSchema, SingupSchema, Updateschema } from "./types";
import { AccountModel, UserModel } from "./db";
import {JWT_SECRET} from "./config"
import {authMiddleware} from "./middleware"
const userrouter=express.Router();
interface Authrequest extends Request{
    userId:string
}
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
    //@ts-ignore
    const hashed_password= bcrypt.hash(parseddata.data?.password,10)
    const user=await UserModel.create({
        firstname:parseddata.data?.firstname,
        lastname:parseddata.data?.lastname,
        password:hashed_password,
        email:parseddata.data?.email
    })
    const userId=user._id;
    await AccountModel.create({
        userId,
        balance: Math.round(1 + Math.random() * 10000)
    })


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

    })
    if(existingUser){
        //@ts-ignore
    const password=bcrypt.compare(parseddata.data?.password,existingUser.password)
    if(!password){
        res.json({
            message:"Incorrect password"
        })
        return 
    }
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

userrouter.put("/update", authMiddleware, async (req, res) => {
    const parseddata = Updateschema.safeParse(req.body);
    if (!parseddata || !parseddata.data) {
        return res.json({
            message: "Invalid credentials"
        });
    }

    await UserModel.updateOne(

        { _id: (req as Authrequest).userId }, // filter by user ID
        { $set: parseddata.data } // update fields
    );

    res.json({
        message: "Profile updated"
    });
});
userrouter.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await UserModel.find({
        $or: [
            {
                firstname: {
                    "$regex": filter,
                    "$options": "i"
                }
            },
            {
                lastname: {
                    "$regex": filter,
                    "$options": "i"
                }
            }
        ]
    });

    res.json({
        user: users.map(user => ({
            email: user.email,
            firstName: user.firstname,
            lastName: user.lastname,
            _id: user._id
        }))
    });
});

export=userrouter