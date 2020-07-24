import { IAddress } from './IAddress';

export interface IShipping {
    carrier: string;
    address: IAddress;
    cost: number;
}
