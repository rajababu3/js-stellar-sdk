import { Omit } from "utility-types";
import { Horizon } from "./horizon_api";
import { ServerApi } from "./server_api";
export declare class AccountResponse implements Omit<ServerApi.AccountRecord, "_links"> {
    public readonly id: string;
    public readonly paging_token: string;
    public readonly account_id: string;
    public sequence: string;
    public readonly subentry_count: number;
    public readonly inflation_destination: string;
    public readonly last_modified_ledger: number;
    public readonly thresholds: Horizon.AccountThresholds;
    public readonly flags: Horizon.Flags;
    public readonly balances: Horizon.BalanceLine[];
    public readonly signers: ServerApi.AccountRecordSigners[];
    public readonly data: (options: {
        value: string;
    }) => Promise<{
        value: string;
    }>;
    public readonly data_attr: Record<string, string>;
    public readonly effects: ServerApi.CallCollectionFunction<ServerApi.EffectRecord>;
    public readonly offers: ServerApi.CallCollectionFunction<ServerApi.OfferRecord>;
    public readonly operations: ServerApi.CallCollectionFunction<ServerApi.OperationRecord>;
    public readonly payments: ServerApi.CallCollectionFunction<ServerApi.PaymentOperationRecord>;
    public readonly trades: ServerApi.CallCollectionFunction<ServerApi.TradeRecord>;
    private readonly _baseAccount;
    constructor(response: ServerApi.AccountRecord);
    public accountId(): string;
    public sequenceNumber(): string;
    public incrementSequenceNumber(): void;
}
