"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainrouter = void 0;
const express_1 = __importDefault(require("express"));
const userrouter_1 = __importDefault(require("./userrouter"));
const accountsrouter_1 = __importDefault(require("./accountsrouter"));
const mainrouter = express_1.default.Router();
exports.mainrouter = mainrouter;
mainrouter.use("/user", userrouter_1.default);
mainrouter.use("/accounts", accountsrouter_1.default);
