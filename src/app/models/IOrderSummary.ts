import { IOrderDetail } from './IOrderDetail';
import { IShipping } from './IShipping';
import { ITax } from './ITax';

export interface IOrderSummary {
    orders: IOrderDetail[];
    shipping: IShipping;
    tax?: ITax;
    orderTotal?: number;
}
