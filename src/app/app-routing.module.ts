import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderSummaryComponent } from './order-summary/order-summary.component';



const routes: Routes = [{ path: '', component: OrderSummaryComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
