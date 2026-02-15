import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { DashboardWidgetsComponent } from './dashboard-widgets/dashboard-widgets.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { DashboardStatsComponent } from './dashboard-stats/dashboard-stats.component';


@NgModule({
  declarations: [DashboardHomeComponent, DashboardSummaryComponent, DashboardWidgetsComponent, DashboardChartsComponent, DashboardStatsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
