import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerReviewComponent } from './broker-review.component';

describe('BrokerReviewComponent', () => {
  let component: BrokerReviewComponent;
  let fixture: ComponentFixture<BrokerReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrokerReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrokerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
