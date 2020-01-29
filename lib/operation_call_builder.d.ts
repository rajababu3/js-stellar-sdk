/// <reference types="urijs" />
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class OperationCallBuilder extends CallBuilder<ServerApi.CollectionPage<ServerApi.OperationRecord>> {
    constructor(serverUrl: uri.URI);
    public operation(operationId: string): this;
    public forAccount(accountId: string): this;
    public forLedger(sequence: number | string): this;
    public forTransaction(transactionId: string): this;
    public includeFailed(value: boolean): this;
}
