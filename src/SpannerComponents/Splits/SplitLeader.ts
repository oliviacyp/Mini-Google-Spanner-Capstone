import {Split} from "./Split";
import {Key} from "./Key";

export class SplitLeader extends Split {

    constructor(number: number, firstKey: Key, lastKey: Key) {
        super(number, firstKey, lastKey);
    }

    applyMutations(): void {

    }

    // Additional methods specific to SplitLeader
    startTransaction(): void {
        // Logic to start a new transaction
        // ...
    }

    // acquireLock(row: Row): void {
    //     // Logic to acquire a lock on the specified row
    //     // ...
    // }
    //
    // assignTimestamp(): Timestamp {
    //     // Logic to assign a timestamp based on TrueTime.ts
    //     // ...
    // }

    // notifyReplicas(transactionDetails: TransactionDetails): void {
    //     // Logic to notify SplitFollowers about the transaction and its timestamp
    //     // ...
    // }

    commitTransaction(): void {
        // Logic to commit the transaction
        // ...
    }

    waitForRealTimeConfirmation(): void {
        // Logic to wait until the transaction's timestamp has passed in real time
        // ...
    }
}