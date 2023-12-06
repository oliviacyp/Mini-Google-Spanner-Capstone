import {Split} from "../SpannerComponents/Splits/Split";
import {Zone} from "../SpannerComponents/Zone";
import {SplitLeader} from "../SpannerComponents/Splits/SplitLeader";
import {Key, keyNums} from "../SpannerComponents/Splits/Key";
import {SplitFollower} from "../SpannerComponents/Splits/SplitFollower";

export class SpannerAPI {
    readonly NUMZONES: number = 3;
    readonly NUMKEYS: number = keyNums.fourteen;
    readonly NUMSPLITS: number = 3;
    readonly SPLITSIZE: number = 5;

    private zones: Zone[];

    constructor() {
        this.zones = [];
        this.init();
    }

    private init() {
        // Generate Keys
        const newKeys: Key[] = [];
        for (let i = 0; i <= this.NUMKEYS; i++) {
            newKeys.push(new Key(i));
        }
        // Assign Keys to Splits
        const split1Leader = new SplitLeader(1, newKeys[0], newKeys[4]);
        const split1Follower1 = new SplitFollower(1, newKeys[0], newKeys[4]);
        const split1Follower2 = new SplitFollower(1, newKeys[0], newKeys[4]);
        const split2Leader = new SplitLeader(2, newKeys[5], newKeys[9]);
        const split2Follower1 = new SplitFollower(2, newKeys[5], newKeys[9]);
        const split2Follower2 = new SplitFollower(2, newKeys[5], newKeys[9]);
        const split3Leader = new SplitLeader(3, newKeys[10], newKeys[14]);
        const split3Follower1 = new SplitFollower(3, newKeys[10], newKeys[14]);
        const split3Follower2 = new SplitFollower(3, newKeys[10], newKeys[14]);
        // Create Zones and assign Splits
        let zone1splits: Split[] = [split1Leader, split2Follower1, split3Follower1];
        let zone2splits: Split[] = [split1Follower1,split2Leader, split3Follower2];
        let zone3splits: Split[] = [split1Follower2,split2Follower2, split3Leader];
        const ZONE1: Zone = new Zone(1, zone1splits);
        const ZONE2: Zone = new Zone(2, zone2splits);
        const ZONE3: Zone = new Zone(3, zone3splits);
        this.zones.push(ZONE1, ZONE2, ZONE3);
    }

    public printZones(): void {
        for (const zone of this.zones) {
            console.log(zone.name);
            console.log(zone.splits)
        }
    }

    // public write(transaction: Transaction): number {
    //     this.findSplit(transaction.key);
    //     return 1;
    // }

    // private findSplit(row: number): Split {
    //     return Split;
    // }

    // getLeaderOfSplit(split: Split): SplitLeader | null {
    //     // Your logic to get the leader of the specified split
    //     // Return the leader or null if not found
    //     // ...
    // }
    //
    // getZone(split: Split): Zone | null {
    //     // Your logic to get the zone associated with the specified split
    //     // Return the zone or null if not found
    //     // ...
    // }
    //
    // getFollowersOfSplit(split: Split): SplitFollowers[] {
    //     // Your logic to get followers of the specified split
    //     // Return an array of followers
    //     // ...
    // }

    // Add more methods as needed based on your project requirements
}
