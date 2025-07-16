import {Request,Response,NextFunction } from "express";

import { JWT_SECRET } from "./config";
import jwt from "jsonwebtoken"
interface UpdatedAuth extends Request{
    userId:string
}
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as {userId :string};
        (req as UpdatedAuth).userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
}