import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsOverviewComponent } from './analytics-overview/analytics-overview.component';
import { AnalyticsChartsComponent } from './analytics-charts/analytics-charts.component';
import { AnalyticsReportsComponent } from './analytics-reports/analytics-reports.component';
import { AnalyticsMetricsComponent } from './analytics-metrics/analytics-metrics.component';
import { AnalyticsExportComponent } from './analytics-export/analytics-export.component';

const routes: Routes = [
  { path: '', component: AnalyticsOverviewComponent },
  { path: 'charts', component: AnalyticsChartsComponent },
  { path: 'reports', component: AnalyticsReportsComponent },
  { path: 'metrics', component: AnalyticsMetricsComponent },
  { path: 'export', component: AnalyticsExportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
