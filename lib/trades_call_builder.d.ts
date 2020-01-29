/// <reference types="urijs" />
import { Asset } from "stellar-base";
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class TradesCallBuilder extends CallBuilder<ServerApi.CollectionPage<ServerApi.TradeRecord>> {
    constructor(serverUrl: uri.URI);
    public forAssetPair(base: Asset, counter: Asset): this;
    public forOffer(offerId: string): this;
    public forAccount(accountId: string): this;
}
