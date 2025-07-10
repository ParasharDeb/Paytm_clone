"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware");
const db_1 = require("./db");
const mongoose_1 = __importDefault(require("mongoose"));
const accountsrouter = express_1.default.Router();
accountsrouter.get("/balance", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const account = yield db_1.AccountModel.findOne({
        //@ts-ignore
        userId: req.userId
    });
    if (!account) {
        res.status(411).json({
            message: "Incorrect credentials"
        });
        return;
    }
    res.json({
        balance: account.balance
    });
}));
accountsrouter.post("/transfer", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    session.startTransaction();
    const { amount, to } = req.body;
    //@ts-ignore
    const account = yield db_1.AccountModel.findOne({ userId: req.userId }).session(session);
    if (!account || account.balance < amount) {
        yield session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }
    const toAccount = yield db_1.AccountModel.findOne({ userId: to }).session(session);
    if (!toAccount) {
        yield session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }
    // @ts-ignore
    yield db_1.AccountModel.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    yield db_1.AccountModel.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);
    yield session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
}));
module.exports = accountsrouter;
