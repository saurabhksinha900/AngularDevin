import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsOverviewComponent } from './analytics-overview/analytics-overview.component';
import { AnalyticsChartsComponent } from './analytics-charts/analytics-charts.component';
import { AnalyticsReportsComponent } from './analytics-reports/analytics-reports.component';
import { AnalyticsMetricsComponent } from './analytics-metrics/analytics-metrics.component';
import { AnalyticsExportComponent } from './analytics-export/analytics-export.component';


@NgModule({
  declarations: [AnalyticsOverviewComponent, AnalyticsChartsComponent, AnalyticsReportsComponent, AnalyticsMetricsComponent, AnalyticsExportComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule
  ]
})
export class AnalyticsModule { }
