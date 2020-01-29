/// <reference types="urijs" />
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class PaymentCallBuilder extends CallBuilder<ServerApi.CollectionPage<ServerApi.PaymentOperationRecord>> {
    constructor(serverUrl: uri.URI);
    public forAccount(accountId: string): this;
    public forLedger(sequence: number | string): this;
    public forTransaction(transactionId: string): this;
}
