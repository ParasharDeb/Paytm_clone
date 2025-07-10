"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Updateschema = exports.SinginSchema = exports.SingupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.SingupSchema = zod_1.default.object({
    firstname: zod_1.default.string().min(3).max(50),
    lastname: zod_1.default.string().max(50).min(3),
    password: zod_1.default.string(),
    email: zod_1.default.string()
});
exports.SinginSchema = zod_1.default.object({
    email: zod_1.default.string().min(3).max(1000),
    password: zod_1.default.string(),
});
exports.Updateschema = zod_1.default.object({
    firstname: zod_1.default.string().min(3).max(50),
    lastname: zod_1.default.string().max(50).min(3),
    password: zod_1.default.string()
});
