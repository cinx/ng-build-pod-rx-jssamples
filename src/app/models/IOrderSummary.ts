import { IOrderDetail } from './IOrder';
import { IShipping } from './IShipping';
import { ITax } from './ITax';

export interface IOrderSummary {
    orderDetails: IOrderDetail[];
    shipping: IShipping;
    tax?: ITax;
    orderTotal?: number;
    orderDetailsTotal?: number;
}
