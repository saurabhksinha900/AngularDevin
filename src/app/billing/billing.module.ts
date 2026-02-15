import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingOverviewComponent } from './billing-overview/billing-overview.component';
import { BillingInvoicesComponent } from './billing-invoices/billing-invoices.component';
import { BillingPaymentsComponent } from './billing-payments/billing-payments.component';
import { BillingPlansComponent } from './billing-plans/billing-plans.component';
import { BillingHistoryComponent } from './billing-history/billing-history.component';


@NgModule({
  declarations: [BillingOverviewComponent, BillingInvoicesComponent, BillingPaymentsComponent, BillingPlansComponent, BillingHistoryComponent],
  imports: [
    CommonModule,
    BillingRoutingModule
  ]
})
export class BillingModule { }
