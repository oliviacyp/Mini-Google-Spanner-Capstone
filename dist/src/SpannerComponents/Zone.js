"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zone = void 0;
class Zone {
    _name;
    _splits;
    constructor(name, splits) {
        this._name = name;
        this._splits = splits;
    }
    get name() {
        return this._name;
    }
    get splits() {
        return this._splits;
    }
}
exports.Zone = Zone;
//# sourceMappingURL=Zone.js.map