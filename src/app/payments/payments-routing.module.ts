import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardpaymentsComponent } from './cardpayments/cardpayments.component';
import { UpiComponent } from './upi/upi.component';

const routes: Routes = [
  {path:'cardpayments',component:CardpaymentsComponent},
  {path:'upi',component:UpiComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
