import { NextFunction,Request,Response } from "express";
import jwt, { decode }  from "jsonwebtoken";
import { JWT_SECRET } from "./config";
export const middleware=(req:Request,res:Response,next:NextFunction)=>{
    const token=req.headers["authorization"]|| " "
    const decoded=jwt.verify(token,JWT_SECRET)
    if(decoded){
        //@ts-ignore                ***figure this out
        req.userId=decoded._id
    next()
    }
    else{
    res.json({
            message:"Incorrect username or password"
        })
    }
    
    }
    