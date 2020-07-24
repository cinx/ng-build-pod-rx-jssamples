import { IOrder } from './IOrder';
import { IShipping } from './IShipping';
import { ITax } from './ITax';

export interface IOrderSummary {
    orders: IOrder[];
    shipping: IShipping;
    tax?: ITax;
    orderTotal?: number;
}
