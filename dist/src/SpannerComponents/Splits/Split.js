"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Split = void 0;
class Split {
    number;
    firstKey;
    lastKey;
    keymap;
    constructor(number, firstKey, lastKey) {
        this.number = number;
        this.firstKey = firstKey;
        this.lastKey = lastKey;
        this.keymap = new Map();
    }
}
exports.Split = Split;
//# sourceMappingURL=Split.js.map