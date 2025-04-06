import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { CardpaymentsComponent } from './cardpayments/cardpayments.component';
import { UpiComponent } from './upi/upi.component';


@NgModule({
  declarations: [
    CardpaymentsComponent,
    UpiComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
