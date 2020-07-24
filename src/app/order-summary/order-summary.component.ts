import { Component, OnInit } from '@angular/core';
import { ShippingService } from './shipping.service';
import { TaxService } from './tax.service';
import { OrderService } from './order.service';
import { IOrderDetail } from '../models/IOrderDetail';
import { IShipping } from '../models/IShipping';
import { ITax } from '../models/ITax';

@Component({
    templateUrl: './order-summary.component.html',
})
export class OrderSummaryComponent implements OnInit {
    orderDetails: IOrderDetail[];
    shipping: IShipping;
    tax: ITax;
    orderDetailsTotalAmount = 0;

    constructor(private orderService: OrderService, private shippingService: ShippingService, private taxService: TaxService) {}

    ngOnInit(): void {
        this.orderService.getOrder().subscribe((order) => {
            this.orderDetails = order;
            let totalWeight = 0;
            this.orderDetails.forEach((item) => {
                this.orderDetailsTotalAmount += item.price * item.qty;
                totalWeight += item.weight;
            });
            this.shippingService.getShipping(totalWeight).subscribe((shipping) => {
                this.shipping = shipping;
            });
        });

        this.taxService.getTax().subscribe((tax) => {
            this.tax = tax;
        });
    }

    get orderTotal(): number {
        return this.orderDetailsTotalAmount + this.orderDetailsTotalAmount * this.tax.amount + this.shipping.cost;
    }
}
