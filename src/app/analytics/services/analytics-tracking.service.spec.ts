import { TestBed } from '@angular/core/testing';

import { AnalyticsTrackingService } from './analytics-tracking.service';

describe('AnalyticsTrackingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyticsTrackingService = TestBed.get(AnalyticsTrackingService);
    expect(service).toBeTruthy();
  });
});
