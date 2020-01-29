/// <reference types="eventsource" />
/// <reference types="urijs" />
import { Horizon } from "./horizon_api";
import { ServerApi } from "./server_api";
export interface EventSourceOptions<T> {
    onmessage?: (value: T) => void;
    onerror?: (event: MessageEvent) => void;
    reconnectTimeout?: number;
}
export declare class CallBuilder<T extends Horizon.FeeStatsResponse | Horizon.BaseResponse | ServerApi.CollectionPage<Horizon.BaseResponse>> {
    protected url: uri.URI;
    public filter: string[][];
    protected originalSegments: string[];
    private checkFilter;
    private _requestFnForLink;
    private _parseRecord;
    private _sendNormalRequest;
    private _parseResponse;
    private _toCollectionPage;
    private _handleNetworkError;
    constructor(serverUrl: uri.URI);
    public call(): Promise<T>;
    public stream(options?: EventSourceOptions<T>): () => void;
    public cursor(cursor: string): this;
    public limit(recordsNumber: number): this;
    public order(direction: "asc" | "desc"): this;
    public join(include: "transactions"): this;
}
