import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { OrderService } from './order.service';
import { ShippingService } from './shipping.service';
import { TaxService } from './tax.service';
import { switchMap, map } from 'rxjs/operators';
import { IOrderSummary } from '../models/IOrderSummary';

@Injectable({
    providedIn: 'root',
})
export class OrderSummaryService {
    constructor(private orderService: OrderService, private shippingService: ShippingService, private taxService: TaxService) {}

    getSummary(): Observable<IOrderSummary> {
        return forkJoin([this.orderService.getOrder(), this.taxService.getTax()]).pipe(
            switchMap(([orders, tax]) => {
                let totalWeight = 0;
                let orderDetailsTotal = 0;
                orders.forEach((item) => {
                    totalWeight += item.weight;
                    orderDetailsTotal += item.price * item.qty;
                });
                return this.shippingService.getShipping(totalWeight).pipe(
                    map((shipping) => {
                        const orderSummary: IOrderSummary = {
                            orderDetails: orders,
                            shipping,
                            tax,
                            orderDetailsTotal,
                            orderTotal: orderDetailsTotal + orderDetailsTotal * tax.amount + shipping.cost,
                        };
                        return orderSummary;
                    }),
                );
            }),
        );
    }
}
