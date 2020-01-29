/// <reference types="urijs" />
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class TransactionCallBuilder extends CallBuilder<ServerApi.CollectionPage<ServerApi.TransactionRecord>> {
    constructor(serverUrl: uri.URI);
    public transaction(transactionId: string): this;
    public forAccount(accountId: string): this;
    public forLedger(sequence: number | string): this;
    public includeFailed(value: boolean): this;
}
