"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = exports.keyNums = void 0;
var keyNums;
(function (keyNums) {
    keyNums[keyNums["zero"] = 0] = "zero";
    keyNums[keyNums["one"] = 1] = "one";
    keyNums[keyNums["two"] = 2] = "two";
    keyNums[keyNums["three"] = 3] = "three";
    keyNums[keyNums["four"] = 4] = "four";
    keyNums[keyNums["five"] = 5] = "five";
    keyNums[keyNums["six"] = 6] = "six";
    keyNums[keyNums["seven"] = 7] = "seven";
    keyNums[keyNums["eight"] = 8] = "eight";
    keyNums[keyNums["nine"] = 9] = "nine";
    keyNums[keyNums["ten"] = 10] = "ten";
    keyNums[keyNums["eleven"] = 11] = "eleven";
    keyNums[keyNums["twelve"] = 12] = "twelve";
    keyNums[keyNums["thirteen"] = 13] = "thirteen";
    keyNums[keyNums["fourteen"] = 14] = "fourteen";
})(keyNums = exports.keyNums || (exports.keyNums = {}));
class Key {
    key;
    lockAcquired;
    constructor(key) {
        this.key = key;
        this.lockAcquired = false;
    }
}
exports.Key = Key;
//# sourceMappingURL=Key.js.map