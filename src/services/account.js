import { Account } from '../models/account.js';

class AccountService {
    async getAccounts() {
        return await Account.find();
    }

    async getAccountById(id) {
        return await Account.findById(id);
    }
}

export const accountService = new AccountService();
