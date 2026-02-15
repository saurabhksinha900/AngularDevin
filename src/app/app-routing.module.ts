import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
  { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsModule' },
  { path: 'billing', loadChildren: './billing/billing.module#BillingModule' },
  { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
