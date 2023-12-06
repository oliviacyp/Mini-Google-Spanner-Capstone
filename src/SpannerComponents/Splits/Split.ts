import {Key} from "./Key";

export abstract class Split {
    number: number;
    firstKey: Key;
    lastKey: Key;
    keymap: Map<number, Key>;

    protected constructor(number: number, firstKey: Key, lastKey: Key) {
        this.number = number;
        this.firstKey = firstKey;
        this.lastKey = lastKey;
        this.keymap = new Map<number, Key>();
    }

    abstract applyMutations(): void;
}
