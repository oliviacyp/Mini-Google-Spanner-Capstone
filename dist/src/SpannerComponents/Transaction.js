"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    data;
    key;
    completed;
    timestamp;
    constructor(data, key) {
        this.data = data;
        this.key = key;
        this.completed = false;
        this.timestamp = null;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.js.map