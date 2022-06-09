import { Address } from "cluster";

export interface Person {
    readonly username: string;
    readonly fullName: string;

    readonly email: string;
    readonly description: string;

    readonly address: Address;

}