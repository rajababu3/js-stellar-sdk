/// <reference types="urijs" />
import { Asset } from "stellar-base";
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class AccountCallBuilder extends CallBuilder<ServerApi.AccountRecord> {
    constructor(serverUrl: uri.URI);
    public accountId(id: string): this;
    public forSigner(id: string): this;
    public forAsset(asset: Asset): this;
}
