import { Component, OnInit } from '@angular/core';
import { OrderSummaryService } from './order-summary.service';
import { IOrderDetail } from '../models/IOrder';
import { IShipping } from '../models/IShipping';
import { ITax } from '../models/ITax';
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

    /*
    1) should have a branch that is prior example
      Downsides
        We have to wait by checking that the properties value exists to avoid a null ref (guard).
        We are hitting 3 different services and we don't know how long it will take
          This forces you to choose what / how you display info to the user. Do you
          hold back the shipping section or the whole order page or have a loading icon?
    2) branch that is fixed
      Move the ngIf to wrap the whole page
      Move the calls to a forkJoin
      Make the summary page more of a presentation component
        It shouldn't need to figure out how to calculate the order total.
          Services are just doing HTTP and not "thinking" at all. The component is responsible for
          all the stitching.
        Could just return OrderSummary as an object

    I think the mistake I make with this kind of enhancement is focusing on using RxJS to build the solution
    when instead I should just work out the solution first then apply RxJS principals.

    Extras:
      Conditional Return logic if the shipping endpoint takes longer then XX time.

    now we should just focus on what it is we are going to do, then we can build out those two branches.
  */
}
