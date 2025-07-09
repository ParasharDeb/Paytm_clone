import  express from "express";

import cors from "cors"
import { mainrouter } from "./routes";

const app=express();

app.use(express.json());

app.use(cors())

const router=express.Router()


app.use("/api/v1",mainrouter)

app.listen(3000);