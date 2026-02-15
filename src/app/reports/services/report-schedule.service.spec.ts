import { TestBed } from '@angular/core/testing';

import { ReportScheduleService } from './report-schedule.service';

describe('ReportScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportScheduleService = TestBed.get(ReportScheduleService);
    expect(service).toBeTruthy();
  });
});
