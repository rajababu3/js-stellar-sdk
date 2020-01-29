/// <reference types="urijs" />
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class AssetsCallBuilder extends CallBuilder<ServerApi.CollectionPage<ServerApi.AssetRecord>> {
    constructor(serverUrl: uri.URI);
    public forCode(value: string): AssetsCallBuilder;
    public forIssuer(value: string): AssetsCallBuilder;
}
