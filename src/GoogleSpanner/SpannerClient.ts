import {SpannerAPI} from "./SpannerAPI";

export class SpannerClient {
    private api: SpannerAPI;

    constructor(api: SpannerAPI) {
        this.api = api;
    }
    writeDataToSplit(data: number): void {
    }
}