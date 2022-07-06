import mongoose from "mongoose";
import {config} from "dotenv";
import cors from "cors";
import express from "express";
import { accountRouter } from "./controllers/account.js"

config();

const app = express();
app.use(cors());

const uri = process.env.MONGODB_URI;

const PORT = process.env.PORT || 3001;

mongoose.connect(uri, () => {
    app.use(express.json());

    app.use(accountRouter);

    app.listen(PORT, () => {
        console.log(`Connected to port ${PORT}`);
    })
});