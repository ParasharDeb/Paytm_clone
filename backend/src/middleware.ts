import {Request,Response,NextFunction } from "express";

const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

export const authMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers["authorization"] || ' ';

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(403).json({});
        return
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        //@ts-ignore
        req.userId = decoded.userId;

        next();
    } catch (err) {
        res.status(403).json({});
        return
    }
};
