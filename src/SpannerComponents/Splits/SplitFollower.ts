import {Split} from "./Split";
import {Key} from "./Key";

export class SplitFollower extends Split {

    constructor(number: number, firstKey: Key, lastKey: Key) {
        super(number, firstKey, lastKey);
    }

    applyMutations(): void {
    }
}