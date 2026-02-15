import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { DashboardWidgetsComponent } from './dashboard-widgets/dashboard-widgets.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { DashboardStatsComponent } from './dashboard-stats/dashboard-stats.component';

const routes: Routes = [
  { path: '', component: DashboardHomeComponent },
  { path: 'summary', component: DashboardSummaryComponent },
  { path: 'widgets', component: DashboardWidgetsComponent },
  { path: 'charts', component: DashboardChartsComponent },
  { path: 'stats', component: DashboardStatsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
