import express from "express"
import { authMiddleware } from "./middleware";
import { AccountModel } from "./db";
import mongoose from "mongoose";
const accountsrouter=express.Router();
accountsrouter.get("/balance", authMiddleware, async (req, res) => {
    const account = await AccountModel.findOne({
        //@ts-ignore
        userId: req.userId
    });
    if(!account){
        res.status(411).json({
            message:"Incorrect credentials"
        })
        return
    }
    res.json({
        balance: account.balance
    })
});
accountsrouter.post("/transfer",authMiddleware,async(req,res)=>{
    const session = await mongoose.startSession();
    session.startTransaction()
    session.startTransaction();
    const { amount, to } = req.body;
    //@ts-ignore
     const account = await AccountModel.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await AccountModel.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // @ts-ignore
    await AccountModel.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await AccountModel.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
});

export=accountsrouter