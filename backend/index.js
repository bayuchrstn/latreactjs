import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected');
} catch(error){
    console.error(error);
}

app.use(cors({ origin:'http://localhost:3000',credentials:true,optionSuccessStatus:200 }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.listen(5000, ()=> console.log('Server run at port 5000'));