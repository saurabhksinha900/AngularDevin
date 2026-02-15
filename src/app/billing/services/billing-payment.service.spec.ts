import { TestBed } from '@angular/core/testing';

import { BillingPaymentService } from './billing-payment.service';

describe('BillingPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillingPaymentService = TestBed.get(BillingPaymentService);
    expect(service).toBeTruthy();
  });
});
