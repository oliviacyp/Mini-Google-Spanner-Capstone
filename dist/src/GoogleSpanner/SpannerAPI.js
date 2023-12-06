"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpannerAPI = void 0;
const Zone_1 = require("../SpannerComponents/Zone");
const SplitLeader_1 = require("../SpannerComponents/Splits/SplitLeader");
const Key_1 = require("../SpannerComponents/Splits/Key");
const SplitFollower_1 = require("../SpannerComponents/Splits/SplitFollower");
class SpannerAPI {
    NUMZONES = 3;
    NUMKEYS = Key_1.keyNums.fourteen;
    NUMSPLITS = 3;
    SPLITSIZE = 5;
    zones;
    constructor() {
        this.zones = [];
        this.init();
    }
    init() {
        const newKeys = [];
        for (let i = 0; i <= this.NUMKEYS; i++) {
            newKeys.push(new Key_1.Key(i));
        }
        const split1Leader = new SplitLeader_1.SplitLeader(1, newKeys[0], newKeys[4]);
        const split1Follower1 = new SplitFollower_1.SplitFollower(1, newKeys[0], newKeys[4]);
        const split1Follower2 = new SplitFollower_1.SplitFollower(1, newKeys[0], newKeys[4]);
        const split2Leader = new SplitLeader_1.SplitLeader(2, newKeys[5], newKeys[9]);
        const split2Follower1 = new SplitFollower_1.SplitFollower(2, newKeys[5], newKeys[9]);
        const split2Follower2 = new SplitFollower_1.SplitFollower(2, newKeys[5], newKeys[9]);
        const split3Leader = new SplitLeader_1.SplitLeader(3, newKeys[10], newKeys[14]);
        const split3Follower1 = new SplitFollower_1.SplitFollower(3, newKeys[10], newKeys[14]);
        const split3Follower2 = new SplitFollower_1.SplitFollower(3, newKeys[10], newKeys[14]);
        let zone1splits = [split1Leader, split2Follower1, split3Follower1];
        let zone2splits = [split1Follower1, split2Leader, split3Follower2];
        let zone3splits = [split1Follower2, split2Follower2, split3Leader];
        const ZONE1 = new Zone_1.Zone(1, zone1splits);
        const ZONE2 = new Zone_1.Zone(2, zone2splits);
        const ZONE3 = new Zone_1.Zone(3, zone3splits);
        this.zones.push(ZONE1, ZONE2, ZONE3);
    }
    printZones() {
        for (const zone of this.zones) {
            console.log(zone.name);
            console.log(zone.splits);
        }
    }
}
exports.SpannerAPI = SpannerAPI;
//# sourceMappingURL=SpannerAPI.js.map