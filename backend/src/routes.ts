import express from "express"
import userrouter from "./userrouter";
import accountsrouter from "./accountsrouter";
const mainrouter=express.Router();
mainrouter.use("/user",userrouter);
mainrouter.use("/accounts",accountsrouter)
export{
    mainrouter
}