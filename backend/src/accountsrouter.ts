import express from "express"
const accountsrouter=express.Router();
accountsrouter.post("/balance",(req,res)=>{
    res.send("hello")
})
export=accountsrouter