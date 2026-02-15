import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { ReportGeneratorComponent } from './report-generator/report-generator.component';
import { ReportExportComponent } from './report-export/report-export.component';
import { ReportScheduleComponent } from './report-schedule/report-schedule.component';


@NgModule({
  declarations: [ReportListComponent, ReportDetailComponent, ReportGeneratorComponent, ReportExportComponent, ReportScheduleComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
