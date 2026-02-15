import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingOverviewComponent } from './billing-overview/billing-overview.component';
import { BillingInvoicesComponent } from './billing-invoices/billing-invoices.component';
import { BillingPaymentsComponent } from './billing-payments/billing-payments.component';
import { BillingPlansComponent } from './billing-plans/billing-plans.component';
import { BillingHistoryComponent } from './billing-history/billing-history.component';

const routes: Routes = [
  { path: '', component: BillingOverviewComponent },
  { path: 'invoices', component: BillingInvoicesComponent },
  { path: 'payments', component: BillingPaymentsComponent },
  { path: 'plans', component: BillingPlansComponent },
  { path: 'history', component: BillingHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
