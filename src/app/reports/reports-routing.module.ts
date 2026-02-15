import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { ReportGeneratorComponent } from './report-generator/report-generator.component';
import { ReportExportComponent } from './report-export/report-export.component';
import { ReportScheduleComponent } from './report-schedule/report-schedule.component';

const routes: Routes = [
  { path: '', component: ReportListComponent },
  { path: 'detail', component: ReportDetailComponent },
  { path: 'generator', component: ReportGeneratorComponent },
  { path: 'export', component: ReportExportComponent },
  { path: 'schedule', component: ReportScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
