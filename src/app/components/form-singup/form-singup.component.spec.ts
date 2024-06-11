import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSingupComponent } from './form-singup.component';

describe('FormSingupComponent', () => {
  let component: FormSingupComponent;
  let fixture: ComponentFixture<FormSingupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSingupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
