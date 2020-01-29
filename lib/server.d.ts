/// <reference types="urijs" />
import { Asset, Transaction } from "stellar-base";
import { AccountCallBuilder } from "./account_call_builder";
import { AccountResponse } from "./account_response";
import { AssetsCallBuilder } from "./assets_call_builder";
import { EffectCallBuilder } from "./effect_call_builder";
import { FriendbotBuilder } from "./friendbot_builder";
import { Horizon } from "./horizon_api";
import { LedgerCallBuilder } from "./ledger_call_builder";
import { OfferCallBuilder } from "./offer_call_builder";
import { OperationCallBuilder } from "./operation_call_builder";
import { OrderbookCallBuilder } from "./orderbook_call_builder";
import { PathCallBuilder } from "./path_call_builder";
import { PaymentCallBuilder } from "./payment_call_builder";
import { TradeAggregationCallBuilder } from "./trade_aggregation_call_builder";
import { TradesCallBuilder } from "./trades_call_builder";
import { TransactionCallBuilder } from "./transaction_call_builder";
export declare const SUBMIT_TRANSACTION_TIMEOUT: number;
export declare class Server {
    public readonly serverURL: uri.URI;
    constructor(serverURL: string, opts?: Server.Options);
    public fetchTimebounds(seconds: number, _isRetry?: boolean): Promise<Server.Timebounds>;
    public fetchBaseFee(): Promise<number>;
    public feeStats(): Promise<Horizon.FeeStatsResponse>;
    public submitTransaction(transaction: Transaction): Promise<Horizon.SubmitTransactionResponse>;
    public accounts(): AccountCallBuilder;
    public ledgers(): LedgerCallBuilder;
    public transactions(): TransactionCallBuilder;
    public offers(resource: string, ...resourceParams: string[]): OfferCallBuilder;
    public orderbook(selling: Asset, buying: Asset): OrderbookCallBuilder;
    public trades(): TradesCallBuilder;
    public operations(): OperationCallBuilder;
    public paths(source: string, destination: string, destinationAsset: Asset, destinationAmount: string): PathCallBuilder;
    public strictReceivePaths(source: string | Asset[], destinationAsset: Asset, destinationAmount: string): PathCallBuilder;
    public strictSendPaths(sourceAsset: Asset, sourceAmount: string, destination: string | Asset[]): PathCallBuilder;
    public payments(): PaymentCallBuilder;
    public effects(): EffectCallBuilder;
    public friendbot(address: string): FriendbotBuilder;
    public assets(): AssetsCallBuilder;
    public loadAccount(accountId: string): Promise<AccountResponse>;
    public tradeAggregation(base: Asset, counter: Asset, start_time: number, end_time: number, resolution: number, offset: number): TradeAggregationCallBuilder;
}
export declare namespace Server {
    interface Options {
        allowHttp?: boolean;
        appName?: string;
        appVersion?: string;
    }
    interface Timebounds {
        minTime: number;
        maxTime: number;
    }
}
