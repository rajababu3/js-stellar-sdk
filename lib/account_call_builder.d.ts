/// <reference types="urijs" />
import { Asset } from "stellar-base";
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class AccountCallBuilder extends CallBuilder<ServerApi.AccountRecord> {
    constructor(serverUrl: uri.URI);
    accountId(id: string): this;
    forSigner(id: string): this;
    forAsset(asset: Asset): this;
}
