import { Component, OnInit } from '@angular/core';
import { OrderSummaryService } from './order-summary.service';
import { IOrderSummary } from '../models/IOrderSummary';

@Component({
    templateUrl: './order-summary.component.html',
})
export class OrderSummaryComponent implements OnInit {
    orderSummary: IOrderSummary;

    constructor(private orderSummaryService: OrderSummaryService) {}

    ngOnInit(): void {
        this.orderSummaryService.getSummary().subscribe((orderSummary) => {
            this.orderSummary = orderSummary;
        });
    }
}
