"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const accountsrouter = express_1.default.Router();
accountsrouter.post("/balance", (req, res) => {
    res.send("hello");
});
module.exports = accountsrouter;
