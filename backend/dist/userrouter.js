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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const types_1 = require("./types");
const db_1 = require("./db");
const config_1 = require("./config");
const userrouter = express_1.default.Router();
userrouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const parseddata = types_1.SingupSchema.safeParse(req.body);
    if (!parseddata) {
        res.status(411).json({
            message: "Invalid input"
        });
    }
    const existinguser = yield db_1.UserModel.findOne({ email: (_a = parseddata.data) === null || _a === void 0 ? void 0 : _a.email });
    if (existinguser) {
        res.status(411).json({
            message: "Email already registered"
        });
    }
    yield db_1.UserModel.create({
        firstname: (_b = parseddata.data) === null || _b === void 0 ? void 0 : _b.firstname,
        lastname: (_c = parseddata.data) === null || _c === void 0 ? void 0 : _c.lastname,
        password: (_d = parseddata.data) === null || _d === void 0 ? void 0 : _d.password,
        email: (_e = parseddata.data) === null || _e === void 0 ? void 0 : _e.email
    });
    res.json({
        message: "You have signed up succesfully"
    });
}));
userrouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const parseddata = types_1.SinginSchema.safeParse(req.body);
    if (!parseddata) {
        res.status(411).json({
            message: "Invalid input"
        });
    }
    const existingUser = yield db_1.UserModel.findOne({
        email: (_a = parseddata.data) === null || _a === void 0 ? void 0 : _a.email,
        password: (_b = parseddata.data) === null || _b === void 0 ? void 0 : _b.password
    });
    if (existingUser) {
        const token = jsonwebtoken_1.default.sign({
            userId: existingUser.email
        }, config_1.JWT_SECRET);
        res.json({
            token: token
        });
    }
    else {
        res.status(404).json({
            message: "User not Found"
        });
    }
}));
module.exports = userrouter;
