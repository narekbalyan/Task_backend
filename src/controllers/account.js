import express from "express";
import {accountService} from '../services/account.js';

export const accountRouter = express.Router();

accountRouter.get("/accounts", async (req, res) => {
    try {
        res.send(await accountService.getAccounts());
    } catch (e) {
        res.sendStatus(500);
    }
})

accountRouter.get("/accounts/:id", async (req, res) => {
    try {
        res.send(await accountService.getAccountById(req.params.id));
    } catch (e) {
        res.sendStatus(500);
    }
})