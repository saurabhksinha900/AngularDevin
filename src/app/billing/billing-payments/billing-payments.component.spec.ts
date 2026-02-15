import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingPaymentsComponent } from './billing-payments.component';

describe('BillingPaymentsComponent', () => {
  let component: BillingPaymentsComponent;
  let fixture: ComponentFixture<BillingPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
