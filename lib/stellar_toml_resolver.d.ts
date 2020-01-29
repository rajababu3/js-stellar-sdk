export declare const STELLAR_TOML_MAX_SIZE: number;
export declare class StellarTomlResolver {
    public static resolve(domain: string, opts?: StellarTomlResolver.StellarTomlResolveOptions): Promise<{
        [key: string]: any;
    }>;
}
export declare namespace StellarTomlResolver {
    interface StellarTomlResolveOptions {
        allowHttp?: boolean;
        timeout?: number;
    }
}
