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
const middleware_1 = require("./middleware");
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
    const user = yield db_1.UserModel.create({
        firstname: (_b = parseddata.data) === null || _b === void 0 ? void 0 : _b.firstname,
        lastname: (_c = parseddata.data) === null || _c === void 0 ? void 0 : _c.lastname,
        password: (_d = parseddata.data) === null || _d === void 0 ? void 0 : _d.password,
        email: (_e = parseddata.data) === null || _e === void 0 ? void 0 : _e.email
    });
    const userId = user._id;
    yield db_1.AccountModel.create({
        userId,
        balance: 1 + Math.random() * 10000
    });
    const token = jsonwebtoken_1.default.sign({
        id: userId
    }, config_1.JWT_SECRET);
    res.json({
        token: token
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
            userId: existingUser._id
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
userrouter.put("/update", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parseddata = types_1.Updateschema.safeParse(req.body);
    if (!parseddata || !parseddata.data) {
        return res.json({
            message: "Invalid credentials"
        });
    }
    yield db_1.UserModel.updateOne(
    //@ts-ignore
    { _id: req.userId }, // filter by user ID
    { $set: parseddata.data } // update fields
    );
    res.json({
        message: "Profile updated"
    });
}));
userrouter.get("/bulk", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = req.query.filter || "";
    const users = yield db_1.UserModel.find({
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
}));
module.exports = userrouter;
