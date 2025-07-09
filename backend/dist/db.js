"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://parashardeb:isawunaked@cluster0.sgkt6.mongodb.net/Paytm");
const userSchema = new mongoose_1.default.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});
const UserModel = mongoose_1.default.model("User", userSchema);
exports.UserModel = UserModel;
