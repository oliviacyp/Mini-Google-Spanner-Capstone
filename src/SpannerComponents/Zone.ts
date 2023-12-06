import {Split} from "./Splits/Split";

export class Zone{
    private _name: number;
    private _splits: Array<Split>;

    constructor(name: number, splits: Array<Split>) {
        this._name = name;
        this._splits = splits;
    }

    get name(): number {
        return this._name;
    }

    get splits(): Array<Split> {
        return this._splits;
    }
}