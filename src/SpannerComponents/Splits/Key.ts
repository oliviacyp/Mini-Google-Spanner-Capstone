export enum keyNums {
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen
}

export class Key {
    key: number;
    lockAcquired: boolean;

    constructor(key: number) {
        this.key = key;
        this.lockAcquired = false;
    }
}