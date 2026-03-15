import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface T__1 {
    id: bigint;
    name: string;
    description: string;
    price: number;
}
export interface T {
    id: bigint;
    name: string;
    description: string;
}
export interface BusinessInfo {
    name: string;
    address: string;
    phone: string;
}
export interface backendInterface {
    addProduct(name: string, description: string, price: number): Promise<T__1>;
    addProductCategory(name: string, description: string): Promise<T>;
    getAllProductCategories(): Promise<Array<T>>;
    getAllProducts(): Promise<Array<T__1>>;
    getBusinessInfo(): Promise<BusinessInfo>;
    getProduct(id: bigint): Promise<T__1>;
    getProductCategory(id: bigint): Promise<T>;
}
