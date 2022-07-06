import mongoose from "mongoose";

const account = new mongoose.Schema({
    exp: String,
    name: String,
    owner: String
})

export const Account = mongoose.model("Account", account);
