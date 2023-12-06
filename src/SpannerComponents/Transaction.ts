import {TrueTime} from "./TrueTime";
export class Transaction {
    data: number;
    key: number;
    completed: boolean;
    timestamp: TrueTime | null;


    constructor(data: number, key: number) {
        this.data = data;
        this.key = key;
        this.completed = false;
        this.timestamp = null;
    }
}